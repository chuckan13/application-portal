import React, { Component } from 'react';
import './App.css';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import { MenuItem } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link} from "react-router-dom";

class Home extends Component {

  state = {
    isLoggedIn: false,
  }

  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleApplyClick = this.handleApplyClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
    console.log(this.state.isLoggedIn);
  }

  handleApplyClick() {
    this.props.history.push("/apply");
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <ApplyButton onClick={this.handleApplyClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div> {button} </div>
    );
  }
}

function LoginButton(props) {
  return (
   <Row className="center-block text-center">
      <Col>
        <Button bsStyle="primary" bsSize="large" onClick={props.onClick}>Log In</Button>
      </Col>
   </Row>
  );
}

function ApplyButton(props) {
  return (
    <Row className="center-block text-center">
      <Col>
        <Button bsStyle="primary" bsSize="large" onClick={props.onClick}>Apply</Button>
      </Col>
    </Row>
  );
}

export default Home;
