import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Row,
  Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import Swal from "sweetalert2";
import dateformat from "dateformat";

const AddStaffModal = (props) => {
  const { buttonLabel, handleAddStaff } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  //validate
  const required = (val) => val && val.length;
  const minLength = (len) => (val) => !val || val.length >= len;
  const isVali = (len) => (val) => !val || val > len;

  //validate

  const handleSubmit = (values) => {
    const newStaff = {
      overTime: Number(values.overTime),
      name: values.name,
      doB: dateformat(values.doB, "dd/mm/yyyy"),
      salaryScale: Number(values.salaryScale),
      startDate: dateformat(values.startDate, "dd/mm/yyyy"),
      departmentId: values.departmentId,
      annualLeave: Number(values.annualLeave)
    };

    handleAddStaff(newStaff);
    Swal.fire({
      position: "center-center",
      icon: "success",
      title: "Thêm nhân viên thành công !",
      showConfirmButton: false,
      timer: 1500
    });
    toggle();
  };

  return (
    <div>
      <Button color="info" className="text-white" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>THÊM NHÂN VIÊN</ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="name" md={4}>
                Họ và tên:{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Nhập họ và tên ... "
                  className="form-control m-1"
                  validators={{
                    required,
                    minLength: minLength(3)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".name"
                  show="touched"
                  messages={{
                    required: "Họ và tên chưa nhập...",
                    minLength: "Họ tên phải từ 3 kí tự trở lên"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="doB" md={4}>
                Ngày sinh:{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".doB"
                  id="doB"
                  name="doB"
                  className="form-control m-1"
                  validators={{
                    required
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".doB"
                  show="touched"
                  messages={{
                    required: "Nhập ngày sinh..."
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="startDate" md={4}>
                Ngày vào công ty:{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  type="date"
                  model=".startDate"
                  id="startDate"
                  name="startDate"
                  className="form-control m-1"
                  validators={{
                    required
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".startDate"
                  show="touched"
                  messages={{
                    required: "Nhập ngày ..."
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="departmentId" md={4}>
                Phòng ban:{" "}
              </Label>
              <Col md={8}>
                <Control.select
                  model=".departmentId"
                  id="departmentId"
                  name="departmentId"
                  className="form-control m-1"
                  validators={{
                    required
                  }}
                >
                  <option value="">--Chọn tên phòng ban--</option>
                  <option value="Dept01">Sale</option>
                  <option value="Dept02">HR</option>
                  <option value="Dept03">Marketing</option>
                  <option value="Dept04">IT</option>
                  <option value="Dept05">Finance</option>
                </Control.select>
                <Errors
                  className="text-danger"
                  model=".departmentId"
                  show="touched"
                  messages={{
                    required: "Chọn tên phòng ban ..."
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="salaryScale" md={4}>
                Hệ số lương :{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  type="number"
                  model=".salaryScale"
                  id="salaryScale"
                  name="salaryScale"
                  className="form-control m-1"
                  placeholder="1-->3"
                  validators={{ required, isVali: isVali(0) }}
                  defaultValue="1"
                />
                <Errors
                  className="text-danger"
                  model=".salaryScale"
                  show="touched"
                  messages={{
                    required: "Nhập hệ số lương...",
                    isVali: "Hệ số lương chưa hợp lệ"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="annualLeave" md={4}>
                Số ngày nghỉ còn lại:{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  type="number"
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  className="form-control m-1"
                  placeholder="Nhập số ngày nghỉ còn lại..."
                  validators={{ required, isVali: isVali(-1) }}
                  defaultValue="0"
                />
                <Errors
                  className="text-danger"
                  model=".annualLeave"
                  show="touched"
                  messages={{
                    required: "Nhập số ngày nghỉ còn lại",
                    isVali: "Số ngày nghỉ còn lại chưa hợp lệ"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="overTime" md={4}>
                Số giờ làm thêm:{" "}
              </Label>
              <Col md={8}>
                <Control.text
                  type="number"
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  className="form-control m-1"
                  placeholder="Nhập số ngày nghỉ còn lại..."
                  defaultValue="0"
                  validators={{
                    required,
                    isVali: isVali(-1)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".overTime"
                  show="touched"
                  messages={{
                    required: "Chưa nhập số giờ làm thêm",
                    isVali: "Số giờ làm thêm chưa hợp lệ"
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Button
                type="submit"
                color="info"
                className="text-white mt-2"
                style={{ width: "80%", margin: "0 auto" }}
              >
                THÊM NHÂN VIÊN
              </Button>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddStaffModal;
