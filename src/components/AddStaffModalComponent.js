import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

const AddStaffModal = props => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


  return (
    <div>
      <Button color="info" className="btn_green mt-2" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>
          THÊM NHÂN VIÊN
        </ModalHeader>
        <ModalBody>
          <LocalForm>
            <Row className="form-group mt-2">
              <Label htmlFor="name" md={3}>
                Họ và tên
              </Label>
              <Col>
                <Control.text
                  model=".name"
                  id="name"
                  name="name"
                  placeholder="Nhập họ và tên ... "
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group mt-2">
              <Label htmlFor="doB" md={3}>
                Ngày sinh
              </Label>
              <Col>
                <Control.text
                  model=".doB"
                  id="doB"
                  name="doB"
                  placeholder="Nhập ngày tháng năm sinh  ... "
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group mt-2">
              <Label htmlFor="departments" md={3}>
                Phòng ban
              </Label>
              <Col>
                <Control.select
                  model=".departments"
                  id="departments"
                  name="departments"
                  className="form-control"
                >
                  <option value="">--Chọn phòng ban--</option>
                  <option value="Sale">Sale</option>
                  <option value="HR">HR</option>
                  <option value="Marketing">Marketing</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                </Control.select>
              </Col>
            </Row>
            <Row className="form-group mt-2">
              <Label htmlFor="annualLeave" md={3}>
                Số ngày nghỉ còn lại
              </Label>
              <Col>
                <Control.text
                  model=".annualLeave"
                  id="annualLeave"
                  name="annualLeave"
                  placeholder="Nhập số ngày nghỉ còn lại ... "
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group mt-2">
              <Label htmlFor="overTime" md={3}>
                Số ngày làm thêm
              </Label>
              <Col>
                <Control.text
                  model=".overTime"
                  id="overTime"
                  name="overTime"
                  placeholder="Nhập số ngày làm thêm ... "
                  className="form-control"
                />
              </Col>
            </Row>
            <Row className="form-group mt-2">
              <Label htmlFor="image" md={3}>
                Ảnh đại diện
              </Label>
              <Col>
                <Control.file
                  model=".image"
                  id="image"
                  name="image"
                  className="form-control"
                />
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
        <ModalFooter>
          <Button color="info" className="text-white" onClick={toggle}>
            Thêm nhân viên
          </Button>
          <Button color="secondary" onClick={toggle}>
            Hủy
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddStaffModal;
