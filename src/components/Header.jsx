import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Container} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { Link } from "react-router-dom";

const Header = () => {
 return(
  <>
  
  <Navbar sticky="top" collapseOnSelect expand="sm" bg="light" variant="light">
  <Container>
          <Navbar.Brand href="#home"><img src="./logo192.png" width="50px"/></Navbar.Brand>
        </Container>
  <Navbar.Toggle
    aria-controls="navbarScroll"
    data-bs-target="#navbarScroll"
  />
  <Navbar.Collapse id="navbarScroll" className="mr-5">
    <Nav className="flex-grow-1 justify-content-evenly">
      <NavLink eventKey="1" as={Link} to="/">
        Home
      </NavLink>
      <NavLink eventKey="2" as={Link} to="/">
        Products
      </NavLink>
      <NavLink eventKey="3" as={Link} to="/">
        About
      </NavLink>
      <NavLink eventKey="4" as={Link} to="/">
        Conatct
      </NavLink>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</>
 );
}

export default Header;
