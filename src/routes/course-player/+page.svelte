<script lang="ts">
    import type { PageData } from './$types';
	import { AppShell } from '@skeletonlabs/skeleton';
	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import Header from '$lib/CoursePlayer/Header.svelte';
	import Activity from '$lib/CoursePlayer/ActivityView.svelte';

    export let data: PageData;
</script>

<AppShell slotSidebarLeft="bg-surface-500/50 w-0 lg:w-auto lg:min-w-[24rem]">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<TableOfContents />
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->

	<!-- ---- / ---- -->
	<Activity />
	<!-- ---- / ---- -->
	
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
