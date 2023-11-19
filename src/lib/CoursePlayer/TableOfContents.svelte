<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from "./ActivityStructure";
    import type {Course} from "./ActivityStructure";
	import { ActivityStore } from './stores';
	import { redirect } from '@sveltejs/kit';

	export let course : Course;

	function findSelectedActivity(course: Course) : Activity {
		for (let section of course.sections) {
			for (let activity of section.activities) {
				if (activity.isSelected) {
					console.log('found one');
					console.log(activity);
					return activity;
				}
			}
		}

		try {
			let currentActivity = course.sections[0].activities[0];
			currentActivity.isSelected = true;
			console.log("Defaulting to first activity");

			return currentActivity;
		} catch {
			console.log("course has no activities");
			throw redirect(300, '/');
		}
	}

	let currentActivity : Activity = findSelectedActivity(course);

	function changeActivity(activity: Activity) : void {
		currentActivity.isSelected = false;
		activity.isSelected = true;

		ActivityStore.set(activity);
		currentActivity = activity;
	}
	
</script>

<TreeView open hover="hover:variant-soft-primary" class="py-4 px-0">
	{#each course.sections as section}
	
	<TreeViewItem>
		{section.name}
		
		<svelte:fragment slot="children">	
			{#each section.activities as activity, index}
			
			<TreeViewItem class={activity == currentActivity ? "bg-primary-500" : ""} 
			on:click={() => {changeActivity(activity)}}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				{activity.name}
			</TreeViewItem>
			
			{/each}
		</svelte:fragment>
		
	</TreeViewItem>
	
	{/each}
</TreeView>
	