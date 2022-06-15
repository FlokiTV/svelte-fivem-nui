<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { setup } from "$lib/jsrp-nui";

  onMount(() => {
    setup({
      teste: (args: any) => {
        console.log(args);
      },
    });
  });
</script>

<slot />
