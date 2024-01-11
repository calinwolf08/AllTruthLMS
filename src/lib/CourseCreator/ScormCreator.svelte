<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton';
	import type { ActionData } from '../../routes/(admin)/create-course/$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { ActionResult } from '@sveltejs/kit';

	export let url = '';

	enum Result {
		SUCCESS = "SUCCESS",
		FAIL = "FAIL",
		EMPTY = "EMPTY",
	};

	let formResult = Result.EMPTY;

	let inputForm: HTMLFormElement;

	async function onChangeHandler(e: Event) {
		// const files = (e.target as HTMLInputElement)?.files;

		// if (!files?.length) {
		// 	return;
		// }

		// const file = files[0];
		// let data = new FormData();
		// data.append('file', file);

		// const response = await fetch('/api/upload-scorm', {
		// 	method: 'POST',
		// 	body: data,
		// });

		// let responseJson = await response.json();
		// success = responseJson.success;
		// url = responseJson.url;

		// return;
		const files = (e.target as HTMLInputElement)?.files;

		if (!files?.length) {
			return;
		}

		inputForm.submit();
	}
	
	const submitScorm: SubmitFunction = ({ form, data, action, cancel }) => {
		const file = data.get("scormFile") as File|null;

		if (!file?.size) {
			formResult = Result.FAIL;
			cancel();
		}

		return async ({ result, update }) => {
			if (result.type == 'success' && $page.form.success) {
				formResult = Result.SUCCESS;
				url = $page.form.url;
			} else {
				formResult = Result.FAIL;
			}

			await update({ reset: false});
		}
	}
</script>
<form bind:this={inputForm} method="POST" enctype="multipart/form-data" action="?/uploadScorm" use:enhance={submitScorm}>
	<span>Upload Scorm Zip File</span>
	<input class="input" type="file" name="scormFile" accept=".zip"/> 
	{#if formResult == Result.SUCCESS } 
		<p class="rounded-xl w-max px-3 mt-2 variant-filled-success text-white">Successfully uploaded scorm file: {url}</p>
	{:else if formResult == Result.FAIL}
	 	<p class="rounded-xl w-max px-3 mt-2 variant-filled-error text-white">Error uploading scorm file</p>
	{/if}
	<button class="btn btn-sm my-4 variant-filled-primary" type="submit" disabled={url.length > 0}>Upload</button>
</form>
