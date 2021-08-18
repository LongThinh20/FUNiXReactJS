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

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [rowIndex, setRowIndex] = useState();

  return (
    <div className="App">
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand href="/">Ứng dụng quản lý nhân viên</NavbarBrand>
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
      </Container>

      <Menu staffs={STAFFS} rowIndex={rowIndex} />
    </div>
  );
}

export default App;
