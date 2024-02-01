<script lang="ts">
    import CourseList from './lib/CourseList.svelte';
    import type { PageData } from './$types';
    import type { CourseSelect } from '$lib/kysely/kysely';
    import { Button } from 'flowbite-svelte';

    
    export let data: PageData;

    const courses = data.courses as CourseSelect[];
</script>

<div class="m-10">
    <div class="flex">
        <Button href="\create-course" class="mr-5">Create Course</Button>
        <Button href="\manage-scorm">Manage Scorm</Button>
    </div>
    <div class="pt-10">
        <CourseList {courses} />
    </div>
</div>
