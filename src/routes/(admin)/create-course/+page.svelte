<script lang="ts">
	import CourseCreator from './lib/CourseCreator.svelte';
    import type { PageData } from './$types';
    import {Heading} from 'flowbite-svelte'; 

    export let data: PageData;

    let course = {
        name: '',
        sections: [{name:'', activities:[]}],
    }

</script>
    <div class="m-auto max-w-5xl p-10">
        <Heading tag="h1">Create Course</Heading>
        <CourseCreator />
    </div>


