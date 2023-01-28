import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaSearch, FaTv, FaFilm } from "react-icons/fa";
import "./Navbar.css";

const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      sticky="top"
      className="nav-bar"
    >
      <Container>
        <NavLink className="logo">Movie Hub</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto nav-links">
            <NavLink to="/" className="nav-text">
              <FaFilm className="icons" />
              Movies
            </NavLink>
            <NavLink to="/series" className="nav-text">
              <FaTv className="icons" />
              TV Series
            </NavLink>
            <NavLink to="/search" className="nav-text">
              <FaSearch className="icons" />
              Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
