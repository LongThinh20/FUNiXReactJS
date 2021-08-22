import React from "react";
import {
  Jumbotron,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Input,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

import { Link } from "react-router-dom";
import team from "../img/developer-team.png";

export default function Home(props) {
  const staffs = props.staffs;
  return (
    <section>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-md-6">
              <h1>Hệ thống</h1>
              <h2>Quản lý nhân viên</h2>
              <p>
                Chúng tôi mang đến cho bạn những giải phải về quản lý thông tin
                nhân viên một cách hiệu quả.
              </p>
              <Button className="btn">Tìm hiểu thêm</Button>
            </div>
            <div className="img_bg col-12 col-md-6">
              <img src={team} className="img-fluid" />
            </div>
          </div>
        </div>
      </Jumbotron>
      <div id="content">
        <Container>
          <h1>Danh sách nhân viên</h1>
          <div className="row">
            <div className="col-12 col-md-2">
              <Button color="info" className="btn_green">
                THÊM NHÂN VIÊN
              </Button>
            </div>
            <div className="col-12 col-md-5">
              <InputGroup>
                <Input placeholder="Nhập tên nhân viên muốn tìm ... " />
                <InputGroupAddon addonType="prepend">
                  <Button color="info btn_green">
                    <i className="fa fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          <section>
            <div className="row">
              {staffs.map((staff) => {
                return (
                  <div className="col-6 col-sm-6 col-md-4 col-lg-2 ">
                    <Link to={`/home/${staff.id}`}>
                      <Card key={staff.id} className="mt-4">
                        <CardImg src={staff.image} alt={staff.name} />
                        <CardBody>
                          <CardTitle>{staff.name}</CardTitle>
                          <CardText>{staff.description}</CardText>
                        </CardBody>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        </Container>
      </div>
    </section>
  );
}
