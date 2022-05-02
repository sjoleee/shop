import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch, useHistory } from "react-router-dom";

function App() {
  const [appearl, setAppearl] = useState(Data);

  return (
    <div className="App">
      <Navbar className="nav" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">SANGJO HOMME</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Online Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">New</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Top</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Bottom</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Route exact path="/">
        <div className="background">
          <h1>SANGJO HOMME</h1>
          <p>PARIS</p>
        </div>
        <div className="container2">
          <div className="row">
            {appearl.map((params, idx) => {
              return (
                <Product
                  params={params}
                  idx={idx}
                  appearl={appearl}
                  key={idx}
                />
              );
            })}
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail appearl={appearl} />
      </Route>
    </div>
  );
}

function Product(props) {
  let history = useHistory();
  let likeArr = [];
  for (let x of props.appearl) {
    likeArr.push(false);
  }
  const [like, setLike] = useState(likeArr);
  return (
    <div className="col-md-4">
      <div className="imgdiv">
        <img
          src={props.params.src}
          onClick={() => {
            history.push(`/detail/${props.idx}`);
          }}
        ></img>
        <img
          className={like[props.idx] ? "like" : "unlike"}
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
