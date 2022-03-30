<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let tabs;
  export let activeTab;
</script>

<div class="tabs">
  {#each tabs as tab}
    <div class="tab" class:tab--active={tab == activeTab} on:click="{() => dispatch('tabChange', tab)}">{tab}</div>
  {/each}
</div>

<style>
  .tabs {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .tab {
    margin: 0 16px;
    font-size: 18px;
    color: #555;
    cursor: pointer;
  }

  .tab--active {
    color: #d91b42;
    border-bottom: 1px solid #d91b42;
    padding-bottom: 8px;
  }
</style>
