<script lang="ts">
	import '../app.postcss';

	import { setContext } from 'svelte';
	
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	
	import { DrawerController, DrawerId } from '$lib/DrawerController';
	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import SectionCreator from '$lib/CourseCreator/SectionCreator.svelte';
		
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
	const drawerStore = getDrawerStore();
	const drawerController = new DrawerController(drawerStore);
	setContext('drawerController', drawerController);

</script>

<Drawer position={$drawerStore.position ?? 'left'}>
	{#if $drawerStore.id == DrawerId.CourseContents}
		<TableOfContents /> 
	{:else if $drawerStore.id == DrawerId.AddSection}
		<SectionCreator meta={$drawerStore.meta}/>
	{/if}

</Drawer>

<slot />
