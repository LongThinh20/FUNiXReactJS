import React from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";

export default function SalaryList(props) {
  const { staffs, salaryBasic } = props;
  return (
    <div className="row">
      {staffs.map((staff) => {
        return (
          <div className="col-sm-12 col-md-6 col-lg-4" key={staff.id}>
            <Card className="mt-4">
              <CardBody>
                <Link to={`/home/${staff.id}`}>
                  <CardTitle className="display-6 text_green">
                    {staff.name}
                  </CardTitle>
                </Link>
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
