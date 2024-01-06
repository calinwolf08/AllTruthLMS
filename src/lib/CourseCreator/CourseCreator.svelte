<script lang="ts">
	import { DrawerId, ModalId } from '$lib/UtilityTypes';
	import { getDrawerStore, getModalStore } from '@skeletonlabs/skeleton';
	import type { DrawerSettings, ModalStore, ModalSettings } from '@skeletonlabs/skeleton';
	import type { ActivityType, Course, Section, Activity } from '$lib/Models/Course';
	import { createDefaultCourse } from '$lib/Models/Course';
	import TextInput from './TextInput.svelte';

	let course: Course = createDefaultCourse();

	const drawerStore = getDrawerStore();
	const modalStore = getModalStore();

	function addSection(section: Section) {
		course.sections.push(section);
		course.sections = course.sections;

		drawerStore.close();
	}

	function createNewSection() {
		const drawerSettings: DrawerSettings = {
			id: DrawerId.AddSection,
			meta: {
				addSection
			},
			position: 'right',
			width: 'w-full max-w-3xl'
		};

		drawerStore.open(drawerSettings);
	}

	function addActivity(activity: Activity, sIndex: number) {
		course.sections[sIndex].activities.push(activity);
		course = course;
		drawerStore.close();
	}

	function createNewActivity(activityType: ActivityType, sIndex: number) {
		const drawerSettings: DrawerSettings = {
			id: DrawerId.AddActivity,
			meta: {
				addActivity,
				activityType,
				sIndex
			},
			position: 'right',
			width: 'w-full max-w-3xl'
		};

		drawerStore.open(drawerSettings);
	}

	function chooseNewActivity(sIndex: number) {
		const modalSettings: ModalSettings = {
			type: 'component',
			component: ModalId.PickActivityType,
			meta: {
				createNewActivity,
				sIndex
			}
		};

		modalStore.trigger(modalSettings);
	}
</script>

<form method="POST" action="create-course?/saveCourse">
	<div class="text-right">
		<button type="submit" class="mt-5 btn btn-lg variant-filled mb-5 mr-auto ml-0">Save</button>
	</div>

	<TextInput bind:value={course.name} name="name" title="Name" placeholder="Course Name" />

	<div class="py-10">
		{#each course.sections as section, sIndex}
			<input name={sIndex.toString()} type="hidden" bind:value={section.name} />
			<h3 class="h3 py-4">{section.name}</h3>

			{#each section.activities as activity, aIndex}
				<input name={sIndex + '.' + aIndex} type="hidden" bind:value={activity.name} />
				<h4 class="h4 py-3 pl-4">{activity.name}</h4>
				<p class="p py-3 pl-4">{activity.url}</p>
			{/each}

			<button
				type="button"
				class="mt-5 btn btn-md variant-filled-primary"
				on:click={() => chooseNewActivity(sIndex)}>Add Activity</button
			>
		{/each}
	</div>
</form>

<button type="button" class="mt-5 btn btn-lg variant-filled" on:click={createNewSection}>Add Section</button>
