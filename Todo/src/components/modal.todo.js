import React, { useState } from "react";
import { Modal, Button, Form, FloatingLabel } from "react-bootstrap";

function ModalToDo({ onSave, setToDo }) {
  const [show, setShow] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [priorityValue, setPriorityValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [repeatValue, setRepeatValue] = useState("");
  const [statusValue, setStatusValue] = useState("");

  const handleClose = () => {
    setShow(false);
    setTitleValue("");
    setDescriptionValue("");
    setPriorityValue("");
    setDateValue("");
    setRepeatValue("");
    setStatusValue("");
  };
  const handleShow = () => setShow(true);
  const handleAdd = () => {
    const todo = {
      Title: titleValue,
      Description: descriptionValue,
      Priority: priorityValue,
      Date: dateValue,
      Reapeat: repeatValue,
      Status: statusValue,
    };

    onSave(todo, setToDo);
    handleClose();
  };

  return (
    <>
      <Button
        variant="dark"
        onClick={handleShow}
        style={{ marginBottom: "10px" }}
      >
        Add ToDo
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a new ToDo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Title:"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Add Title..."
                name="title"
                value={titleValue}
                onChange={(e) => setTitleValue(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Description:"
              className="mb-3"
            >
              <Form.Control
                type="text"
                placeholder="Add Description..."
                name="description"
                value={descriptionValue}
                onChange={(e) => setDescriptionValue(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Priority:"
              className="mb-3"
            >
              <Form.Select
                aria-label="Select Priority:"
                name="priority"
                value={priorityValue}
                onChange={(e) => setPriorityValue(e.target.value)}
              >
                <option>Select Priority:</option>
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingInput"
              label="Date:"
              className="mb-3"
            >
              <Form.Control
                type="Date"
                placeholder="Add Date..."
                name="date"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Repeat:"
              className="mb-3"
            >
              <Form.Select
                aria-label="Select Repeat:"
                name="repeat"
                value={repeatValue}
                onChange={(e) => setRepeatValue(e.target.value)}
              >
                <option>Select Repeat:</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </FloatingLabel>
          </div>
          <div>
            <FloatingLabel
              controlId="floatingSelect"
              label="Select Status:"
              className="mb-3"
            >
              <Form.Select
                aria-label="Select Status:"
                name="status"
                value={statusValue}
                onChange={(e) => setStatusValue(e.target.value)}
              >
                <option>Select Status:</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick={handleAdd}>
            Add ToDo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalToDo;
