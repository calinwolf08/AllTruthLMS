<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
	import { currentActivity } from "./stores";
    import { ActivityType } from "./ActivityStructure";
	import { getContext } from "svelte";
	
    let url: any = getContext("url");
    console.log("got url:");
    console.log(url.data.publicUrl);

    let testUrl = "https://all-truth-lms-storage.s3.us-west-2.amazonaws.com/Scorm/TestBridge/scorm_player.html";
    // let testUrl = "/TestBridge/index_lms.html";
    

</script>

<div class="flex flex-col h-full w-full bg-white text-black">
    {#if $currentActivity.data.type == ActivityType.HTML}
        {@html $currentActivity.data.value }
    {:else if $currentActivity.data.type == ActivityType.SCORM}
        <!-- <Scorm path={url.data.publicUrl}/> -->
        <Scorm path={testUrl}/>
        <!-- <img src={url.data.publicUrl}/> -->
    {:else}
        <p>No Activity Found</p>
    {/if}
</div>