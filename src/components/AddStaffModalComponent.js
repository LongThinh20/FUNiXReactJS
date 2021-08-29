import React, { Component } from "react";
import Swal from "sweetalert2";
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
      startDate: "",
      department: "",
      salaryScale: 1,
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
      },
      isFlag: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
      name: "",
      doB: "",
      salaryScale: 1,
      startDate: "",
      department: "",
      annualLeave: 0,
      overTime: 0,
      touched: {
        name: false,
        doB: false,
        salaryScale: false,
        startDate: false,
        department: false,
        annualLeave: false,
        overTime: false
      },
      isFlag: false
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
  //handle add new staff
  handleAdd(event) {
    this.setState({
      isFlag: true
    });
    const newStaff = {
      id: this.props.id,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      image: "/assets/images/alberto.png"
    };

    if (!Object.values(newStaff).includes("")) {
      this.props.handleAddStaff(newStaff);
      this.setState({
        name: "",
        doB: "",
        salaryScale: 1,
        startDate: "",
        department: "",
        annualLeave: 0,
        overTime: 0,
        touched: {
          name: false,
          doB: false,
          salaryScale: false,
          startDate: false,
          department: false,
          annualLeave: false,
          overTime: false
        },
        isFlag: false
      });
      Swal.fire({
        position: "center-center",
        icon: "success",
        title: "Thêm nhân viên thành công!",
        showConfirmButton: false,
        timer: 1500
      });
    }

    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: {
        ...this.state.touched,
        [field]: true
      },
      isFlag: false
    });
  };

  validate(
    name,
    doB,
    startDate,
    department,
    salaryScale,
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

    if (this.state.isFlag && name === "") {
      errors.name = "Chưa nhập dữ liệu";
    }
    if (this.state.isFlag && doB === "") {
      errors.doB = "Chưa nhập ngày sinh";
    }
    if (this.state.isFlag && startDate === "") {
      errors.startDate = "Chưa nhập ngày bắt đầu làm";
    }
    if (this.state.isFlag && department === "") {
      errors.department = "Chưa chọn tên phòng ban";
    }
    if (this.state.isFlag && overTime === "") {
      errors.overTime = "Chưa nhập số giờ làm thêm";
    }
    if (this.state.isFlag && annualLeave === "") {
      errors.annualLeave = "Chưa nhập số ngày nghỉ còn lại.";
    }
    //
    if (this.state.touched.name && name.length < 3) {
      errors.name = "Chưa nhập họ tên.";
    }

    if (this.state.touched.doB && doB === "") {
      errors.doB = "Chưa nhập ngày sinh.";
    }
    if (this.state.touched.startDate && startDate === "") {
      errors.startDate = "Chưa nhập ngày bắt đầu làm.";
    }
    if (
      this.state.touched.department &&
      (department === "0" || department === "")
    ) {
      errors.department = "Chưa chọn phòng ban";
    }
    if (this.state.touched.salaryScale && salaryScale === "") {
      errors.salaryScale = "Chưa nhập hệ số lương";
    } else if (salaryScale <= 0) {
      errors.salaryScale = "Hệ số lương chưa hợp lệ";
    }
    if (this.state.touched.annualLeave && annualLeave === "") {
      errors.annualLeave = "Chưa nhập ngày nghỉ";
    } else if (annualLeave < 0) {
      errors.annualLeave = "Số ngày nghỉ chưa hợp lệ";
    }
    if (this.state.touched.overTime && overTime === "") {
      errors.overTime = "Chưa nhập số giờ làm thêm";
    } else if (this.state.touched.overTime && overTime < 0) {
      errors.overTime = "Số giờ làm thêm  chưa hợp lệ";
    }

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.name,
      this.state.doB,
      this.state.startDate,
      this.state.department,
      this.state.salaryScale,
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
                    <option value="0">--Chọn tên phòng ban--</option>
                    <option value="1">Sale</option>
                    <option value="2">HR</option>
                    <option value="3">Marketing</option>
                    <option value="4">IT</option>
                    <option value="5">Finance</option>
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
                    type="number"
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
                    type="number"
                    name="annualLeave"
                    id="annualLeave"
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
                    type="number"
                    name="overTime"
                    id="overTime"
                    defaultValue="0"
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
                <Col md={8}></Col>
                <Col md={4}>
                  <Button type="submit" color="info" className="text-white">
                    Thêm nhân viên
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
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
