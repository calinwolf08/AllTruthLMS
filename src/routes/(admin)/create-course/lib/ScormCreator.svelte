<script lang="ts">
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import { P, Input, Label, Button } from 'flowbite-svelte';
	import type { ScormActivity } from '$lib/Models/Course';

	export let activity: ScormActivity;

	enum Result {
		SUCCESS = "SUCCESS",
		FAIL = "FAIL",
		EMPTY = "EMPTY",
	};

	let formResult = Result.EMPTY;

	let inputForm: HTMLFormElement;

	async function onChangeHandler(e: Event) {
		const files = (e.target as HTMLInputElement)?.files;

		if (!files?.length) {
			return;
		}

		inputForm.submit();
	}
	
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
					activity.player_url =  $page.form.url;
				} else {
					formResult = Result.FAIL;
				}
			}
		}
	}
</script>
<form bind:this={inputForm} method="POST" enctype="multipart/form-data" action="?/uploadScorm" use:enhance={submitScorm}>
	<Label for="scormFile">Upload Scorm Zip File</Label>
	<Input class="input" type="file" name="scormFile" accept=".zip"/> 
	{#if formResult == Result.SUCCESS } 
		<P class="rounded-xl w-max px-3 mt-2 bg-green-400 text-white">Successfully uploaded scorm file: {activity.player_url}</P>
	{:else if formResult == Result.FAIL}
	 	<P class="rounded-xl w-max px-3 mt-2 bg-red-400 text-white">Error uploading scorm file</P>
	{/if}
	<Button class="btn btn-sm my-4 variant-filled-primary" type="submit" disabled={activity.player_url}>Upload</Button>
</form>
