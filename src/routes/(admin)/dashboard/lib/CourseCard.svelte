<script lang="ts">
    import { Card, Button, Heading } from 'flowbite-svelte';

    export let name: String|null = null;
    export let id = "";
</script>

<Card>
    <Heading tag="h3" class="mb-5">{name}</Heading>
    <Button href="/course-player/{id}"> Start </Button>
</Card>