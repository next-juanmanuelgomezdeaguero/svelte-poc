<script>
  import { onMount } from "svelte";
  import { getApiKey } from "../components/apiKey.js";

  onMount(async () => {
    console.log("PRELOAD", getApiKey());
    window.location.assign(getApiKey() ? "assets" : "login");
  });
</script>
