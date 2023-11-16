<script lang="ts">
	import Scorm from "$lib/ActivityTypes/Scorm.svelte";
	import { getContext } from "svelte";
    // import type {Activity} from "./ActivityStructure";
    import type {Course} from "./ActivityStructure";
    
    const course : Course = getContext('course');

</script>

<div class="flex flex-col h-full w-full bg-white">
    <Scorm />
</div>