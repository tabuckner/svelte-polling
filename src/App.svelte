<script lang="ts">
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";
  import { TabOptions } from "./constants/tab-options.enum";
  import PollList from "./components/PollList.svelte";

  // Tabs
  let tabs = [TabOptions.CurrentPolls, TabOptions.AddNewPoll];
  let activeTab = TabOptions.CurrentPolls;

  const onTabChange = (e) => {
    activeTab = e.detail;
  };

  const onAddPoll = () => {
    activeTab = TabOptions.CurrentPolls;
  };
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={onTabChange} />

  {#if activeTab === "Current Polls"}
    <PollList />
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
