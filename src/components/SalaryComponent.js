import React from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function Salary(props) {
  const staffs = props.staffs;

  return (
    <section>
      <Container>
        <div className="row">
          {staffs.map((staff) => {
            return (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <Card>
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
