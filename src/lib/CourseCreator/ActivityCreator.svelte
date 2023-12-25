<script lang="ts">
	import { type Activity, createDefaultActivity } from "$lib/Models/Course";

    export let meta: {
        addActivity: (activity: Activity, sIndex: number) => void,
        sIndex: number,
    };

    let activity = createDefaultActivity();
</script>

<div class="p-10">
    
    <label class="label pb-5">
        <span>Name</span>
        <input bind:value={activity.name} type="text" class="input" placeholder="Section Name" />
    </label>

    <button class="btn btn-md variant-filled-primary" on:click={ () => {meta.addActivity(activity, meta.sIndex)}}>Save</button>
</div>
