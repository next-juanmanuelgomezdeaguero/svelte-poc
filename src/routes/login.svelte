<script>
  import { setApiKey } from "../components/apiKey.js";
  import { defaultApiKey } from "../components/config.js";
  import { get } from "../components/api.js";

  let newApiKey;
  let promise;

  function changeApiKey() {
    setApiKey(newApiKey);
    promise = _simulateLogin();
  }

  function useDefaultApiKey() {
    setApiKey(defaultApiKey);
    promise = _simulateLogin();
  }

  async function _simulateLogin() {
    let assets = await get("assets");

    //TODO: Catch error
    location.assign("assets");
  }
</script>

<svelte:head>
  <title>Login</title>
</svelte:head>

<h1>Login</h1>

<p>Introduce API key</p>
<input type="text" bind:value={newApiKey} />

<button on:click={changeApiKey}>Entrar</button>
<button on:click={useDefaultApiKey}>Default</button>

{#if promise}
  {#await promise}
    <p>...waiting</p>
   {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}
  <p>Introduce API key</p>
{/if}
