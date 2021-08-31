import * as ActionTypes from "./actionType";
import { baseUrl } from "../shared/baseUrl";

export const fetchStaffs = () => (dispatch) => {
  return fetch(baseUrl + "staffs")
    .then((res) => res.json())
    .then((res) => dispatch(addStaffs(res)))
    .catch((err) => {
      console.log("Lỗi", err);
    });
};
export const fetchDepartments = () => (dispatch) => {
  return fetch(baseUrl + "departments")
    .then((res) => res.json())
    .then((res) => dispatch(addDepartments(res)))
    .catch((err) => {
      console.log("Lỗi", err);
    });
};
export const fetchStaffsSalary = () => (dispatch) => {
  return fetch(baseUrl + "staffsSalary")
    .then((res) => res.json())
    .then((res) => dispatch(addStaffsSalary(res)))
    .catch((err) => {
      console.log("Lỗi", err);
    });
};
export const fetchStaffsByDepartment = (id) => (dispatch) => {
  return fetch(baseUrl + `departments/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(addStaffsByDepartment(res)))
    .catch((err) => {
      console.log("Lỗi", err);
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
