<script lang="ts">
	import type { PageData } from './$types';

	// import TableOfContents from '$lib/CoursePlayer/TableOfContents.svelte';
	// import ActivityView from '$lib/CoursePlayer/ActivityView.svelte';
	import Header from '$lib/CoursePlayer/Header.svelte';
	import { currentActivity, currentCourse } from '$lib/CoursePlayer/stores';
	import Sidebar from '$lib/CoursePlayer/Sidebar.svelte';

    export let data: PageData;
	
	$currentCourse = data.course;

	if (data.course.sections.length > 0 && data.course.sections[0].activities.length > 0) {
		$currentActivity = data.course.sections[0].activities[0];
	}

</script>

<!-- <Header /> -->
<Sidebar /> 
