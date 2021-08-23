import React from "react";
import { Container, Card, CardBody, CardTitle, CardText } from "reactstrap";

export default function SalaryList(props) {
  const salaryBasic = 3000000;
  const staffs = props.staffs;
  return (
    <div className="row">
      {staffs.map((staff) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={staff.id}>
            <Card className="mt-4">
              <CardBody>
                <CardTitle className="display-6 text_green">
                  {staff.name}
                </CardTitle>
                <CardText>Mã nhân viên: {staff.id}</CardText>
                <CardText>Hệ số lương: {staff.salaryScale}</CardText>
                <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                <CardText className="salary_text">
                  Lương :{" "}
                  {Math.round(
                    staff.salaryScale * salaryBasic + 200000 * staff.overTime
                  )
                    .toLocaleString()
                    .replace(/,/g, ",")}{" "}
                  VNĐ
                </CardText>
              </CardBody>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
