<script lang="ts">
	import { Button, Input, Heading } from 'flowbite-svelte';
	import type { Course, Section, Activity } from '$lib/Models/Course';
	import { createDefaultActivity, createDefaultSection } from '$lib/Models/Course';
	import { createDefaultCourse } from '$lib/Models/Course';
	import SectionCreator from './SectionCreator.svelte';
	import ActivityCreator from './ActivityCreator.svelte';
	import InputHeaderToggle from './InputHeaderToggle.svelte';
	import { setActivity, getActivity } from '$lib/context';

	let course: Course = createDefaultCourse();

	course.sections.push(createDefaultSection());
	course.sections[0].name = "Test Section";
	course.sections[0].activities.push(createDefaultActivity());
	course.sections[0].activities[0].name = "Test Activity";

	let section = createDefaultSection();
	let sectionDrawerHidden = true;

	// Pass this down in setContext as a store instead of binding all the way down
	let activityDrawerHidden = true;
	let currenetSectionIdx = -1;
	let currentActivity: Activity;

	setActivity();
	const activity = getActivity();

	function addSection() {
		course.sections.push(createDefaultSection());
		course.sections = course.sections;
	}

	function updateSection(updatedSection: Section) {
		section = updatedSection;
		course = course;
	}

	function openSectionDrawer(currentSection: Section) {
		section = currentSection;
		sectionDrawerHidden = false;
	}

	function addActivity(sIndex: number) {
		course.sections[sIndex].activities.push(createDefaultActivity());
		course = course;
	}

	function updateActivity() {
		course = course;
	}

	function openActivityDrawer(curActivity: Activity, sIndex: number) {
		currenetSectionIdx = sIndex;
		currentActivity = curActivity;
		$activity = currentActivity;
		activityDrawerHidden = false;
	}

	let editSectionTitle = false;
</script>

<form method="POST" action="create-course?/saveCourse">
	<div class="text-right">
		<Button type="submit" class="mt-5 btn btn-lg variant-filled mb-5 mr-auto ml-0" >Save</Button>
	</div>

	<InputHeaderToggle tag="h2" textClass="text-2xl font-bold" name={course.name} bind:value={course.name} placeholder="Course Name"/>

	{#each course.sections as section, sIndex}
	<div class="my-3 p-4 bg-blue-100 rounded-xl">
		<InputHeaderToggle tag="h3" name={sIndex.toString()} placeholder="Section Name" bind:value={section.name} showEditButton={true} editCallback={() => {openSectionDrawer(section)}}
			layoutClass="mb-2"/>

		{#each section.activities as activity, aIndex}
			<InputHeaderToggle tag="h4" placeholder="Activity Name" showEditButton={true} editCallback={() => {openActivityDrawer(activity, sIndex)}} 
				textClass="text-lg font-bold" layoutClass="mb-2" headerClass="ml-6 " inputClass="ml-6 " buttonClass="" name={sIndex + '.' + aIndex} bind:value={activity.name} />
		{/each}

		<Button type="button" class="mt-5 btn btn-md variant-filled-primary" on:click={() => {addActivity(sIndex)} }>Add Activity</Button>
	</div>
	{/each}
</form>

<Button type="button" class="mt-5 btn btn-lg variant-filled" on:click={addSection}>Add Section</Button>

<SectionCreator bind:hidden={sectionDrawerHidden} bind:section {updateSection}/>
<ActivityCreator bind:hidden={activityDrawerHidden} {updateActivity}/>