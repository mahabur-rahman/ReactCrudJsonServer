import React from "react";
// react bootstrap
import { Navbar, Container, Nav } from "react-bootstrap";
// link
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <>
      <section id="header">
        <Navbar bg="light" expand="lg">
          <Container>
            <Link to="/">
              <Navbar.Brand>React</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link mx-3">
                  About
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav>
              <Link to="/user/create" className="nav-link bg-dark text-light">
                Add User
              </Link>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    </>
  );
};

export default Test;
