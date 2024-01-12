<script lang="ts">
	import { type Activity, createDefaultActivity, ActivityType } from '$lib/Models/Course';
	import ScormCreator from './ScormCreator.svelte';
	import TextInput from './TextInput.svelte';

	export let meta: {
		addActivity: (activity: Activity, sIndex: number) => void;
		activityType: ActivityType;
		name: string;
		sIndex: number;
	};

	let { addActivity, activityType, name, sIndex } = meta;

	let activity = createDefaultActivity();
	activity.name = name;
	
	$: disableSave = validateActivity(activity.name, activity.url);
	
	function validateActivity(name: string, url: string) {
		try {
			const urlObj = new URL(url);
		} catch (_) {
			console.warn('invalid url:', url);
			return true;
		}

        return name.length <= 0;
    }
</script>

<div class="p-10">
	<TextInput bind:value={activity.name} name="name" title="Name" placeholder="Activity Name" />

	<div class="my-10">
		{#if activityType == ActivityType.SCORM}
			<ScormCreator bind:url={activity.url} />
		{:else if activityType == ActivityType.VIDEO}
			<p>Video Activity</p>
		{/if}
	</div>

	<button class="btn btn-md variant-filled-primary" 
		disabled={disableSave} on:click={() => { addActivity(activity, sIndex); }}> Save </button >
</div>
