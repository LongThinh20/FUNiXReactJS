import * as ActionTypes from "./actionType";

export const Staffs = (
  state = {
    isLoading: true,
    errMess: null,
    staffs: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS: {
      return { ...state, staffs: action.payload };
    }

    default:
      return state;
  }
};
