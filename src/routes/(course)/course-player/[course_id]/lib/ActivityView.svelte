<script lang="ts">
	import Scorm from "./Scorm.svelte";
    import { ActivityType, type Activity, type ScormActivity } from "$lib/Models/Course";
    import { getActivity } from "$lib/context";

    let testUrl = "https://all-truth-lms-storage.s3.us-west-2.amazonaws.com/Scorm/TestBridge/scorm_player.html";
    const activity = getActivity(); 

    console.log('activity:', activity);

    function getScormUrl(activity: Activity) {
        if (activity.activity_type != ActivityType.SCORM) {
            console.warn('Called from a non scorm activity: ', activity.activity_type);

            return '';
        }

        const scormActivity = activity as ScormActivity;
        console.log('here', scormActivity);

        return scormActivity.player_url ?? '';
    }

</script>

<div class="flex flex-col h-full w-full bg-white text-black">
    {#if $activity.activity_type == ActivityType.VIDEO}
        {@html $activity.name }
    {:else if $activity.activity_type == ActivityType.SCORM}
        <Scorm path={getScormUrl($activity)}/>
    {:else}
        <p>No Activity Found</p>
    {/if}
</div>