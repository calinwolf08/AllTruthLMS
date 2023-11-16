<script lang="ts">
    import { onMount } from 'svelte';

    let scormApi:any = undefined;
    
    onMount(() => {
        console.log('the component is about to update: ' + window);
        
        import("scorm-again").then((value) => {
            let settings = {};
            scormApi = new Scorm12API(settings);
            (window as any).API = scormApi;

            (window as any).API.on("LMSInitialize", () => {
                console.log("initialize");
            });

            (window as any).API.on("LMSSetValue.cmi.core.*", () => {
            });
        });
    });

    let scormLocation = "/TestBridge/index_lms.html";
</script>

{#if scormApi }
    <iframe src={scormLocation} class="h-full w-full block overflow-hidden" title="videoLesson" ></iframe>
{/if}