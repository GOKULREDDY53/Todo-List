import React, { useState } from "react";
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
    console.log("Sign-in form submitted"); // Debugging log

    const signInData = {
      email,
      password,
    };

    console.log("Sending sign-in data: ", signInData); // Debugging log

    try {
      const url = "http://localhost:4501/user/signin";
      const response = await axios.post(url, signInData);
      console.log("Sign-in success:", response.data); // Debugging log

      const { token, firstName, lastName, email: userEmail } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("email", userEmail);

      handleClose();
      window.location.reload(); // Reload the app after sign-in
    } catch (error) {
      console.error("Error occurred during sign in:", error);
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError("Sign-in failed. Please try again.");
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
