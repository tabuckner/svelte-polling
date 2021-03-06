<script lang="ts">
  import PollStore from "../stores/PollStore";
  import { PollModel } from "../models/poll.model";
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";
  import { tweened } from 'svelte/motion'

  export let poll: PollModel;

  // Reactive Values
  $: totalVotes = poll.votesA + poll.votesB;
  $: widths = {
    a: (poll.votesA / totalVotes) * 100 || 0,
    b: (poll.votesB / totalVotes) * 100 || 0,
  };

  const tweenedA = tweened(0);
  const tweenedB = tweened(0);
  $: tweenedA.set(widths.a);
  $: tweenedB.set(widths.b);
  $: console.warn($tweenedA, $tweenedB);

  const onClickAnswer = (option: string, id: number) => {
    PollStore.update((currentPolls) => {
      let nextPolls = [...currentPolls];

      let votedPoll = nextPolls.find((poll) => poll.id === id);

      if (option === "a") {
        votedPoll.votesA++;
      }
      if (option === "b") {
        votedPoll.votesB++;
      }

      return [...nextPolls];
    });
  };

  const onDelete = (id: number) => {
    PollStore.update((currentPolls) =>
      currentPolls.filter((poll) => poll.id !== id)
    );
  };
</script>

<Card>
  <div class="poll-list-item">
    <h3>{poll.question}</h3>
    <p>Total Votes {totalVotes}</p>
    <div class="answer" on:click={() => onClickAnswer("a", poll.id)}>
      <div class="percent percent-a" style="width: {$tweenedA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => onClickAnswer("b", poll.id)}>
      <div class="percent percent-b" style="width: {$tweenedB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => onDelete(poll.id)}>Delete</Button>
    </div>
  </div>
</Card>

<style>
  h3 {
    margin: 0 auto;
    color: #555;
  }

  p {
    margin-top: 8px;
    font-size: 16px;
    color: #aaa;
    margin-bottom: 32px;
  }

  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 8px auto;
    position: relative;
    border-radius: 4px;
  }

  .answer:hover {
    opacity: 0.6;
  }

  span {
    display: inline-block;
    padding: 16px 24px;
  }

  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }

  .percent-a {
    border-left: 4px solid #d91b42;
    background-color: rgba(217, 27, 66, 0.2);
  }

  .percent-b {
    border-left: 4px solid #45c496;
    background-color: rgba(69, 195, 150, 0.2);
  }

  .delete {
    margin-top: 32px;
    text-align: center;
  }
</style>
