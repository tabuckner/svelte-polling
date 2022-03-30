import { writable } from "svelte/store";
import { PollModel } from "../models/poll.model";

const PollStore = writable<Array<PollModel>>([
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
    votesA: 6,
    votesB: 9,
  },
]);

export default PollStore;