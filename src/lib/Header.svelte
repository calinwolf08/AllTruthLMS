<script lang="ts">
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

</script>

<Navbar class="bg-white text-dark-blue-500 drop-shadow-md">
    <NavBrand>AllTruth</NavBrand>
    <NavHamburger />
    <NavUl>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/dashboard">Dashboard</NavLi>
    </NavUl>
</Navbar>
