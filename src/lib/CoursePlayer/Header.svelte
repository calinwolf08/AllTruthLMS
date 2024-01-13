<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	// import MenuButton from '$lib/CoursePlayer/MenuButton.svelte';
</script>

<Navbar class="bg-white text-dark-blue-500 drop-shadow-md">
    <NavBrand>AllTruth</NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/dashboard">Dashboard</NavLi>
    </NavUl>
</Navbar>

<!-- <AppBar>
    <svelte:fragment slot="lead">
        <div class="flex items-center">
            <MenuButton/>
            <strong class="text-xl pl-6">AllTruth</strong>
            <p class="pl-8"><a href="/">Home</a></p>
            <p class="pl-8"><a href="/dashboard">Dashboard</a></p>
        </div>
    </svelte:fragment>
</AppBar> -->
