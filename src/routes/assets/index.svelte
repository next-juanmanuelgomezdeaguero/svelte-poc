<script>
  import { onMount } from "svelte";
  import { get } from "../../components/api.js";

  let promise;
  let assets = [];

  onMount(async () => {
    promise = _getAssets();
  });

  const _getAssets = async () => {
    assets = await get("assets");

    return assets;
  };
</script>

<svelte:head>
  <title>Assets</title>
</svelte:head>

<h1>Assets</h1>

{#await promise}
  <p>Loading...</p>
{:then}
  {#each assets as asset}
    <p>{asset.name}</p>
  {/each}
{:catch error}
  <p style="color: red">{error}</p>
{/await}
