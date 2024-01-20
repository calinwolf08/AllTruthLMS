<script lang="ts">
	import type { PageData } from './$types';
	import Sidebar from './lib/Sidebar.svelte';
	import { getActivity, getCourse, setActivity, setCourse } from '$lib/context';
	import ActivityView from './lib/ActivityView.svelte';
    export let data: PageData;
	
	setCourse(data.course);
	const course = getCourse();

	setActivity();
	const activity = getActivity();

	if ($course.sections.length > 0 && $course.sections[0].activities.length > 0) {
		$activity = $course.sections[0].activities[0];
	}

</script>

<!-- <Header /> -->
<div class="flex h-full">
	<Sidebar />
	<ActivityView /> 
</div>
