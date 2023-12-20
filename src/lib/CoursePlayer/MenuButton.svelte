<script lang="ts">
    import { getContext, type ComponentConstructorOptions } from 'svelte';
    import {DrawerId, type DrawerController} from '$lib/DrawerController';
	import type { Course } from './ActivityStructure';
    import TableOfContents from './TableOfContents.svelte';

    const drawerController : DrawerController = getContext('drawerController');
    const course : Course = getContext('course');
    
    let button: HTMLButtonElement;

    function openDrawer() : void {
        const drawerSettings = {
            id: DrawerId.CourseContents,
            meta: course
        }
        
        drawerController.openDrawer(drawerSettings);
    }

</script>

<button bind:this={button} class="lg:hidden btn btn-sm mr-4" on:click= {openDrawer}>
    <span>
        <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
            <rect width="100" height="20" />
            <rect y="30" width="100" height="20" />
            <rect y="60" width="100" height="20" />
        </svg>
    </span>
</button>