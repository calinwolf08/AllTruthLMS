<script lang="ts">
	import { createDefaultSection, type Section } from "$lib/Models/Course";
    import TextInput from "./TextInput.svelte";

    export let meta: {
        addSection: (section:Section) => void
    };

	let section: Section = createDefaultSection();

    $: disableSave = validateSection(section.name);

    function validateSection(name: string) {
        return name.length <= 0;
    }
</script>

<div class="p-10">
    
    <TextInput bind:value={section.name} name="name" title="Name" placeholder="Section Name"/>

    <button class="btn btn-md variant-filled-primary mt-10" disabled={disableSave} on:click={ () => {meta.addSection(section)}}>Save</button>
</div>    
