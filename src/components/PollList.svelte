<script lang="ts">
  import { PollModel } from "../models/poll.model";
  import PollListItem from './PollListItem.svelte'

  export let polls: Array<PollModel> = [];
</script>

<div class="poll-list">
  {#each polls as poll (poll.id)}
    <PollListItem {poll}></PollListItem>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }
</style>
