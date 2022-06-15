<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { setup } from "$lib/jsrp-nui";
  /*
    this file is to handle FiveM NUI entry point /index.html
  */
  onMount(() => {
    goto("/nui/");
  });
</script>
