<script lang="ts">
    import CourseList from '$lib/Admin/CourseList.svelte';
    import type { PageData } from './$types';

    import type { CourseSelect } from '$lib/kysely/kysely';
    
    export let data: PageData;

    const courses = data.courses as CourseSelect[];
</script>

<div class="m-10">
    <a class="btn btn-lg variant-filled-primary" href="\create-course">Create Course</a>
    <div class="pt-10">
        <CourseList {courses} />
    </div>
</div>


