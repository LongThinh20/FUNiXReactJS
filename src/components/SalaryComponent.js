import React from "react";
import {
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";

export default function Salary(props) {
  const staffs = props.staffs;

  return (
    <section>
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Bảng lương</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">
          {staffs.map((staff) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card key={staff.id} className="mt-4">
                  <CardBody>
                    <CardTitle>{staff.name}</CardTitle>
                    <CardText>Mã nhân viên:{staff.id}</CardText>
                    <CardText>Hệ số lương:{staff.salaryScale}</CardText>
                    <CardText>Số giờ làm thêm:{staff.overTime}</CardText>
                    <CardText>Lương : {}</CardText>
                  </CardBody>
                </Card>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
