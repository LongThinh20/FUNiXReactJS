import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Salary from "./SalaryComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import { useSelector } from "react-redux";

const Main = () => {
  const [resultSearch, setResultSearch] = useState([]);
  const STAFFS = useSelector(state => state.staffs)
  const DEPARTMENTS = useSelector(state => state.departments)


  const handleChange = (value) => {
    console.log(value);
    setResultSearch(
      value
        ? STAFFS.filter((staff) =>
            staff.name.toUpperCase().includes(value.toUpperCase())
          )
        : []
    );
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
              handleChange={handleChange}
              resultSearch={resultSearch}
            />
          )}
        />
        <Route path="/home/:staffId" component={StaffWithId} />
        <Route
          path="/department"
          render={() => <Department departments={DEPARTMENTS} />}
        />
        <Route path="/salary" render={() => <Salary staffs={STAFFS} />} />
        <Redirect to="/home" />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
