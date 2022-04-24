import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Date from "./data.js";

function App() {
  const [appearl, setAppearl] = useState(Date);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">GSSHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="background">
        <h1>hello, world</h1>
        <p>welcome to sjoleee's GSHOP</p>
      </div>
      <div className="container">
        <div className="row">
          {appearl.map((params, idx) => {
            return <Product params={params} idx={idx} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  return (
    <div className="col-md-4">
      <img src={props.params.src}></img>
      <h4>{props.params.title}</h4>
      <p>{props.params.content}</p>
      <p>{props.params.price}</p>
    </div>
  );
}

export default App;
