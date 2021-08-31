import * as ActionTypes from "./actionType";

export const Staffs = (
  state = {
    isLoading: true,
    errMess: null,
    staffs: [],
    staffsSalary: []
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_STAFFS: {
      return { ...state, staffs: action.payload };
    }
    case ActionTypes.ADD_STAFFSSALARY: {
      return { ...state, staffsSalary: action.payload };
    }

    default:
      return state;
  }
};
