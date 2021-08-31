import React from "react";
import StaffList from "./StaffListComponent";
import { Breadcrumb, Container, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

export default function StaffsByDepartment(props) {
  console.log(props);

  return (
    <section>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active></BreadcrumbItem>
      </Breadcrumb>
      <Container>
        <StaffList />
      </Container>
    </section>
  );
}
