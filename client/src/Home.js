import React, { Component } from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Home extends Component {

  state = {
  }

  constructor(props) {
    super(props);
    this.handleApplyClick = this.handleApplyClick.bind(this);
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleApplyClick() {
    this.props.history.push("/apply");
  }

  render() {
    let button = <ApplyButton onClick={this.handleApplyClick} />;
    return (
      <div> {button} </div>
    );
  }
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
