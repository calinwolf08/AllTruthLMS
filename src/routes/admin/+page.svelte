<script lang="ts">
    import CourseList from '$lib/Admin/CourseList.svelte';
    import type { PageData } from './$types';

    import type { CourseSelect } from '$lib/kysely/kysely';
    
    export let data: PageData;

    const courses = data.courses as CourseSelect[];
</script>

<div class="m-10">
    <button type="button" class="btn btn-lg variant-filled-primary">Create Course</button>
    <div class="pt-10">
        <CourseList {courses} />
    </div>
</div>


