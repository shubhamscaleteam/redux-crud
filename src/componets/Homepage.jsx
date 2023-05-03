import React from "react";

// image...!!
import venom from '../images/venom2.jpg';

// bootstrep...!!

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// react-router-dom ...!!

import {Link} from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand >
            {" "}
            <Link to="/" className="fw-bold text-decoration-none text-white">
              NAVBAR
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link
              to="/form"
              className="fw-bold text-decoration-none text-white me-2"
            >
              Form
            </Link>
            <Link
              to="/table"
              className="fw-bold text-decoration-none text-white me-2"
            >
              Subscribers
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <img src={venom} alt="venom" width='100%' className="mt-2" />

    </div>
  );
};

export default Homepage;
