<script lang="ts">
	import { FileButton } from '@skeletonlabs/skeleton';
	import type { ActionData } from '../../routes/(admin)/create-course/$types';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';

	export let url = '';
	let success = false;

	async function onChangeHandler(e: Event) {
		const files = (e.target as HTMLInputElement)?.files;

		if (!files?.length) {
			return;
		}

		const file = files[0];
		let data = new FormData();
		data.append('file', file);

		const response = await fetch('/api/upload-scorm', {
			method: 'POST',
			body: data,
		});

		let responseJson = await response.json();
		success = responseJson.success;
		url = responseJson.url;

		return;
	}
</script>

<span>Upload Scorm Zip File</span>
<input class="input" type="file" name="scormFile" accept=".zip" on:change={onChangeHandler} />
{#if success } 
	<p>Successfully uploaded scorm file:</p>
	<p>{ url }</p>
{/if}
