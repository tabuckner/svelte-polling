<script lang="ts">
  import PollStore from "../stores/PollStore";
  import { createEventDispatcher } from "svelte";
  import Button from "../shared/Button.svelte";

  const dispatch = createEventDispatcher();

  let fields = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let errors = {
    question: "",
    answerA: "",
    answerB: "",
  };
  let valid = false;

  const onSubmit = () => {
    valid = true;

    // validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long.";
    } else {
      errors.question = "";
    }

    // validate answer A
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer cannot be empty.";
    } else {
      errors.answerA = "";
    }

    // validate Answer B
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer cannot be empty.";
    } else {
      errors.answerB = "";
    }

    // Add new poll
    if (valid) {
      let nextPoll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };

      PollStore.update((currentPolls) => [...currentPolls, nextPoll]);
      dispatch("addPoll");
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={fields.question} />
    <div class="error">{errors.question}</div>
  </div>
  <div class="form-field">
    <label for="answer-a">Answer A:</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
    <div class="error">{errors.answerA}</div>
  </div>
  <div class="form-field">
    <label for="answer-b">Answer B:</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
    <div class="error">{errors.answerB}</div>
  </div>

  <Button type="secondary" flat={true} inverse={true}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }

  .form-field {
    margin: 16px auto;
  }

  input {
    width: 100%;
    border-radius: 4px;
  }

  label {
    margin: 8px auto;
    text-align: left;
  }

  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
  }
</style>
