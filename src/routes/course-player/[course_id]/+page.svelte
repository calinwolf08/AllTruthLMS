<script lang="ts">
    import type { PageData } from '../$types';
	import { AppShell } from '@skeletonlabs/skeleton';

	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import Header from '$lib/CoursePlayer/Header.svelte';
	import Activity from '$lib/CoursePlayer/ActivityView.svelte';
	import { setContext } from 'svelte';

    export let data: PageData;
	setContext('course', data.course);
</script>

<AppShell slotSidebarLeft="bg-surface-500/50 w-0 lg:w-1/4 lg:min-w-[24rem]">
	<svelte:fragment slot="header">
		<Header />
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<TableOfContents course={data.course}/>
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->

	<!-- ---- / ---- -->
	<Activity />
	<!-- ---- / ---- -->
	
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
