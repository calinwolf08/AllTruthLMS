<script lang="ts">
    import type { PageData } from './$types';
	import { AppShell } from '@skeletonlabs/skeleton';

	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import ActivityView from '$lib/CoursePlayer/ActivityView.svelte';
	import { currentCourse, currentActivity } from '$lib/CoursePlayer/stores';
	import { findCurrentActivity } from '$lib/CoursePlayer/ActivityStructure';
	import { setContext } from 'svelte';

    export let data: PageData;
	
	$currentCourse = data.course;
	$currentActivity = findCurrentActivity(data.course);

	setContext("url", data.url);

</script>

<AppShell slotSidebarLeft="bg-surface-500/50 w-0 lg:w-1/4 lg:min-w-[24rem]">
	<!-- <svelte:fragment slot="header">
		<Header />
	</svelte:fragment> -->
	<svelte:fragment slot="sidebarLeft">
		<TableOfContents /> 
	</svelte:fragment>

	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->

	<!-- ---- / ---- -->
	<ActivityView />
	<!-- ---- / ---- -->
	
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
