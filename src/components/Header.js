import React from "react";
import logo from "./../assets/images/logo.jpg";
import { Navbar, Nav} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
// import Iframe from "react-iframe";

function App() {
  return (
    <>
      <header>
        <Navbar bg="pt-0 pb-0" expand="lg" sticky="top">
          <Navbar.Brand href="#home" className="pb-0">
            <img src={logo} className="App-logo" alt="Cykelkaelderen-logo" />
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          {/* <p>Cykelkaelderen-Bicycle Shop</p> */}
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link href="#home">Forside</Nav.Link>
              <Nav.Link href="#Our-Products">Service</Nav.Link>
              <Nav.Link href="#Visit-Us">Visit Us</Nav.Link>
              <Nav.Link href="#About-Us">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>

    </>
  );
}

export default App;