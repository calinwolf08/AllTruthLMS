<script lang="ts">
	import '../app.postcss';

	import { setContext } from 'svelte';
	
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { getModalStore, storePopup, Modal, type ModalComponent } from '@skeletonlabs/skeleton';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';
	
	import { DrawerId, ModalId } from '$lib/UtilityTypes';
	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import SectionCreator from '$lib/CourseCreator/SectionCreator.svelte';
	import PickActivityType from '$lib/CourseCreator/PickActivityType.svelte';
	import ActivityCreator from '$lib/CourseCreator/ActivityCreator.svelte';
		
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	initializeStores();
	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();

	const pickActivityType = ModalId.PickActivityType;

	const modalRegistry: Record<string, ModalComponent> = {
		PickActivityType: {ref: PickActivityType}
	}

</script>

<Drawer position={$drawerStore.position ?? 'left'}>
	{#if $drawerStore.id == DrawerId.CourseContents}
		<TableOfContents /> 
	{:else if $drawerStore.id == DrawerId.AddSection}
		<SectionCreator meta={$drawerStore.meta}/>
	{:else if $drawerStore.id == DrawerId.AddActivity}
		<ActivityCreator meta={$drawerStore.meta}/>
	{/if}

</Drawer>

<Modal components={modalRegistry} />

<slot />
