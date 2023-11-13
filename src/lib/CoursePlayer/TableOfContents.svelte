<script lang="ts">
	import { onMount } from 'svelte';

	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
	import type {Activity} from "./ActivityStructure";
    import type {Lesson} from "./ActivityStructure";

	export let lesson : Lesson;

	let treeView : TreeView;
	let treeExpanded = false;

	onMount(() => {
		treeView.expandAll();
		treeExpanded = true;
	});

	let currentActivityValue : Activity;
	// currentActivity.set(lesson.sections[0].activities[0]);

	function changeActivity() : void {
		// update current activity in store
		// should trigger rerender in body
		console.log("clicked");
	}
</script>

<div style="display:{treeExpanded ? '' : 'none'}">
<TreeView bind:this={treeView} padding = "py-4 pr-4 pl-10 lessonTree">
		{#each lesson.sections as section}
		
		<TreeViewItem>
			{section.name}
			
			<svelte:fragment slot="children">	
				{#each section.activities as activity}
				
				<TreeViewItem on:click={changeActivity}>
					<svelte:fragment slot="lead">(icon)</svelte:fragment>
					{activity.name}
				</TreeViewItem>
				
				{/each}
			</svelte:fragment>
			
		</TreeViewItem>
		
		{/each}
	</TreeView>
</div>
	