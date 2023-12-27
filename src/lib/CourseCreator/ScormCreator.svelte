<script lang="ts">
    import { FileButton } from "@skeletonlabs/skeleton";

    let form:HTMLFormElement;

    function onChangeHandler(e: Event): void {
        console.log('file data:', e);
        
        form.submit();
    }
</script>

<form bind:this={form} method="POST" action="?/uploadScorm">
    <span>Upload Scorm Zip File</span>
    <FileButton name="files" accept=".zip" on:change={onChangeHandler} />
</form>