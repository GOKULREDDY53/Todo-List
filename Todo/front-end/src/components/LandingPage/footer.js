import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-5 bg-dark">
      <Container className="d-flex flex-wrap justify-content-between align-items-center px-4">
        <Link
          className="animate pointer no-underline"
          to=""
          onClick={handleScrollToTop}
        >
          <h1
            className="font15 extraBold whiteColor"
            style={{ marginLeft: "15px" }}
          >
            ToDo App
          </h1>
        </Link>
        <p className="text-center text-white">
          &copy; {getCurrentYear()} -{" "}
          <span className="blueColor font14">ToDo App</span> All Rights Reserved
        </p>
        <Link
          className="whiteColor font14 no-underline"
          to=""
          onClick={handleScrollToTop}
        >
          Back to Top
        </Link>
      </Container>
    </footer>
  );
}
