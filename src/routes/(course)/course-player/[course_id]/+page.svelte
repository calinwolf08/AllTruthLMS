<script lang="ts">
	import type { PageData } from './$types';
	import { currentActivity, currentCourse } from './lib/stores';
	import Sidebar from './lib/Sidebar.svelte';

    export let data: PageData;
	
	$currentCourse = data.course;

	if (data.course.sections.length > 0 && data.course.sections[0].activities.length > 0) {
		$currentActivity = data.course.sections[0].activities[0];
	}

</script>

<!-- <Header /> -->
<Sidebar /> 
