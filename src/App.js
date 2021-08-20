import React, { useState } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
  Container
} from "reactstrap";

import Menu from "./components/MenuComponent";
import { STAFFS } from "./shared/staffs";
import logo from "./img/logo.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [rowIndex, setRowIndex] = useState();

  return (
    <div className="App">
      <Navbar className="nav" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={logo} width={120} height={"100%"} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink active href="#">
                  NHÂN VIÊN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">PHÒNG BAN</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">BẢNG LƯƠNG</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <section id="content">
        <Container>
          <h3 className="text_gray">Nhân viên</h3>
          <div className="row">
            <div className="mt-4 col-md-12 col-lg-2">
              <Button color="info" className="btn_green">
                THÊM NHÂN VIÊN
              </Button>
            </div>
            <div className="mt-4 col-md-12  col-lg ">
              <InputGroup>
                <Input placeholder="Nhập tên nhân viên muốn tìm ... " />
                <InputGroupAddon addonType="prepend">
                  <Button color="info btn_green">
                    <i className="fa fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="col-md-2 text-center">
              <FormGroup>
                <Label for="exampleSelect" className="text_gray">
                  Số cột muốn hiển thị
                </Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelect"
                  onChange={(e) => setRowIndex(e.target.value)}
                >
                  <option>- Chọn số cột hiển thị -</option>
                  <option value="12">1</option>
                  <option value="6">2</option>
                  <option value="4">3</option>
                  <option value="3">4</option>
                </Input>
              </FormGroup>
            </div>
          </div>
        </Container>

        <Menu staffs={STAFFS} rowIndex={rowIndex} />
      </section>
      <footer>
        <Container>
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <h4>Địa chỉ</h4>
              <h5>122 Cộng Hòa , Tân Bình , TP.HCM</h5>
              <ul>
                <li>
                  <i className="fa fa-fax m-2" />
                  092833635
                </li>
                <li>
                  <i className="fa fa-phone m-2" />
                  07262536238
                </li>
                <li>
                  <i className="fa fa-envelope m-2" />
                  quanlynhanvien@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-lg-6">
              <ul className="listIcon">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-google-plus-g" />
                </li>
                <li>
                  <i className="fab fa-youtube" />
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                </li>
              </ul>
            </div>
          </div>
          <p className="text_white">Copyright 2021 by Dao Long Thinh</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
