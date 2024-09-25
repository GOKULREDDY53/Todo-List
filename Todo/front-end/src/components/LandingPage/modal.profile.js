import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function ProfileModal(props) {
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const email = localStorage.getItem("email");
  const todos = localStorage.getItem("todos");

  const handleClose = () => {
    props.onHide();
  };

  return (
    <Modal
      {...props}
      onHide={handleClose}
      size="lg"
      aria-labelledby="modal-Profile"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-Profile">Profile Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="g-2 mb-3">
          <Col md>
            <FloatingLabel controlId="floatingFirstName" label="First Name">
              <Form.Control
                type="text"
                placeholder="First Name"
                readOnly
                defaultValue={firstName}
              />
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel controlId="floatingLastName" label="Last Name">
              <Form.Control
                type="text"
                placeholder="Last Name"
                readOnly
                defaultValue={lastName}
              />
            </FloatingLabel>
          </Col>
        </Row>
        <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Email"
            readOnly
            defaultValue={email}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingTodos"
          label="Total ToDo Items"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Total ToDo Items"
            readOnly
            defaultValue={todos}
          />
        </FloatingLabel>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
