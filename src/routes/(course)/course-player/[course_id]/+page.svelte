<script lang="ts">
	import type { PageData } from './$types';
	import { currentActivity, currentCourse } from './lib/stores';
	import Sidebar from './lib/Sidebar.svelte';
	import { getActivity, setActivity } from '$lib/context';
	import ActivityView from './lib/ActivityView.svelte';
    export let data: PageData;
	
	$currentCourse = data.course;

	setActivity();
	const activity = getActivity();

	if (data.course.sections.length > 0 && data.course.sections[0].activities.length > 0) {
		$activity = data.course.sections[0].activities[0];
	}

</script>

<!-- <Header /> -->
<div class="flex h-full">
	<Sidebar />
	<ActivityView /> 
</div>
