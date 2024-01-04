<script lang="ts">
	import { type Activity, createDefaultActivity, ActivityType } from '$lib/Models/Course';
	import ScormCreator from './ScormCreator.svelte';
	import TextInput from './TextInput.svelte';

	export let meta: {
		addActivity: (activity: Activity, sIndex: number) => void;
		activityType: ActivityType;
		sIndex: number;
	};

	let { addActivity, activityType, sIndex } = meta;

	let activity = createDefaultActivity();
</script>

<div class="p-10">
	<TextInput bind:value={activity.name} name="name" title="Name" placeholder="Activity Name" />

	<div class="my-10">
		{#if activityType == ActivityType.SCORM}
			<ScormCreator />
		{:else if activityType == ActivityType.VIDEO}
			<p>Video Activity</p>
		{/if}
	</div>

	<button
		class="btn btn-md variant-filled-primary"
		on:click={() => {
			addActivity(activity, sIndex);
		}}>Save</button
	>
</div>
