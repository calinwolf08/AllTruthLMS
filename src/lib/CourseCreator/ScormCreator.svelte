<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton';
	import type { ActionData } from '../../routes/(admin)/create-course/$types';

	let uploadForm: HTMLFormElement;
	export let form: ActionData;

	async function onChangeHandler(e: Event) {
		const files = (e.target as HTMLInputElement)?.files;

		if (!files?.length) {
			return;
		}

		const file = files[0];
		uploadForm.submit();

		return;
	}
</script>

<form bind:this={uploadForm} method="POST" enctype="multipart/form-data" action="?/uploadScorm">
	<span>Upload Scorm Zip File</span>
	<input class="input" type="file" name="scormFile" accept=".zip" on:change={onChangeHandler} />
	{#if form?.success}
		<p>Successfully uploaded scorm file:</p>
		<p>{form?.url}</p>
	{/if}
</form>
