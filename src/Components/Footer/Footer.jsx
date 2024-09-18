import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      style={{
        backgroundColor: "#ffff",
        width: '100%',
        height: '60px', 
        padding: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'relative', // Или absolute, если нужно
        bottom: 0,
      }}
    >
      <Container>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex justify-content-center"
        >
          <Nav className="d-flex align-items-center pt-3 pb-3">
            <Nav.Link
              as={Link}
              to="/help"
              style={{ color: "#23240f", marginRight: "15px" }}
            >
              Help
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contacts"
              style={{ color: "#23240f", marginRight: "15px" }}
            >
              Contacts
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blog"
              style={{ color: "#23240f", marginRight: "15px" }}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Footer;
