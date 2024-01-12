<script lang="ts">
    import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
    import { ActivityType } from '$lib/Models/Course';

    export let name:string;    
    export let activityType:ActivityType;
    let activityTypes = Object.values(ActivityType);
    let value: number = -1;

    $: if (value >= 0 && value < activityTypes.length) {
        activityType = activityTypes[value];
    }
</script>

<div class="flex">
    <input class="input text-white my-4" type="text" bind:value={name} />
    <RadioGroup class="mt-8 focus:outline-none" border="border-solid border-! border-surface-300" background="variant-filled-surface text-surface" hover="hover:variant-soft-primary" active="variant-filled-primary">
        {#each activityTypes as activityType, index }
            <RadioItem class="{index > 0 ? "ml-4" : ""}" bind:group={value} name="justify" value={index}>{activityType} Activity</RadioItem>
        {/each}
    </RadioGroup>
</div>