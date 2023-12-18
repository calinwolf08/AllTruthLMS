<script lang="ts">
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from '../Models/Course';
	import { currentCourse, currentActivity } from './stores';

	function changeActivity(activity: Activity) : void {
		$currentActivity = activity;
		console.log('current activity');
		console.log($currentActivity.id);
	}

	function getTreeClassForActivity(id: string) {
		let treeItemClass = "";

		if (id == $currentActivity.id) {
			treeItemClass += " bg-primary-500";
		}

		return treeItemClass;
	}
	
</script>

<TreeView open hover="hover:variant-soft-primary" class="py-4 px-0">
	{#each $currentCourse.sections as section}
	
	<TreeViewItem>
		{section.name}
		
		<svelte:fragment slot="children">	
			{#each section.activities as activity}
			
			<TreeViewItem 
			class={getTreeClassForActivity(activity.id)} 
			on:click={() => {changeActivity(activity)}}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				{activity.name}
			</TreeViewItem>
			
			{/each}
		</svelte:fragment>
		
	</TreeViewItem>
	
	{/each}
</TreeView>
	