import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch, FaTv, FaFilm } from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="logo">
          Movie Hub
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="nav-text">
              <FaFilm className="icons" />
              Movies
            </Nav.Link>
            <Nav.Link href="/series" className="nav-text">
              <FaTv className="icons" />
              TV Series
            </Nav.Link>
            <Nav.Link href="/search" className="nav-text">
              <FaSearch className="icons" />
              Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
