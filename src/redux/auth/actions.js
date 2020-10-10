export const SET_AUTHENTECATED_USER = "SET_AUTHENTECATED_USER";

export function setAuthentecatedUser(id) {
  return {
    type: SET_AUTHENTECATED_USER,
    id,
  };
}
