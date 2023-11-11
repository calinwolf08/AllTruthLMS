<script lang="ts">
    import { getContext } from 'svelte';
    import type {DrawerController} from '$lib/DrawerController';

    const drawerController : DrawerController = getContext('drawerController');

    function openDrawer() : void {
        drawerController.openDrawer();
    }
</script>

<button class="lg:hidden btn btn-sm mr-4" on:click= {openDrawer}>
    <span>
        <svg viewBox="0 0 100 80" class="fill-token w-4 h-4">
            <rect width="100" height="20" />
            <rect y="30" width="100" height="20" />
            <rect y="60" width="100" height="20" />
        </svg>
    </span>
</button>