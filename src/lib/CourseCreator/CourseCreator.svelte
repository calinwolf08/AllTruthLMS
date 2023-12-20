<script lang="ts">
	import { getContext } from "svelte";
	import { type DrawerController, DrawerId } from "$lib/DrawerController";
	import type { Course, Section } from "$lib/Models/Course";
    import { createDefaultCourse } from "$lib/Models/Course";
	import { addNewCourse } from "./CourseApi";

    let course: Course = createDefaultCourse();

    let drawerController: DrawerController = getContext('drawerController');

    function addSection(section: Section) {
        course.sections.push(section);
        course.sections = course.sections;

        drawerController.closeDrawer();
    }

    function createNewSection() {
        drawerController.openDrawer({
            id: DrawerId.AddSection,
            meta: {
                addSection
            },
            position: 'right',
            width: 'w-full max-w-3xl'
        })
    }

    async function saveCourse() {
        let data = await addNewCourse(course);
        console.log('returned');
        console.log(data);                                                       
    }
</script>

<div class="text-right">
    <button type="button" class="mt-5 btn btn-lg variant-filled-primary mb-5 mr-auto ml-0" on:click={saveCourse}>Save</button>
</div>

<label class="label max-w">
    <span>Name</span>
    <input bind:value={course.name} type="text" class="input" placeholder="Course Name" />
</label>

<div class="py-10">
    {#each course.sections as section}
        <div class="py-4">
            <h3 class="h3">{section.name}</h3>
        </div>
    {/each}
</div>

<button type="button" class="mt-5 btn btn-lg variant-filled-primary" on:click={createNewSection}>Add Section</button>