import React, { Component } from 'react';
import '../App/App.css';
import Apply from '../Apply.js';
import Admin from '../Admin.js';
import Home from '../Home/Home.js';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

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
          <Navbar id="nav">
            <Navbar.Header>
              <Navbar.Brand>
                <div id="logo"> </div>
                <a href="/" id="title">application portal</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">
                  <a href="/" id="about">about</a>
                </NavItem>
              </Nav>
            </Navbar.Collapse>
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
