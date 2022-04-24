import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Date from "./data.js";

function App() {
  const [appearl, setAppearl] = useState(Date);

  return (
    <div className="App">
      <Navbar className="nav" bg="light" expand="lg">
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
        <h1>SANGJO HOMME</h1>
        <p>PARIS</p>
      </div>
      <div className="container2">
        <div className="row">
          {appearl.map((params, idx) => {
            return <Product params={params} idx={idx} appearl={appearl} />;
          })}
        </div>
      </div>
    </div>
  );
}

function Product(props) {
  let likeArr = [];
  for (let x of props.appearl) {
    likeArr.push(false);
  }
  const [like, setLike] = useState(likeArr);
  return (
    <div className="col-md-4">
      <div className="imgdiv">
        <img src={props.params.src}></img>
        <img
          src="https://image.msscdn.net/skin/musinsa/images/icon_like_small_on.png"
          onClick={() => {
            let likeCopy = [...like];
            likeCopy[props.idx] = !like[props.idx];
            setLike(likeCopy);
          }}
        ></img>
      </div>

      <p className="content">{props.params.content}</p>
      <p className="title">{props.params.title}</p>
      <p className="price">{props.params.price}</p>
    </div>
  );
}

export default App;
