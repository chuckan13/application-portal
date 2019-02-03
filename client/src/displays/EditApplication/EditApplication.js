import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
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
        <div id="title">
          <p>Edit Application</p>
        </div>
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
            bsStyle="admin" 
            bsSize="large" 
            onClick={this.handleUpdateClick}>update</Button>
          <BackButton onClick = {this.props.backButton} />
        </Row>
      </div>
    );
  }
}

function Question(props) {
  return (
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>{props.num} Question:</ControlLabel>
      <FormControl
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
    <Row className="center-block text-center">
      <div>
        <Button bsStyle="admin" bsSize="large" onClick={props.onClick}>back</Button>
      </div>
    </Row>
  );
}

export default editApplication;