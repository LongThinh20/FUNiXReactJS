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
            <img src={logo} width={100} height={50} />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#" active>
                  <i className="fa fa-users"></i>Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem href="#">
                <NavLink>
                  <i className="fa fa-building"></i>Phòng Ban
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i className="fa fa-money-check"></i> Bảng Lương
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className="row">
          <div className="col">
            <h1>Nhân viên</h1>
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
    </div>
  );
}

export default App;
