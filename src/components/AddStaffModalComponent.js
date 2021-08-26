import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Label
} from "reactstrap";

const AddStaffModal = (props) => {
  const { buttonLabel, className } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" className="btn_green mt-2" onClick={toggle}>
        {buttonLabel}
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className} size="lg">
        <ModalHeader toggle={toggle}>THÊM NHÂN VIÊN</ModalHeader>
        <ModalBody></ModalBody>
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
