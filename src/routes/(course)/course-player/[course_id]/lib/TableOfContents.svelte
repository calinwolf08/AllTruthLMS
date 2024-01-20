<script lang="ts">
	// import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from '$lib/Models/Course';
	import { currentCourse, currentActivity } from './stores';

	let selectedSection = 0;
	let selectedActivity = 0;

	function changeActivity(activity: Activity, sectionIndex: number, activityIndex: number) : void {
		$currentActivity = activity;
		selectedSection = sectionIndex;
		selectedActivity = activityIndex
	}
	
</script>


<!-- <TreeView open hover="hover:variant-soft-primary" class="py-4 px-0">
	{#each $currentcourse.sections as section, sectionindex}
	
	<treeviewitem>
		{section.name}
		
		<svelte:fragment slot="children">	
			{#each section.activities as activity, activityindex}
			
			<treeviewitem  class={sectionindex == selectedsection && activityindex == selectedactivity ? "bg-primary-500" : ""} 
				on:click={() => {changeactivity(activity, sectionindex, activityindex)}}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				{activity.name}
			</treeviewitem> 
			
			{/each}
		</svelte:fragment>
		
	</treeviewitem>
	
	{/each} 
</treeview> -->
	