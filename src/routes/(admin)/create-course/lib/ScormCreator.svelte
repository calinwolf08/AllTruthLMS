<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { Input, Label, Button, Badge } from 'flowbite-svelte';
	import { getActivity, type ScormContext } from '$lib/context';

	const baseActivity = getActivity();
	
	if ($baseActivity.activity_type != "Scorm" || !("player_url" in $baseActivity)) {
		throw Error("Expected Scorm Activity Type");	
	}

	const activity = baseActivity as ScormContext;

	enum Result {
		SUCCESS = "SUCCESS",
		FAIL = "FAIL",
		EMPTY = "EMPTY",
	};

	let formResult = Result.EMPTY;
	let inputForm: HTMLFormElement;

	const submitScorm: SubmitFunction = ({ formElement, formData, action, cancel }) => {
		const file = formData.get("scormFile") as File|null;

		if (!file?.size) {
			formResult = Result.FAIL;
			cancel();
		}

		return async ({ result, update }) => {
			if (result.type == "success" || result.type == "failure") {
				await update({ reset: false});

				if ($page.form.success) {
					formResult = Result.SUCCESS;
					$activity.player_url =  $page.form.url;
				} else {
					formResult = Result.FAIL;
				}
			}
		}
	}
</script>
<form bind:this={inputForm} method="POST" enctype="multipart/form-data" action="?/uploadScorm" use:enhance={submitScorm}>
	<!-- Add Input field for the ScormId name here. On upload it should update the table as well as return the player_url-->
	<Label for="scormFile">Upload Scorm Zip File</Label>
	<Input class="input" type="file" name="scormFile" accept=".zip"/> 
	{#if formResult == Result.SUCCESS } 
		<Badge color="green">Successfully uploaded scorm file: {$activity.player_url}</Badge>
	{:else if formResult == Result.FAIL}
	 	<Badge color="red">Error uploading scorm file</Badge>
	{/if}
	<Button class="btn btn-sm my-4 variant-filled-primary" type="submit" disabled={$activity.player_url}>Upload</Button>
</form>
