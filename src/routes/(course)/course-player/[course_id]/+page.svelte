<script lang="ts">
	import type { PageData } from './$types';
	import { slide } from 'svelte/transition';
	import { AppShell, Tab } from '@skeletonlabs/skeleton';

	import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	import ActivityView from '$lib/CoursePlayer/ActivityView.svelte';
	import Header from '$lib/Header.svelte';
	import { currentActivity, currentCourse } from '$lib/CoursePlayer/stores';

    export let data: PageData;
	
	$currentCourse = data.course;

	if (data.course.sections.length > 0 && data.course.sections[0].activities.length > 0) {
		$currentActivity = data.course.sections[0].activities[0];
	}


</script>

<!-- <div class="drawer-container">
	<Drawer>
		<Content>
			<p>In Drawer</p>
		</Content>
	</Drawer>
</div>

<ActivityView /> -->

<AppShell slotSidebarLeft="bg-surface-500/50 w-0 lg:w-1/4 lg:min-w-[24rem]">
	<svelte:fragment slot="header">
			<Header />
	</svelte:fragment>

	<!-- <svelte:fragment slot="sidebarLeft"> -->
		<!-- </svelte:fragment> -->
	<div class="grid grid-cols-1 lg:grid-cols-[minmax(400px,25%)_1fr] h-full">
		<div class="hidden  lg:block">
			<TableOfContents /> 
		</div>
		<div>
			<ActivityView />
		</div>
	</div>
</AppShell>
