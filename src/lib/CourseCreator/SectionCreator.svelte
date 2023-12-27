<script lang="ts">
	import { createDefaultSection, type Section } from "$lib/Models/Course";
    import TextInput from "./TextInput.svelte";

    export let meta: {
        addSection: (section:Section) => void
    };

	let section: Section = createDefaultSection();

</script>

<div class="p-10">
    
    <!-- <label class="label pb-5">
        <span>Name</span>
        <input bind:value={section.name} type="text" class="input" placeholder="Section Name" />
    </label> -->
    <TextInput bind:value={section.name} name="name" title="Name" placeholder="Section Name"/>

    <button class="btn btn-md variant-filled-primary mt-10" on:click={ () => {meta.addSection(section)}}>Save</button>
</div>    
