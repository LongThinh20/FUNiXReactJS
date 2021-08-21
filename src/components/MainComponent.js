import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./FooterComponent";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Salary from "./SalaryComponent";
import Department from "./DepartmentComponent";
import StaffDetail from "./StaffDetailComponent";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";

const Main = (props) => {
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
        <Route exact path="/home" render={() => <Home staffs={STAFFS} />} />
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
