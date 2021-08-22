import React from "react";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  CardText,
  Card,
  CardTitle,
  CardImg,
  CardHeader,
  CardBody
} from "reactstrap";
import { Link } from "react-router-dom";

export default function StaffDetail(props) {
  const { name, doB, startDate, annualLeave, overTime, department, image } =
    props.staff[0];

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/home">Nhân viên</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <img src={image} className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-8 col-lg-9">
          <Card>
            <CardHeader className="bg-primary text-white">{name}</CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Họ và tên </dt>
                <dd className="col-6">3 Feb. 2013</dd>
                <dt className="col-6">Major Stake Holder</dt>
                <dd className="col-6">HK Fine Foods Inc.</dd>
                <dt className="col-6">Last Year's Turnover</dt>
                <dd className="col-6">$1,250,375</dd>
                <dt className="col-6">Employees</dt>
                <dd className="col-6">40</dd>
              </dl>
            </CardBody>
          </Card>
        </div>
      </div>
    </Container>
  );
}
