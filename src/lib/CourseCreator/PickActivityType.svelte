<script lang="ts">
    import { Radio } from 'flowbite-svelte';
    import { ActivityType } from '$lib/Models/Course';
    import { Modal } from 'flowbite-svelte';

    export let open: boolean = false;

    // const modalStore = getModalStore();
    let activityTypes = Object.values(ActivityType);
    let value: number = -1;
    let name: string = "";

    function close() {
       console.log('Closing modal: ', value, activityTypes[value]); 
       open = false;
    }
							
</script>

<Modal title="Pick An Activity Type" bind:open={open}>
    <div class="rounded-2xl w-modal variant-filled p-8">
        <div>
            {#each activityTypes as activityType, index }
                <!-- <RadioItem class="{index > 0 ? "ml-4" : ""}" bind:group={value} name="justify" value={index}>{activityType} Activity</RadioItem> -->
                <Radio name="example" checked={value == index} on:click={() => {value = index;}}>{activityType} Activity</Radio>
            {/each}
        </div>

        <button disabled={value < 0} on:click={close} class="mt-8 btn variant-filled-surface focus:border-red-400">Create Activity</button>
    </div>
</Modal>

<!-- {#if $modalStore[0]} -->
	
<!-- {/if} -->
						
