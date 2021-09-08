import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Label
} from "reactstrap";
import { LocalForm, Control, Errors } from "react-redux-form";

export default function CommetForm(props) {
  const { buttonLabel, className, dishId, postComment } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const maxlength = (len) => (val) => !val || val.length <= len;
  const minlength = (len) => (val) => val && val.length >= len;

  const handleSubmit = (values) => {
    postComment(dishId, values.rating, values.author, values.comment);
  };

  return (
    <div>
      <Button onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
          <LocalForm
            className="form-control"
            onSubmit={(values) => handleSubmit(values)}
          >
            <Row>
              <Label htmlFor="rating" md={12}>
                Rating
              </Label>
              <Col md={12}>
                <Control
                  type="number"
                  model=".rating"
                  id="rating"
                  name="rating"
                  className="form-control"
                  defaultValue="1"
                />
              </Col>
            </Row>
            <Row>
              <Label htmlFor="name" md={12}>
                Your Name
              </Label>
              <Col md={12}>
                <Control.text
                  type="text"
                  model=".author"
                  id="author"
                  name="author"
                  className="form-control"
                  placeholder="Your name"
                  validators={{
                    maxlength: maxlength(15),
                    minlength: minlength(3)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".author"
                  show="touched"
                  messages={{
                    maxlength: "Must be 15 characters or less",
                    minlength: "Must be greater than 2 characters"
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Label htmlFor="comment" md={12}>
                Commment
              </Label>
              <Col md={12}>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  className="form-control"
                />
              </Col>
            </Row>
            <Row>
              <Col md={12} className="mt-2">
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}
