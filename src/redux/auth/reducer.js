import { SET_AUTHENTECATED_USER } from "../types";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHENTECATED_USER:
      return action.id;
    default:
      return state;
  }
}
