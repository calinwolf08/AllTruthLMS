<script lang="ts">
    import type { CourseSelect } from "$lib/kysely/kysely";
	import CourseCard from "./CourseCard.svelte";

    export let courses: CourseSelect[] = [];
</script>

<div class="grid grid-cols-3 gap-5">
    {#each courses as course (course.id)}
        <CourseCard name={course.name} id={course.id} />
    {/each}
</div>

<style>
    .course-list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 20px;
    }
</style>