<script lang="ts">
    import type { LayoutData } from './$types';
    import Header from '$lib/Header.svelte';
    
    export let data: LayoutData;
</script>

<Header />
<slot />