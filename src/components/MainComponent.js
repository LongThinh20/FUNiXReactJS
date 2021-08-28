import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Salary from "./SalaryComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

const Main = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const [staffsListFromState, setStaffsListFromState] = useState([]);
  const [departmentFormState, setDepartmentFormSate] = useState([]);

  // get data form localStorage
  useEffect(() => {
    if (typeof Storage !== "undefined") {
      localStorage.setItem("STAFFSLIST", JSON.stringify(STAFFS));
      localStorage.setItem("DEPARTMENTSLIST", JSON.stringify(DEPARTMENTS));
      setStaffsListFromState(JSON.parse(localStorage.getItem("STAFFSLIST")));
      setDepartmentFormSate(
        JSON.parse(localStorage.getItem("DEPARTMENTSLIST"))
      );
    } else {
      alert("Trình duyệt không hổ trợ");
    }
  }, []);

  //end get data form localStorage

  const handleAddStaff = (newStaff) => {
    const newArr = [...staffsListFromState];
    newArr.push(newStaff);

    setStaffsListFromState(newArr);
    console.log(staffsListFromState);
  };

  console.log(staffsListFromState);
  console.log("render main");

  const handleSearch = (value) => {
    if (value) {
      setResultSearch(
        staffsListFromState.filter((staff) =>
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
        staff={staffsListFromState.filter(
          (staff) => staff.id === parseInt(match.params.staffId, 10)
        )}
      />
    );
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
              staffs={staffsListFromState}
              handleSearch={handleSearch}
              resultSearch={resultSearch}
              handleAddStaff={handleAddStaff}
            />
          )}
        />
        <Route path="/home/:staffId" component={StaffWithId} />
        <Route
          path="/department"
          render={() => <Department departments={departmentFormState} />}
        />
        <Route
          path="/salary"
          render={() => <Salary staffs={staffsListFromState} />}
        />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
