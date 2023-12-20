<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from '../Models/Course';
	import { currentCourse, currentActivity } from './stores';

	let selectedSection = 0;
	let selectedActivity = 0;

	function changeActivity(activity: Activity, sectionIndex: number, activityIndex: number) : void {
		$currentActivity = activity;
		selectedSection = sectionIndex;
		selectedActivity = activityIndex
	}
	
</script>

<TreeView open hover="hover:variant-soft-primary" class="py-4 px-0">
	{#each $currentCourse.sections as section, sectionIndex}
	
	<TreeViewItem>
		{section.name}
		
		<svelte:fragment slot="children">	
			{#each section.activities as activity, activityIndex}
			
			<TreeViewItem  class={sectionIndex == selectedSection && activityIndex == selectedActivity ? "bg-primary-500" : ""} 
				on:click={() => {changeActivity(activity, sectionIndex, activityIndex)}}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				{activity.name}
			</TreeViewItem> 
			
			{/each}
		</svelte:fragment>
		
	</TreeViewItem>
	
	{/each}
</TreeView>
	