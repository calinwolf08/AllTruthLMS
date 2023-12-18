<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
	import { getContext } from "svelte";
	import { currentActivity } from "./stores";
    import { ActivityType } from "../Models/Course";

    let testUrl = "https://all-truth-lms-storage.s3.us-west-2.amazonaws.com/Scorm/TestBridge/scorm_player.html";
    // let testUrl = "/TestBridge/index_lms.html";

</script>

<div class="flex flex-col h-full w-full bg-white text-black">
    {#if $currentActivity.activity_type == ActivityType.VIDEO}
        {@html $currentActivity.name }
    {:else if $currentActivity.activity_type == ActivityType.SCORM}
        <!-- <Scorm path={url.data.publicUrl}/> -->
        <Scorm path={$currentActivity.url}/>
        <!-- <img src={url.data.publicUrl}/> -->
    {:else}
        <p>No Activity Found</p>
    {/if}
</div>