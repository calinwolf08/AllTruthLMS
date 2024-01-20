<script lang="ts">
	import { type Activity, createDefaultActivity, ActivityType, type ScormActivity, type VideoActivity } from '$lib/Models/Course';
	import ScormCreator from './ScormCreator.svelte';
	import { Drawer, Input, Label, Button } from 'flowbite-svelte';
    import {sineIn} from 'svelte/easing';

	export let hidden: boolean;
	export let activity: Activity = createDefaultActivity();
	export let updateActivity: (activity: Activity) => void;
	
	let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn,
    };

	$: enableSave = isActivityValid(activity);
	
	function isActivityValid(activity: Activity) {
		try {
			if (activity.activity_type == ActivityType.SCORM) {
				const scormActivity = activity as VideoActivity;
				const urlObj = new URL(scormActivity.url);
			} else if (activity.activity_type == ActivityType.VIDEO) {
				const videoActivity = activity as VideoActivity;
				const urlObj = new URL(videoActivity.url);
			} else {
				throw new Error("Activity Type Invalid:", activity.activity_type);
			}
		} catch (_) {
			console.warn('invalid activity', activity);
			return true;
		}

        return activity.name.length <= 0;
    }

	function saveActivity() {
		hidden = true;
		updateActivity(activity);
	}

	function getActivityUrl(activity: Activity) {
		switch (activity.activity_type) {
			case ActivityType.SCORM:
				return (activity as ScormActivity).player_url;
			default:
				console.error('Scorm expected but got: ', activity.activity_type);
				return '';
		}
	}
</script>

<Drawer class="p-10" width="w-1/2 max-w-3xl min-w-min" transitionType="fly" {transitionParams} bind:hidden={hidden} placement="right">
	<Label class="mb-4">Activity Name</Label>
	<Input class="mb-4" bind:value={activity.name} name="name" title="Name" placeholder="Activity Name" />

	{#if activity.activity_type == ActivityType.SCORM}
		<ScormCreator bind:activity={activity}  />
	{/if}

	<Button class="" disabled={!enableSave} on:click={saveActivity}>Save</Button >
</Drawer>
