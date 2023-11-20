<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from "./ActivityStructure";
	import { currentCourse, currentActivity } from './stores';

	function changeActivity(activity: Activity) : void {
		$currentActivity = activity;
		$currentCourse.currentActivityId = activity.activityId;
	}

	function getTreeClassForActivity(activityId: number) {
		let treeItemClass = "";

		if (activityId == $currentActivity.activityId) {
			treeItemClass += " bg-primary-500";
		}

		return treeItemClass;
	}
	
</script>

<TreeView open hover="hover:variant-soft-primary" class="py-4 px-0">
	{#each $currentCourse.sections as section}
	
	<TreeViewItem>
		{section.title}
		
		<svelte:fragment slot="children">	
			{#each section.activities as activity}
			
			<TreeViewItem 
			class={getTreeClassForActivity(activity.activityId)} 
			on:click={() => {changeActivity(activity)}}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				{activity.title}
			</TreeViewItem>
			
			{/each}
		</svelte:fragment>
		
	</TreeViewItem>
	
	{/each}
</TreeView>
	