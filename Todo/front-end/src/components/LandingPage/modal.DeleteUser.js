import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./styles.css";

export default function DeleteUserModal(props) {
  const userName = localStorage.getItem("firstName");
  const email = localStorage.getItem("email");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setPassword("");
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

  const handleDeleteUser = async (e) => {
    e.preventDefault();
    const deleteUser = {
      email: email,
      password: password,
    };

    const url = "http://localhost:4501/user/delete";

    try {
      const config = getApiConfig();

      if (!config) {
        return;
      }
      await axios.delete(url, { ...config, data: deleteUser }).then(() => {
        localStorage.clear();
        handleClose();
        window.location.reload();
      });
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        console.error("Error occurred during sign in:", error);
      }
    }
  };

  return (
    <Modal
      {...props}
      onHide={handleClose}
      size="lg"
      aria-labelledby="modal-DeleteUser"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-DeleteUser">Delete Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{userName}! Do you really want to Delete account?</h5>
        <FloatingLabel
          controlId="floatingPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingLabel>
        {error && <div className="error_msg">{error}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleDeleteUser}>
          Delete
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
