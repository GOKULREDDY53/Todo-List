import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import SignUpModal from "./modal.signup";
import SignInModal from "./modal.signin";

export default function TopNavbar() {
  const navbarShadow = {
    boxShadow: "0 2px 20px rgba(0, 0, 0, 1)",
  };
  const [modalSignUp, setModalSignUp] = React.useState(false);
  const [modalSignIn, setModalSignIn] = React.useState(false);

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" style={navbarShadow}>
      <Container>
        <Navbar.Brand>
          <Link
            to="home"
            smooth={true}
            spy={true}
            offset={-80}
            className="text-white"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            ToDo App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="features"
              smooth={true}
              spy={true}
              offset={-80}
              className="text-white"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Features
            </Link>

            <Link
              to="services"
              smooth={true}
              spy={true}
              offset={-80}
              className="text-white"
              style={{
                textDecoration: "none",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Services
            </Link>
          </Nav>
          <Nav>
            <Button
              variant="primary"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              onClick={() => setModalSignIn(true)}
            >
              Sign In
            </Button>
            <SignInModal
              show={modalSignIn}
              onHide={() => setModalSignIn(false)}
            />

            <Button
              variant="primary"
              style={{
                display: "flex",
                justifyContent: "center",
                marginLeft: "10px",
              }}
              onClick={() => setModalSignUp(true)}
            >
              Register
            </Button>
            <SignUpModal
              show={modalSignUp}
              onHide={() => setModalSignUp(false)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
