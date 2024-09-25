import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Link } from "react-scroll";
import SignOutModal from "./modal.signout";
import DeleteUserModal from "./modal.DeleteUser";
import ProfileModal from "./modal.profile";
import PasswordModal from "./modal.password";
import BulkUploadModal from "./modal.bulkUpload";

export default function ToDoNavbar() {
  const navbarShadow = {
    boxShadow: "0 2px 20px rgba(0, 0, 0, 1)",
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [modalSignOut, setModalSignOut] = React.useState(false);
  const [modalDeleteUser, setModalDeleteUser] = React.useState(false);
  const [modalProfile, setModalProfile] = React.useState(false);
  const [modalPassword, setModalPassword] = React.useState(false);
  const [modalBulkUpload, setModalBulkUpload] = React.useState(false);
  const userName = localStorage.getItem("firstName");

  return (
    <Navbar bg="dark" data-bs-theme="dark" sticky="top" style={navbarShadow}>
      <Container className="d-flex flex-wrap justify-content-between align-items-center px-4">
        <Navbar.Brand>
          <Link
            to=""
            onClick={handleScrollToTop}
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
        <NavDropdown
          title={`Signed in as: ${userName}`}
          id="basic-nav-dropdown"
          className="text-white"
        >
          <NavDropdown.Item
            className="text-white"
            onClick={() => setModalProfile(true)}
          >
            Profile
          </NavDropdown.Item>
          <ProfileModal
            show={modalProfile}
            onHide={() => setModalProfile(false)}
          />
          <NavDropdown.Item
            className="text-white"
            onClick={() => setModalPassword(true)}
          >
            Change Password
          </NavDropdown.Item>
          <PasswordModal
            show={modalPassword}
            onHide={() => setModalPassword(false)}
          />
          <NavDropdown.Item
            className="text-white"
            onClick={() => setModalBulkUpload(true)}
          >
            Upload data
          </NavDropdown.Item>
          <BulkUploadModal
            show={modalBulkUpload}
            onHide={() => setModalBulkUpload(false)}
          />
          <NavDropdown.Divider />
          <NavDropdown.Item
            style={{ color: "red" }}
            onClick={() => setModalDeleteUser(true)}
          >
            Delete Account
          </NavDropdown.Item>
          <DeleteUserModal
            show={modalDeleteUser}
            onHide={() => setModalDeleteUser(false)}
          />
        </NavDropdown>
        <Button
          variant="danger"
          style={{
            display: "flex",
            justifyContent: "center",
            marginLeft: "10px",
          }}
          onClick={() => setModalSignOut(true)}
        >
          Sign Out
        </Button>
        <SignOutModal
          show={modalSignOut}
          onHide={() => setModalSignOut(false)}
        />
      </Container>
    </Navbar>
  );
}
