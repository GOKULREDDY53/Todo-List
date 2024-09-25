import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

export default function SignOutModal(props) {
  const userName = localStorage.getItem("firstName");

  const handleClose = () => {
    props.onHide();
  };

  const handleSignOut = () => {
    localStorage.clear();
    window.dispatchEvent(new Event("tokenUpdated"));
    handleClose();
    window.location.reload();
  };

  return (
    <Modal
      {...props}
      onHide={handleClose}
      size="lg"
      aria-labelledby="modal-signout"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-signout">Sign Out</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{userName}! Do you really want to Sign Out?</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleSignOut}>
          Sign Out
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
