<script lang=ts>
import {Input, Button, ButtonGroup, Heading} from 'flowbite-svelte';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export let name = '';
export let placeholder = '';
export let value = '';
export let tag: HeadingTag = 'h1';
export let textClass = 'text-xl font-bold';
export let headerClass = '';
export let inputClass = '';
export let buttonClass = '';
export let layoutClass = '';
export let showEditButton = false;
export let editCallback = () => { if (showEditButton) { console.warn('editCallback should not be called if showEditButton is false')} };

let isEditing = false;
let isHovering = false

const startEditing = () => {
    isEditing = true;
    isHovering = false;
};

const stopEditing = () => {
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
    <ButtonGroup class="w-full {layoutClass}">
        <Input let:props  class="h-min py-0 {inputClass} {textClass}">
            <input {...props} name={name} type="text" placeholder="{placeholder}" use:focusInput bind:value={value} on:keydown={inputKeyDown} on:blur={stopEditing}/>
        </Input>
        <Button class="bg-dark-blue-500 text-white py-0 {buttonClass}" on:click={stopEditing}>Save</Button>
    </ButtonGroup>
{:else}
<button type="button" class="flex w-full {layoutClass}" on:mouseenter={() => {isHovering = true;} } on:mouseleave={() => {isHovering = false;} }>
    <button type="button" class="w-max text-left {headerClass}" on:click={startEditing} >
        <Heading {tag} class="{textClass}">{value.length == 0 ? placeholder : value}</Heading>
    </button> 

    {#if showEditButton && isHovering}
    <Button class="bg-dark-blue-500 text-white ml-6 py-0 {buttonClass}" on:click={editCallback} >Edit</Button>
    {/if}
</button>
{/if}
