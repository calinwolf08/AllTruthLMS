<script lang="ts">
	import CourseCreator from '$lib/CourseCreator/CourseCreator.svelte';
import type { Course } from '$lib/Models/Course';
    import type { PageData } from './$types';
    
    export let data: PageData;

    let course = {
        name: '',
        sections: [{name:'', activities:[]}],
    }

</script>
    <div class="m-auto max-w-5xl p-10">
        <h1 class="h1 pb-8">Create Course</h1>
        <CourseCreator />
    </div>


