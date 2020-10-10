import {
  GET_ALL_QUESTIONS,
  ADD_QUESTION,
  ANSWER_QUESTION,
  REMOVE_ANSWER,
} from "../types";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_ALL_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.data.qid]: {
          ...state[action.data.qid],
          [action.data.answer]: {
            ...state[action.data.qid][action.data.answer],
            votes: state[action.data.qid][action.data.answer].votes.concat([
              action.data.authedUser,
            ]),
          },
        },
      };
    case REMOVE_ANSWER:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          optionOne: {
            ...state[action.qid]["optionOne"],
            votes: state[action.qid]["optionOne"].votes.filter(
              (x) => x !== action.authedUser
            ),
          },
          optionTwo: {
            ...state[action.qid]["optionTwo"],
            votes: state[action.qid]["optionTwo"].votes.filter(
              (x) => x !== action.authedUser
            ),
          },
        },
      };

    default:
      return state;
  }
}
