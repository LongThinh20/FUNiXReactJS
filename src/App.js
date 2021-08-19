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
            <img src={logo} width={120} height={"100%"} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#" active>
                  Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Phòng Ban</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Bảng Lương</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <section id="content">
        <Container>
          <div className="row">
            <div className="col">
              <h3>Nhân viên</h3>
            </div>
            <div className="col">
              <InputGroup>
                <Input />
                <InputGroupAddon addonType="prepend">
                  <Button>
                    <i className="fa fa-search" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="col-3 text-center">
              <FormGroup>
                <Label for="exampleSelect">Số cột muốn hiển thị</Label>
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
                  <i className="fa fa-fax" />
                  092833635
                </li>
                <li>
                  <i className="fa fa-phone" />
                  07262536238
                </li>
                <li>
                  <i className="fa fa-envelope" />
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
          <p className="copy">Copyright 2021 by Dao Long Thinh</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
