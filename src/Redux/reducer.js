import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import * as types from "./constants";

export const initialState = {
  staffs: STAFFS,
  departments: DEPARTMENTS
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_STAFF: {
      let newArr = [...state.staffs];

      state.departments.forEach((item, index) => {
        if (item.id.slice(-1) === action.payload.department) {
          action.payload.department = DEPARTMENTS[`${index}`];
          item.numberOfStaff += 1;
        }
      });

      newArr.push(action.payload);
      state.staffs = newArr;

      return { ...state };
    }

    default:
      return state;
  }
};
