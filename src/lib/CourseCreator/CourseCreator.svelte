<script lang="ts">
	import { Button, Input, Heading } from 'flowbite-svelte';
	import type { Course, Section, Activity } from '$lib/Models/Course';
	import { createDefaultActivity, createDefaultSection } from '$lib/Models/Course';
	import { createDefaultCourse } from '$lib/Models/Course';
	import SectionCreator from './SectionCreator.svelte';
	import ActivityCreator from './ActivityCreator.svelte';
	import InputHeaderToggle from './InputHeaderToggle.svelte';

	let course: Course = createDefaultCourse();

	course.sections.push(createDefaultSection());
	course.sections[0].name = "Test Section";
	course.sections[0].activities.push(createDefaultActivity());
	course.sections[0].activities[0].name = "Test Activity";

	let section = createDefaultSection();
	let sectionDrawerHidden = true;

	let activity = createDefaultActivity();
	let activityDrawerHidden = true;
	let currenetSectionIdx = -1;

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

	function addActivity() {
		course.sections[currenetSectionIdx].activities.push(createDefaultActivity());
		course = course
	}

	function updateActivity(currentActivity: Activity) {
		activity = currentActivity;
	}

	function openActivityDrawer(currentActivity: Activity, sIndex: number) {
		currenetSectionIdx = sIndex;
		activity = currentActivity;
		activityDrawerHidden = false;
	}

	let editSectionTitle = false;
</script>

<form method="POST" action="create-course?/saveCourse">
	<div class="text-right">
		<Button type="submit" class="mt-5 btn btn-lg variant-filled mb-5 mr-auto ml-0" >Save</Button>
	</div>

	<InputHeaderToggle tag="h2" textClass="text-4xl font-bold" name={course.name} bind:value={course.name} placeholder="Course Name"/>

	<div>
		{#each course.sections as section, sIndex}
		<div class="my-5 p-8 bg-blue-100 rounded-xl">
			<InputHeaderToggle name={sIndex.toString()} placeholder="Section Name" bind:value={section.name} showEditButton={true} editCallback={() => {openSectionDrawer(section)}}/>

			{#each section.activities as activity, aIndex}
				<InputHeaderToggle tag="h4" showEditButton={true} editCallback={() => {openActivityDrawer(activity, sIndex)}}  textClass="text-2xl font-bold" headerClass="ml-6 py-4" inputClass="ml-6 my-4" buttonClass="my-4" name={sIndex + '.' + aIndex} bind:value={activity.name} />
			{/each}

			<Button type="button" class="mt-5 btn btn-md variant-filled-primary" on:clickk={addActivity}>Add Activity</Button>
		</div>
		{/each}
	</div>
</form>

<Button type="button" class="mt-5 btn btn-lg variant-filled" on:click={addSection}>Add Section</Button>

<SectionCreator bind:hidden={sectionDrawerHidden} bind:section {updateSection}/>
<ActivityCreator bind:hidden={activityDrawerHidden} bind:activity {updateActivity}/>