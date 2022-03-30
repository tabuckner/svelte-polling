<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import Tabs from "./shared/Tabs.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  // Tabs
  let tabs = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";

  const onTabChange = (e) => {
    activeTab = e.detail;
  };
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={onTabChange} />

  {#if activeTab === "Current Polls"}
    <p>Poll list Component</p>
  {:else if activeTab === "Add New Poll"}
    <CreatePollForm />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 40px auto;
  }
</style>
