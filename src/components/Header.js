import React from "react";
import logo from "./../assets/images/logo.jpg";
import { Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Header() {
  return (
    <>
      <header>
        <Navbar bg="pt-0 pb-0" expand="lg" sticky="top">
          <Navbar.Brand href="#home" className="pb-0">
            <img src={logo} className="App-logo" alt="Cykelkaelderen-logo" />            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
          
            <Nav>                     
              <Nav.Link href="#Home">Forside</Nav.Link>
              <Nav.Link href="#Services">Services</Nav.Link>
              <Nav.Link href="#Visit-Us">Besøg Os</Nav.Link>
              <Nav.Link href="#About-Us">Om Os</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
