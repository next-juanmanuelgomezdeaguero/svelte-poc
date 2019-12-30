<script>
  import { onMount } from "svelte";
  import { get } from "../components/api.js";

  let promise;

  onMount(async () => {
    promise = _getAssets();
  });

  const _getAssets = async () => {
    let assets = await get("assets");

    return assets;
  };
</script>

<svelte:head>
  <title>Assets</title>
</svelte:head>

<h1>Assets</h1>

{#await promise}
  <p>Loading...</p>
{:then assets}
  <p>{assets}</p>
{:catch error}
  <p style="color: red">{error}</p>
{/await}
