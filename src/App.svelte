<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import { PollModel } from "./models/poll.model";
  import { TabOptions } from "./constants/tab-options.enum";
  import PollList from "./components/PollList.svelte";

  // Tabs
  let tabs = [TabOptions.CurrentPolls, TabOptions.AddNewPoll];
  let activeTab = TabOptions.CurrentPolls;

  const onTabChange = (e) => {
    activeTab = e.detail;
  };

  // Polls
  let polls: Array<PollModel> = [
    {
      id: 1,
      question: "Python or Javascript",
      answerA: "Python",
      answerB: "Javascript",
      votesA: 9,
      votesB: 15,
    },
    {
      id: 2,
      question: "Bones or No Bones?",
      answerA: "Bones",
      answerB: "No Bones",
      votesA: 9,
      votesB: 15,
    },
  ];

  const onAddPoll = (e) => {
    const nextPoll: PollModel = e.detail;
    polls = [...polls, nextPoll];
    activeTab = TabOptions.CurrentPolls;
  };

  const onVote = (e) => {
    const { option, id } = e.detail;
    let nextPolls = [...polls];

    let votedPoll = nextPolls.find((poll) => poll.id === id);

    if (option === "a") {
      votedPoll.votesA++;
    }
    if (option === "b") {
      votedPoll.votesB++;
    }

    polls = [...nextPolls];
  };
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={onTabChange} />

  {#if activeTab === "Current Polls"}
    <PollList {polls} on:vote={onVote} />
  {:else if activeTab === "Add New Poll"}
    <CreatePollForm on:addPoll={onAddPoll} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
