<script lang="ts">
    import { AppBar } from '@skeletonlabs/skeleton';

	import MenuButton from '$lib/CoursePlayer/MenuButton.svelte';
</script>

<AppBar>
    <svelte:fragment slot="lead">
        <div class="flex items-center">
            <MenuButton/>
            <strong class="text-xl pl-6">AllTruth</strong>
            <p class="pl-8"><a href="/">Home</a></p>
            <p class="pl-8"><a href="/admin">Admin</a></p>
        </div>
    </svelte:fragment>
</AppBar>