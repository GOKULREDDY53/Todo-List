import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./styles.css";
import { bulkUploadToDo } from "../../utils/Handle.Api";

export default function BulkUploadToDo(props) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleClose = () => {
    setError("");
    setFile(null);
    props.onHide();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a .CSV file to upload");
      return;
    }

    bulkUploadToDo(
      file,
      (data) => {
        console.log("Bulk upload successful:", data);
        handleClose();
        window.location.reload();
      },
      (error) => {
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
    );
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
        <Modal.Title id="modal-BulkUpload">Bulk Upload ToDo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Please select a '.csv' file only.</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
        {error && <div className="error_msg">{error}</div>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
        <Button onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
