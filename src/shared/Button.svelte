<script lang="ts">
  export let type = "primary";
  export let flat = false;
  export let inverse = false;
</script>

<button class={type} class:flat class:inverse on:click>
  <slot><!-- optional fallback --></slot>
</button>

<style>
  button {
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    padding: 8px 16px;
    font-weight: bold;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.16);
  }

  .primary {
    background: #d91b42;
    color: white;
  }

  .secondary {
    background: #45c496;
    color: white;
  }

  .flat {
    box-shadow: none;
  }

  .primary.inverse {
    background: white;
    color: #d91b42;
    border: 1px solid #d91b42;
  }

  .secondary.inverse {
    background: white;
    color: #45c496;
    border: 1px solid #45c496;
  }
</style>
