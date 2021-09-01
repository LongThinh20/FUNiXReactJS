import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Container
} from "reactstrap";

import { Link, useParams } from "react-router-dom";

export default function Department(props) {
  const departments = props.departments;
  let param = useParams();
  console.log(param.id);

  return (
    <section id="department">
      <Container>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Nhân viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>Dách sách phòng ban</BreadcrumbItem>
        </Breadcrumb>

        <h1>Danh sách phòng ban</h1>

        <div className="row">
          {departments.map((item, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
                <Link to={`/departments/${item.id}`}>
                  <Card className="m-1">
                    <CardBody>
                      <CardTitle>{item.name}</CardTitle>
                      <CardText>
                        Số lượng nhân viên: {item.numberOfStaff}
                      </CardText>
                    </CardBody>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
