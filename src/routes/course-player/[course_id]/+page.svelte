<script lang="ts">
    import type { PageData } from './$types';
	import { AppShell } from '@skeletonlabs/skeleton';

	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import ActivityView from '$lib/CoursePlayer/ActivityView.svelte';
	import { currentActivity, currentCourse } from '$lib/CoursePlayer/stores';

    export let data: PageData;
	
	$currentCourse = data.course;

	if (data.course.sections.length > 0 && data.course.sections[0].activities.length > 0) {
		$currentActivity = data.course.sections[0].activities[0];
	}


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
