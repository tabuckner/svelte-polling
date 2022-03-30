<script lang="ts">
  import { fade, slide } from "svelte/transition";
  import { flip } from "svelte/animate";
  import PollListItem from "./PollListItem.svelte";
  import PollStore from "../stores/PollStore";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div in:fade out:slide|local animate:flip={{ duration: 300 }}>
      <PollListItem {poll} />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
</style>
