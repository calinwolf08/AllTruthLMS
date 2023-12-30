<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton';

	let form: HTMLFormElement;

	async function onChangeHandler(e: Event) {
		const files = (e.target as HTMLInputElement)?.files;

		if (!files?.length) {
			return;
		}
		
		const file = files[0];
		console.log('file data:', file); 
		// const formData = new FormData();
		// formData.append('file', file);
		// const response = await fetch('/api/upload-scorm', {
		// 	method: 'Post',
		// 	body: formData
		// });

		form.submit();

		return;

	}
</script>

<form bind:this={form} method="POST" enctype="multipart/form-data" action="?/uploadScorm">
	<span>Upload Scorm Zip File</span>
	<!-- <FileButton name="files" accept=".zip" on:change={onChangeHandler} /> -->
	<input class="input" type="file" name="scormFile" accept=".zip" on:change={onChangeHandler}/>
	<!-- <button type="submit">Submit</button> -->
</form>
