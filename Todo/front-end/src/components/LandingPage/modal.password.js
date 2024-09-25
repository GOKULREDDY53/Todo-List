import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function PasswordModal(props) {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordR, setNewPasswordR] = useState("");
  const [error, setError] = useState("");
  const email = localStorage.getItem("email");

  const handleClose = () => {
    setError("");
    setOldPassword("");
    setNewPassword("");
    setNewPasswordR("");
    props.onHide();
  };

  const getApiConfig = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Un-Authorized attempt: Please sign-in first!");
      return null;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    return config;
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    if (newPassword !== newPasswordR) {
      setError("New Passwords do not match");
      return;
    }

    const passwordData = {
      email: email,
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    const url = "http://localhost:4501/user/update";

    try {
      const config = getApiConfig();

      if (!config) {
        return;
      }
      const response = await axios.put(url, passwordData, config);
      console.log(response.data.message);
      handleClose();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error occurred during update:", error);
      }
    }
  };

  return (
    <Modal
      {...props}
      onHide={handleClose}
      size="lg"
      aria-labelledby="modal-signup"
      centered
    >
      <form onSubmit={handlePassword}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-signup">Change Password!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingOldPassword"
            label="Old Password"
            className="mb-3"
          >
            <Form.Control
              type="Password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </FloatingLabel>
          <Row className="g-2 mb-3">
            <Col md>
              <FloatingLabel controlId="newPassword" label="New Password">
                <Form.Control
                  type="Password"
                  placeholder="New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel
                controlId="newPasswordR"
                label="Repeat New Password"
              >
                <Form.Control
                  type="Password"
                  placeholder="Repeat New Password"
                  value={newPasswordR}
                  onChange={(e) => setNewPasswordR(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <p className="font12">
            ** The password must be at least 8 digit & contain one lowercase,
            uppercase, number & symbol.
          </p>
          {error && <div className="error_msg">{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Update</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
