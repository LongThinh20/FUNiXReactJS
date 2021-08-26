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
      salaryScale: 1,
      startDate: "",
      department: 0,
      annualLeave: 0,
      overTime: 0,
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
    console.log(this.state);
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
      errors.name = "Họ tên chưa hợp lệ";
    } else if (this.state.touched.doB && doB === "") {
      errors.doB = "Ngày sinh chưa hợp lệ";
    } else if (this.state.touched.salaryScale && salaryScale < 1) {
      errors.salaryScale = "Hệ số lương chưa hợp lệ";
    } else if (this.state.touched.startDate && startDate === "") {
      errors.startDate = "Ngày chưa  hợp lệ";
    } else if (this.state.touched.annualLeave && annualLeave === "") {
      errors.annualLeave = "Giá trị chưa hợp lệ";
    } else if (this.state.touched.overTime && overTime === "") {
      errors.overTime = "Giờ  chưa hợp lệ";
    }
    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.salaryScale,
      this.state.startDate,
      this.state.department,
      this.state.annualLeave,
      this.state.overTime
    );
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
                    valid={errors.doB === ""}
                    invalid={errors.doB !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("doB")}
                  />
                  <FormFeedback>{errors.doB}</FormFeedback>
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
                    valid={errors.startDate === ""}
                    invalid={errors.startDate !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("startDate")}
                  />
                  <FormFeedback>{errors.startDate}</FormFeedback>
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
                    valid={errors.department === ""}
                    invalid={errors.department !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("department")}
                  >
                    <option value="0">Sale</option>
                    <option value="1">HR</option>
                    <option value="2">Marketing</option>
                    <option value="3">IT</option>
                    <option value="4">Finance</option>
                  </Input>
                  <FormFeedback>{errors.department}</FormFeedback>
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
                    valid={errors.salaryScale === ""}
                    invalid={errors.salaryScale !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("salaryScale")}
                  />
                  <FormFeedback>{errors.salaryScale}</FormFeedback>
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
                    valid={errors.annualLeave === ""}
                    invalid={errors.annualLeave !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("annualLeave")}
                  />
                  <FormFeedback>{errors.annualLeave}</FormFeedback>
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
                    value={this.state.overTime}
                    valid={errors.overTime === ""}
                    invalid={errors.overTime !== ""}
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur("overTime")}
                  />
                  <FormFeedback>{errors.overTime}</FormFeedback>
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
