<script lang="ts">
    import { onMount } from 'svelte';

    export let path: string;

    let scormApi:any = undefined;
    
    onMount(() => {
        import("scorm-again").then((value) => {
            let settings = {};
            // @ts-ignore
            scormApi = new Scorm12API(settings);
            (window as any).API = scormApi;

            (window as any).API.on("LMSInitialize", () => {
                // console.log("initialize");
            });

            (window as any).API.on("LMSSetValue.cmi.core.*", () => {
            });
        });
    });
</script>

{#if scormApi }
    <iframe src={path} class="h-full w-full block overflow-hidden" title="videoLesson" ></iframe>
{/if}