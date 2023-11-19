<script lang="ts">
	import '../app.postcss';

	import { setContext } from 'svelte';
	
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	
	import { DrawerController } from '$lib/DrawerController';
	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
		
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
	const drawerStore = getDrawerStore();
	const drawerController = new DrawerController(drawerStore);
	setContext('drawerController', drawerController);

</script>

<Drawer>
	<TableOfContents /> 
</Drawer>

<slot />
