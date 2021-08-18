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
  NavbarText,
  Container
} from "reactstrap";

import Menu from "./components/MenuComponent";
import { STAFFS } from "./shared/staffs";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="App">
      <Navbar color="primary" dark expand="md">
        <Container>
          <NavbarBrand href="/">Ứng dụng quản lý nhân viên</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <i class="fa fa-users"></i>Nhân Viên
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">
                  <i class="fa fa-building"></i>Phòng Ban
                </NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <i class="fa fa-money-bill-alt"></i> Bảng Lương
            </NavbarText>
          </Collapse>
        </Container>
      </Navbar>
      <Menu staffs={STAFFS} />
    </div>
  );
}

export default App;
