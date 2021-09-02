import * as ActionTypes from "./actionType";
import { baseUrl } from "../shared/baseUrl";

//fetch API
export const fetchStaffs = () => (dispatch) => {
  return fetch(baseUrl + "staffs")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
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
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
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
    .then((response) => dispatch(addDepartments(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const fetchStaffsSalary = () => (dispatch) => {
  return fetch(baseUrl + "staffsSalary")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
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
    .then((response) => dispatch(addStaffsSalary(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
export const fetchStaffsByDepartment = (id) => (dispatch) => {
  return fetch(baseUrl + `departments/${id}`)
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
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
    .then((response) => dispatch(addStaffsByDepartment(response)))
    .catch((error) => {
      console.log("Lỗi", error);
    });
};
//fetch API
//
//
//action
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
export const addNewStaf = (newStaff) => ({
  type: ActionTypes.ADD_NEW_STAFF,
  payload: newStaff
});
export const deleteStaff = () => ({
  type: ActionTypes.DELETE_STAFF
});
//action
//
//
//handle
export const postNewStaff =
  (
    id,
    overTime,
    name,
    doB,
    departmentId,
    salaryScale,
    startDate,
    annualLeave
  ) =>
  (dispatch) => {
    const newStaff = {
      id: id,
      overTime: overTime,
      name: name,
      doB: doB,
      departmentId: departmentId,
      salaryScale: salaryScale,
      startDate: startDate,
      annualLeave: annualLeave
    };

    return fetch(baseUrl + "staffs", {
      method: "POST",
      body: JSON.stringify(newStaff),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })
      .then(
        (response) => {
          if (response.ok) {
            return response;
          } else {
            let error = new Error(
              `Error ${response.status} : ${response.statusText}`
            );
            error.response = response;
            throw error;
          }
        },
        (error) => {
          throw error;
        }
      )
      .then((response) => dispatch(deleteStaff(response)))
      .then((response) => response.json())
      .then((response) => dispatch(addNewStaf(response)))
      .catch((error) => {
        console.log("post newStaff", error.message);
      });
  };
export const deleteStaffs = (id) => (dispatch) => {
  return fetch(baseUrl + `staffs/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json"
    }
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          let error = new Error(
            `Error ${response.status} : ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        throw error;
      }
    )
    .catch((error) => {
      console.log("Delete Staff", error.message);
    });
};
//handle
