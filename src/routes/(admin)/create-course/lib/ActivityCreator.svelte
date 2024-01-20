<script lang="ts">
	import { type Activity, createDefaultActivity, ActivityType, type ScormActivity, type VideoActivity } from '$lib/Models/Course';
	import { getActivity } from '$lib/context';
	import ScormCreator from './ScormCreator.svelte';
	import { Drawer, Input, Label, Button } from 'flowbite-svelte';
    import {sineIn} from 'svelte/easing';

	export let hidden: boolean;
	export let updateActivity: () => void;
	
	const activity = getActivity();
	
	let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn,
    };

	$: enableSave = isActivityValid($activity);
	
	function isActivityValid(activity: Activity) {
		try {
			if (activity.activity_type == ActivityType.SCORM) {
				const scormActivity = activity as ScormActivity;
				const urlObj = new URL(scormActivity.player_url ?? '');
			} else if (activity.activity_type == ActivityType.VIDEO) {
				const videoActivity = activity as VideoActivity;
				const urlObj = new URL(videoActivity.url);
			} else {
				console.warn('invalid activity', activity);
				throw new Error();
			}
		} catch (_) {
			return true;
		}

        return activity.name.length <= 0;
    }

	function saveActivity() {
		hidden = true;
		updateActivity();
	}

</script>

<Drawer class="p-10" width="w-1/2 max-w-3xl min-w-min" transitionType="fly" {transitionParams} bind:hidden={hidden} placement="right">
	<Label class="mb-4">Activity Name</Label>
	<Input class="mb-4" bind:value={$activity.name} name="name" title="Name" placeholder="Activity Name" />

	{#if $activity.activity_type == ActivityType.SCORM}
		<ScormCreator />
	{/if}

	<Button class="" disabled={!enableSave} on:click={saveActivity}>Save</Button >
</Drawer>
