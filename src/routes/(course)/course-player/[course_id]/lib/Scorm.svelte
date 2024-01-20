<script lang="ts">
	import { onMount } from "svelte";

    export let path: string;

    let iframe: HTMLIFrameElement;

    function handleMessage(e: MessageEvent) {
        if (e.data == "LMSInitialize") {
            console.log("SCORM Initialized");
        }
        else if (e.data == "LMSSetValue") {
            console.log("SCORM SetValue")
        }
    }

    onMount(() => {
        window.addEventListener('message', handleMessage);

        return () => {
            window.removeEventListener('message', handleMessage);
        }
    })

</script>

<iframe bind:this={iframe} src={path} class="h-full w-full p-0 m-0 block overflow-hidden" title="scorm-container"></iframe>