<script lang="ts">
	import { type Activity, createDefaultActivity, ActivityType } from '$lib/Models/Course';
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

	$: disableSave = validateActivity(activity.name, activity.url);
	
	function validateActivity(name: string, url: string) {
		try {
			const urlObj = new URL(url);
		} catch (_) {
			console.warn('invalid url:', url);
			return true;
		}
		console.log("here", name, url);
        return name.length <= 0;
    }

	function saveActivity() {
		hidden = true;
		updateActivity(activity);
	}
</script>

<Drawer class="p-10" width="w-1/2 max-w-3xl min-w-min" transitionType="fly" {transitionParams} bind:hidden={hidden} placement="right">
	<Label class="mb-4">Activity Name</Label>
	<Input class="mb-4" bind:value={activity.name} name="name" title="Name" placeholder="Activity Name" />

	<ScormCreator bind:url={activity.url} />

	<Button class="" disabled={disableSave} on:click={saveActivity}> Save </Button >
</Drawer>
