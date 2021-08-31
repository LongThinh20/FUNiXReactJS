import * as ActionTypes from "./actionType";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  dispatch(loading(true));
  return fetch(baseUrl + "staffs")
    .then((res) => res.json())
    .then((res) => dispatch(addStaffs(res)))
    .catch((err) => {
      console.log("Lỗi", err);
    });
};

export const loading = () => ({
  type: ActionTypes.LOADING
});

export const staffsFailed = (errmess) => ({
  type: ActionTypes.STAFFS_FAILED,
  payload: errmess
});
export const addStaffs = (staffs) => {
  return {
    type: ActionTypes.ADD_STAFFS,
    payload: staffs
  };
};
