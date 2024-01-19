<script lang="ts">
    import { Drawer, Button, CloseButton, Label, Input } from 'flowbite-svelte';
	import { createDefaultSection, type Section } from "$lib/Models/Course";
    import {sineIn} from 'svelte/easing';
     
    export let hidden = true;
    export let section = createDefaultSection();
    export let updateSection: (section: Section) => void;
    
    let transitionParams = {
        x: 320,
        duration: 200,
        easing: sineIn,
    };

    $: disableSave = validateSection(section.name);

    function validateSection(name: string) {
        return name.length <= 0;
    }

    function saveSection() {
        updateSection(section);
        hidden = true;
    }
</script>

<Drawer class="p-10" width="w-1/2 max-w-3xl min-w-min" transitionType="fly" {transitionParams} bind:hidden={hidden} placement="right">
    <Label class="my-5" for="name-input">Name</Label>
    <Input class="my-5" id="name-input" bind:value={section.name} />
    <Button class="my-5" color="primary" disabled={disableSave} on:click={saveSection}>Save</Button>
</Drawer>
