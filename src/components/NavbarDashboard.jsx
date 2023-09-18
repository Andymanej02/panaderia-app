import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavbarDashboard = () => {
  const usuario = localStorage.getItem("username");
  return (
    <div className="custom-navbar" style={{ backgroundColor: "#fff", display: "flex", alignItems: "center" }}>
      <Container>
        <h1 style={{ color: "#000" }}>{usuario}</h1>
        <Nav className="ml-auto" style={{ color: "#000" }}>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </div>
  );
};

export default NavbarDashboard;




