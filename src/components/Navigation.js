import React from 'react';

import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { ADD_QUESTIONS, ADD_QUIZ, MAIN_PAGE } from '../constants';

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to={MAIN_PAGE}>
          Quiz App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={ADD_QUESTIONS}>
              Add Questions
            </Nav.Link>
            <Nav.Link as={Link} to={ADD_QUIZ}>
              Add Quiz
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
