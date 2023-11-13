<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
    // import type {Activity} from "./ActivityStructure";
    import type {Lesson} from "./ActivityStructure";
    
    export let lesson : Lesson;

</script>

<div class="flex flex-col h-full w-full bg-white">
    <Scorm />
</div>