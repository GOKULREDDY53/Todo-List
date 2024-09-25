import React, { useEffect, useState } from "react";
import { Card, Button, Col, Row, Pagination } from "react-bootstrap";
import ModalUpdateToDo from "./components/modal.updateToDo.js";
import ModalToDo from "./components/modal.todo.js";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "./utils/Handle.Api.js";

function TodoApp() {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  // Pagination Logic
  const ITEMS_PER_PAGE = 8;
  const DISPLAYED_PAGES = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber - 1);
  };

  const pageCount = Math.ceil(toDo.length / ITEMS_PER_PAGE);
  const offset = currentPage * ITEMS_PER_PAGE;

  const firstPage = Math.max(0, currentPage - Math.floor(DISPLAYED_PAGES / 2));
  const lastPage = Math.min(firstPage + DISPLAYED_PAGES - 1, pageCount - 1);
  const pages = Array.from(
    { length: lastPage - firstPage + 1 },
    (_, index) => firstPage + index
  );

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="Modal text-center">
          <ModalToDo onSave={addToDo} setToDo={setToDo} />
        </div>

        <div className="list" style={{ gap: "10px" }}>
          <Row>
            {toDo.slice(offset, offset + ITEMS_PER_PAGE).map((todo) => (
              <Col xs={12} md={3} key={todo._id}>
                <Card
                  border="dark"
                  style={{
                    backgroundColor: "#F9FAF4",
                    marginBottom: "10px",
                    width: "270px",
                    height: "300px",
                  }}
                >
                  <Card.Body>
                    <Card.Title>Title: {todo.Title}</Card.Title>
                    <Card.Text style={{ fontSize: "13px" }}>
                      Description: {todo.Description}
                    </Card.Text>
                    <Card.Text>Priority: {todo.Priority}</Card.Text>
                    <Card.Text>
                      Date:{" "}
                      {new Date(todo.Date).toLocaleDateString("en-US", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </Card.Text>
                    <Card.Text>Repeat: {todo.Reapeat}</Card.Text>
                    <Card.Text>Status: {todo.Status}</Card.Text>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "10px",
                      }}
                    >
                      <ModalUpdateToDo
                        onUpdate={updateToDo}
                        setToDo={setToDo}
                        todo={todo}
                      />
                      <Button
                        variant="danger"
                        onClick={() => deleteToDo(todo, setToDo)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Pagination>
              <Pagination.First onClick={() => handlePageChange(1)} />
              <Pagination.Prev onClick={() => handlePageChange(currentPage)} />
              {firstPage > 0 && <Pagination.Ellipsis />}
              {pages.map((page) => (
                <Pagination.Item
                  key={page}
                  active={page === currentPage}
                  onClick={() => handlePageChange(page + 1)}
                >
                  {page + 1}
                </Pagination.Item>
              ))}
              {lastPage < pageCount - 1 && <Pagination.Ellipsis />}
              <Pagination.Next
                onClick={() => handlePageChange(currentPage + 2)}
              />
              <Pagination.Last onClick={() => handlePageChange(pageCount)} />
            </Pagination>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoApp;
