<script lang="ts">
    export let name: String|null = null;
    export let id = -1;
</script>

<div class="card p-4">
    <h3>{name}</h3>
    <p><a href="/course-player/{id}"> Start </a></p>
</div>