import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './EditApplication.css'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class editApplication extends Component {


  state = {
    questionOne: "",
    questionTwo: ""
  };

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  updateState(e) {
    const name = e.target.name;
    this.setState({ 
      [name]: e.target.value 
    });
  }

  handleUpdateClick() {
    let q1 = this.state.questionOne;
    let q2 = this.state.questionTwo;
    this.props.updateQuestions(q1, q2);
  }

  render() {
    return (
      <div>
        <div>
          <p id="header"> Current Questions: </p>
        </div>
        <p id="information"> (first question should appear here)</p>
        <p id="information-last"> (second question should appear here)</p>
        <div>
          <p id="header">New Questions</p>
        </div>
        <div id="questions">
          <Question 
            name="questionOne" num="First"
            v={this.state.questionOne} onChange={this.updateState} 
          />
          <Question 
            name="questionTwo" num="Second"
            v={this.state.questionTwo} onChange={this.updateState} 
          />
          <Row className="center-block text-center">
            <Button 
              id="update-button"
              bsStyle="back" 
              bsSize="large" 
              onClick={this.handleUpdateClick}>update
            </Button>
          </Row>
        </div>
        <Row className="center-block text-center">
            <Button bsStyle="back" bsSize="large" onClick={this.props.backButton}>back</Button>
            </Row>
      </div>
    );
  }
}

function Question(props) {
  return (
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel id="long-form-label">{props.num} Question:</ControlLabel>
      <FormControl 
        id="long-form-answer"
        name={props.name}
        componentClass="textarea"
        value={props.v}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}

function BackButton(props) {
  return (
    <Col>
        <Button bsStyle="back" bsSize="large" onClick={props.onClick}>back</Button>
    </Col>
  );
}

export default editApplication;