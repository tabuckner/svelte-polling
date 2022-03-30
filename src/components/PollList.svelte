<script lang="ts">
  import PollListItem from "./PollListItem.svelte";
  import PollStore from "../stores/PollStore";
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <PollListItem {poll} />
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
</style>
