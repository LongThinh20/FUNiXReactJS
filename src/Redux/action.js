import * as types from "./constants";

export const addStaff = (newStaff) => {
  return {
    type: types.ADD_STAFF,
    payload: newStaff
  };
};
