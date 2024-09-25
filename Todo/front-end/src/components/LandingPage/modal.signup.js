import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./styles.css";

export default function SignUpModal(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setPasswordR("");
    props.onHide(); // Ensure modal closes
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign-up form submitted"); // Debugging log

    if (password !== passwordR) {
      setError("Passwords do not match");
      return;
    }

    const signUpData = {
      firstName,
      lastName,
      email,
      password,
    };

    console.log("Sending sign-up data: ", signUpData); // Debugging log

    try {
      const url = "http://localhost:4501/user/signup";
      const response = await axios.post(url, signUpData);
      console.log("Sign-up success:", response.data.message); // Debugging log

      handleClose();
    } catch (error) {
      console.error("Error occurred during sign up:", error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Sign-up failed. Please try again.");
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
      <form onSubmit={handleSignUp}>
        <Modal.Header closeButton>
          <Modal.Title id="modal-signup">Register here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="g-2 mb-3">
            <Col md>
              <FloatingLabel controlId="firstName" label="First Name">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col md>
              <FloatingLabel controlId="lastName" label="Last Name">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>
          <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPasswordR" label="Repeat Password" className="mb-3">
            <Form.Control
              type="password"
              placeholder="Repeat Password"
              value={passwordR}
              onChange={(e) => setPasswordR(e.target.value)}
            />
          </FloatingLabel>
          {error && <div className="error_msg">{error}</div>}
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Sign Up</Button>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}
