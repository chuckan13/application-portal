import React, { Component } from 'react';
import './App.css';
import Apply from './Apply.js';
import Admin from './Admin.js';
import Home from './Home.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = "Apply to e-club!"
  }

  render() {
    return (
    <Router>
      <div>

        <div>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a>Princeton E-Club</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
              <NavItem eventKey={2} pullRight>Login</NavItem>
            </Nav>
            <Nav>
              <NavDropdown eventKey={3} title="Teams" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Team 1</MenuItem>
                <MenuItem eventKey={3.2}>Team 2</MenuItem>
                <MenuItem eventKey={3.3}>Team 3</MenuItem>
              </NavDropdown>
            </Nav>
          </Navbar>
        </div>
      
        <Route exact path="/" component={Home} />
        <Route path="/apply" component={Apply} />
        <Route path="/admin" component={Admin} />
      </div> 
    </Router>
  );
  
  }
}

export default App;
