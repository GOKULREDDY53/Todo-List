import React from "react";
import { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import "./styles.css";

export default function SignInModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setEmail("");
    setPassword("");
    props.onHide();
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const signInData = {
      email: email,
      password: password,
    };

    try {
      const url = "http://localhost:4501/user/signin";
      const response = await axios.post(url, signInData);
      const { token, firstName, lastName, email } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", email);
      handleClose();
      window.location.reload();
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
      aria-labelledby="modal-signin"
      centered
    >
      <form onSubmit={handleSignIn}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-signin">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
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
          <Button type="submit">Sign In</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
