import React, { useState, Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Label,
  Form,
  FormGroup,
  Input,
  FormFeedback
} from "reactstrap";

class AddStaffModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: "",
      image: "/assets/images/alberto.png",
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false
      }
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleAdd(event) {
    console.log(this.state.name);
    event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true
      }
    });
  };

  validate(
    name,
    doB,
    salaryScale,
    startDate,
    department,
    annualLeave,
    overTime
  ) {
    const errors = {
      name: "",
      doB: "",
      salaryScale: "",
      startDate: "",
      department: "",
      annualLeave: "",
      overTime: ""
    };

    if (this.state.touched.name && name.length < 3) {
      errors.name = "Họ tên chưa hợp lệ.";
    }
    return errors;
  }

  render() {
    const errors = this.validate(this.state.name);
    return (
      <div>
        <Button
          color="info"
          className="btn_green mt-2"
          onClick={this.toggleModal}
        >
          {this.props.buttonLabel}
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>THÊM NHÂN VIÊN</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleAdd}>
              <FormGroup row className="mt-2">
                <Label htmlFor="name" md={4}>
                  Họ và tên:
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nhập họ và tên .... "
                    value={this.state.name}
                    valid={errors.name === ""}
                    invalid={errors.name !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("name")}
                  />
                  <FormFeedback>{errors.name}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="doB" md={4}>
                  Ngày sinh:
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="doB"
                    name="doB"
                    placeholder="dd/mm/yyyy"
                    value={this.state.doB}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty:
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    placeholder="dd/mm/yyyy"
                    value={this.state.startDate}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="departments" md={4}>
                  Phòng ban:{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="select"
                    name="department"
                    id="departments"
                    onChange={this.handleInputChange}
                  >
                    <option>--Chọn phòng ban--</option>
                    <option value="0">Sale</option>
                    <option value="1">HR</option>
                    <option value="2">Marketing</option>
                    <option value="3">IT</option>
                    <option value="4">Finance</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương:{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="salaryScale"
                    id="salaryScale"
                    placeholder="1-->3"
                    defaultValue="1"
                    value={this.state.salaryScale}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="annualLeave" md={4}>
                  Số ngày nghỉ còn lại:{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="annualLeave"
                    id="annualLeave"
                    defaultValue="0"
                    value={this.state.annualLeave}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Label htmlFor="overTime" md={4}>
                  Số giờ làm thêm:{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    name="overTime"
                    id="overTime"
                    defaultValue="0"
                    value={this.state.overTime}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row className="mt-2">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="info" className="text-white">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="info"
              className="text-white"
              onClick={this.toggleModal}
            >
              Thêm nhân viên
            </Button>
            <Button color="secondary" onClick={this.toggleModal}>
              Hủy
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddStaffModal;
