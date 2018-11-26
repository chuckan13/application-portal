import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Apply extends Component {

  state = {
    isSubmitted: false,
  }

  constructor(props) {
    super(props);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    this.setState({isSubmitted: true});
  }

  render() {
    return (
      <div>
        <Form />
        <SubmitButton onClick={this.handleSubmitClick} />
      </div>
    );
  }
}

function SubmitButton(props) {
  return (
   <Row className="center-block text-center">
      <Col>
        <Button bsStyle="primary" bsSize="large" onClick={props.onClick}>Submit</Button>
      </Col>
   </Row>
  );
}

export default Apply;
