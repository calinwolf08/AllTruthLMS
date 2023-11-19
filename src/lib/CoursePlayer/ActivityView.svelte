<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
	import { currentActivity } from "./stores";
    import type { Activity } from "./ActivityStructure";
	import { onMount } from "svelte";

    let loadedActivities = new Map<number, Activity>();
    let myResponse: string = "";

    async function getActivity(activity: Activity) {
        const response = await fetch('api/activities', {
            method: 'GET',
            body: JSON.stringify({ 'activityId': activity.activityId }),
            headers: {
                'content-type': 'application/json'
            }
        });

        console.log('got response');
        let myResponse = await response.json();
    }

    currentActivity.subscribe((activity) => {
        console.log("activity changed");
        // getActivity(activity);
    })

</script>

<div class="flex flex-col h-full w-full bg-white">
    <h1 class="text-surface-500">{$currentActivity.name}</h1>
    <h1 class="text-surface-500">Response String: {myResponse}</h1>
    <Scorm />
</div>