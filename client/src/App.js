import React, { Component } from 'react';
import './App.css';
import Apply from './Apply.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class App extends Component {

  state = {
    home: 'Apply today!',
  }

  constructor(props) {
    super(props);
    this.state = "Apply to e-club!"
  }

  render() {
    return (
    <Router>
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Princeton E-Club</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={2} pullRight>Login</NavItem>
            <NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Team 1</MenuItem>
              <MenuItem eventKey={3.2}>Team 2</MenuItem>
              <MenuItem eventKey={3.3}>Team 3</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>

        <Button bsStyle="primary" bsSize="large" id="login-button">Log In</Button>

        <Route path="/apply" component={Apply} />
        <Route path="/admin" component={Admin} />
      </div> 
    </Router>
  );
  
  }
}

export default App;
