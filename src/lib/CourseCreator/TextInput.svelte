<script lang="ts">
    export let value = "";
    export let title = "";
    export let name = "";
    export let placeholder = ""
</script>

<label class="label">
    <span>{title}</span>
    <input bind:value={value} {name} type="text" class="input" {placeholder} />
</label>