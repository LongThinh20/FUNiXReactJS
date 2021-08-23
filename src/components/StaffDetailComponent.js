import React from "react";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";
import dateformat from "dateformat";

export default function StaffDetail(props) {
  const { name, doB, startDate, annualLeave, overTime, department, image } =
    props.staff[0];

  return (
    <section id="staff">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{name}</BreadcrumbItem>
        </Breadcrumb>
        <div id="staffDetail">
          <h1>Thông tin nhân viên</h1>
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-3">
              <img src={image} className="img-fluid" alt="" />
            </div>
            <div className="col-sm-12 col-md-8 col-lg-9">
              <Card>
                <CardBody>
                  <dl className="row">
                    <dt className="col-6">Họ và tên: </dt>
                    <dd className="col-6">{name}</dd>
                    <dt className="col-6">Ngày sinh: </dt>
                    <dd className="col-6"> {dateformat(doB, "dd/MM/yyyy")}</dd>
                    <dt className="col-6">Ngày vào công ty: </dt>
                    <dd className="col-6">
                      {dateformat(startDate, "dd/MM/yyyy")}
                    </dd>
                    <dt className="col-6">Phòng ban: </dt>
                    <dd className="col-6">{department.name}</dd>
                    <dt className="col-6">Số ngày nghỉ còn lại: </dt>
                    <dd className="col-6">{annualLeave}</dd>
                    <dt className="col-6">Số ngày làm thêm: </dt>
                    <dd className="col-6">{overTime}</dd>
                  </dl>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
