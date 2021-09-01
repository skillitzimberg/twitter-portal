import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="search">Search</Nav.Link>
              <Nav.Link href="random">Random</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Navbar.Brand href="/">PERCH:</Navbar.Brand>
      </Navbar>
    </header>
  );
};
export default Header;
