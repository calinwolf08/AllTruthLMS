<script lang=ts>
import {Input, Button, ButtonGroup, Heading} from 'flowbite-svelte';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export let name = '';
export let placeholder = '';
export let value = '';
export let tag: HeadingTag = 'h1';
export let textClass = 'text-3xl font-bold';
export let headerClass = '';
export let inputClass = '';
export let buttonClass = '';
export let showEditButton = false;
export let editCallback = () => { if (showEditButton) { console.warn('editCallback should not be called if showEditButton is false')} };

let isEditing = false;

const startEditing = () => {
    isEditing = true;
};

const stopEditing = () => {
    console.log("stoping");
    isEditing = false;
};

function focusInput(node: HTMLElement) {
    console.log('here in focus');
    node.focus();
}

function inputKeyDown(event: KeyboardEvent) {
    if (event.key == 'Enter') {
        stopEditing();
    }

    return event.key != 'Enter';
}
</script>
{#if isEditing}
    <ButtonGroup class="w-full">
        <Input let:props  class="h-min py-0 {inputClass} {textClass}">
            <input {...props} name={name} type="text" placeholder="{placeholder}" use:focusInput bind:value={value} on:keydown={inputKeyDown} on:blur={stopEditing}/>
        </Input>
        <Button class="bg-dark-blue-500 text-white py-0 {buttonClass}" on:click={stopEditing}>Save</Button>
        {#if showEditButton}
        <Button class="bg-dark-blue-500 text-white py-0 {buttonClass}" on:click={editCallback}>Edit</Button>
        {/if} 
    </ButtonGroup>
{:else}
 <button type="button" class="w-full text-left my-0" on:click={startEditing}>
    <div class="flex">
        <Heading {tag} class="{headerClass} {textClass}">{value.length == 0 ? placeholder : value}</Heading>

        {#if showEditButton}
        <Button class="bg-dark-blue-500 text-white {buttonClass}" on:click={editCallback}>Edit</Button>
        {/if}
    </div>
</button> 
{/if}
