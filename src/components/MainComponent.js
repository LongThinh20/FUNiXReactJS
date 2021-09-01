import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Salary from "./SalaryComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import StaffByDepartment from "./StaffByDepartmentComponent";

import {
  fetchDepartments,
  fetchStaffs,
  fetchStaffsSalary,
  postNewStaff,
  deleteStaff
} from "../Redux/ActionCreators";

import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  //get state
  const STAFFS = useSelector((state) => state.staffs.staffs);
  const DEPARTMENTS = useSelector((state) => state.departments.departments);
  const STAFFSSALARY = useSelector((state) => state.staffs.staffsSalary);
  //get state
  const dispatch = useDispatch();

  const [resultSearch, setResultSearch] = useState([]);
  //fetch API staffs , department
  useEffect(() => {
    dispatch(fetchStaffs());
    dispatch(fetchDepartments());
    dispatch(fetchStaffsSalary());
  }, [dispatch]);

  //handle Add Staff
  const handleAddStaff = (newStaff) => {
    const {
      overTime,
      name,
      doB,
      departmentId,
      salaryScale,
      startDate,
      annualLeave
    } = newStaff;
    const id = STAFFS.length + 1;
    dispatch(
      postNewStaff(
        id,
        overTime,
        name,
        doB,
        departmentId,
        salaryScale,
        startDate,
        annualLeave
      )
    );
  };
  //handle Delete Staff
  const handleDeleteStaff = (id) => {
    deleteStaff(id);
  };

  //handle Edit Staff
  const handleEditStaff = (staff) => {};

  //

  const handleSearch = (value) => {
    if (value) {
      setResultSearch(
        STAFFS.filter((staff) =>
          staff.name.toUpperCase().includes(value.toUpperCase())
        )
      );
    } else {
      setResultSearch([]);
    }
  };

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staff={STAFFS.filter(
          (staff) => staff.id === parseInt(match.params.staffId, 10)
        )}
      />
    );
  };

  const StaffWithDepartmentId = ({ match }) => {
    return <StaffByDepartment match={match} />;
  };

  return (
    <>
      <Header />
      <Switch>
        <Route
          exact
          path="/home"
          render={() => (
            <Home
              staffs={STAFFS}
              handleSearch={handleSearch}
              resultSearch={resultSearch}
              handleAddStaff={handleAddStaff}
              departments={DEPARTMENTS}
              handleDeleteStaff={handleDeleteStaff}
              handleEditStaff={handleEditStaff}
            />
          )}
        />
        <Route path="/home/:staffId" component={StaffWithId} />
        <Route
          path="/department"
          render={() => <Department departments={DEPARTMENTS} />}
        />
        <Route path="/department/:id" component={StaffWithDepartmentId} />
        <Route path="/salary" render={() => <Salary staffs={STAFFSSALARY} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
