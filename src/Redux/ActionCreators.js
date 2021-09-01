import * as ActionTypes from "./actionType";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addStaffs(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const fetchDepartments = () => (dispatch) => {
  return fetch(baseUrl + "departments")
    .then((response) => response.json())
    .then((response) => dispatch(addDepartments(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const fetchStaffsSalary = () => (dispatch) => {
  return fetch(baseUrl + "staffsSalary")
    .then((response) => response.json())
    .then((response) => dispatch(addStaffsSalary(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const fetchStaffsByDepartment = (id) => (dispatch) => {
  return fetch(baseUrl + `departments/${id}`)
    .then((response) => response.json())
    .then((response) => dispatch(addStaffsByDepartment(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const addStaffsSalary = (staffsSalary) => {
  return {
    type: ActionTypes.ADD_STAFFSSALARY,
    payload: staffsSalary
  };
};
export const addStaffsByDepartment = (staffs) => {
  return {
    type: ActionTypes.ADD_STAFFS_BY_DEPARTMENT,
    payload: staffs
  };
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

export const addDepartments = (departments) => {
  return {
    type: ActionTypes.ADD_DEPARTMENTS,
    payload: departments
  };
};
