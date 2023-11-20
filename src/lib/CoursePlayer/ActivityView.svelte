<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
	import { currentActivity } from "./stores";
    import { ActivityType } from "./ActivityStructure";

</script>

<div class="flex flex-col h-full w-full bg-white text-black">
    {#if $currentActivity.data.type == ActivityType.HTML}
        {@html $currentActivity.data.value }
    {:else if $currentActivity.data.type == ActivityType.SCORM}
        <Scorm path={$currentActivity.data.value}/>
    {:else}
        <p>No Activity Found</p>
    {/if}
</div>