<script lang="ts">

    import { getModalStore } from '@skeletonlabs/skeleton';
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { ActivityType } from '$lib/Models/Course';

    const modalStore = getModalStore();
    let activityTypes = Object.values(ActivityType);
    let value: number = -1;

    function close() {
        if (value >= 0 && value < activityTypes.length) {
            const sIndex = $modalStore[0].meta.sIndex;
            $modalStore[0].meta.createNewActivity(activityTypes[value], sIndex);
            modalStore.close();
        }
    }
							
</script>


{#if $modalStore[0]}
	<div class="rounded-2xl w-modal variant-filled p-8">
        <h3 class="h3">Pick Activity Type</h3>
        <div>
            <RadioGroup class="mt-8 focus:outline-none" border="border-solid border-! border-surface-300" background="bg-surface-200 text-surface" hover="hover:variant-soft-primary" active="variant-filled-primary">
                    {#each activityTypes as activityType, index }
                        <RadioItem class="{index > 0 ? "ml-4" : ""}" bind:group={value} name="justify" value={index}>{activityType} Activity</RadioItem>
                    {/each}
            </RadioGroup>
        </div>

        <button disabled={value < 0} on:click={close} class="mt-8 btn variant-filled-surface focus:border-red-400">Create Activity</button>
    </div>
{/if}
						
