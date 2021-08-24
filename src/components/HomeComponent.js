import React, { useState } from "react";
import {
  Jumbotron,
  Container,
  Button,
  InputGroup,
  InputGroupAddon,
  Input
} from "reactstrap";

import team from "../img/developer-team.png";
import StaffList from "./StaffListComponent";

export default function Home(props) {
  const [searchTerm, setSearchTerm] = useState();
  const { staffs, handleChange, resultSearch } = props;

  window.onclick = function () {
    setSearchTerm("");
    handleChange(searchTerm);
  };

  const handleSearch = () => {
    if (!handleChange) return;
    handleChange(searchTerm);
  };

  return (
    <section>
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-md-6">
              <h1>Hệ thống</h1>
              <h2>Quản lý nhân viên</h2>
              <p className="text-white">
                Chúng tôi mang đến cho bạn những giải phải về quản lý thông tin
                nhân viên một cách hiệu quả.
              </p>
              <Button className="btn" type="submit">
                Tìm hiểu thêm
              </Button>
            </div>
            <div className="img_bg col-12 col-md-6">
              <img src={team} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </Jumbotron>
      <div id="content">
        <Container>
          <h1>Danh sách nhân viên</h1>
          <div className="row">
            <div className="col-12 col-md-4">
              <Button color="info" className="btn_green">
                THÊM NHÂN VIÊN
              </Button>
            </div>
            <div className="col-12 col-md-8 col-lg-5">
              <InputGroup>
                <Input
                  placeholder="Nhập tên nhân viên muốn tìm ... "
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <InputGroupAddon addonType="prepend">
                  <Button color="info btn_green" onClick={() => handleSearch()}>
                    <i className="fa fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
          {resultSearch.length === 0 ? (
            <StaffList staffs={staffs} />
          ) : (
            <StaffList staffs={resultSearch} />
          )}
        </Container>
      </div>
    </section>
  );
}
