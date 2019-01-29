import React from 'react';
import '../css/ShortResponse.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class BasicInformation extends React.Component {

  state = {
    responseOne: '',
    responseTwo: '',
    responseThree: '',
    responseFour: '',
    responseFive: '',
    responseSix: ''
  }

  constructor(props, context) {
    super(props, context);
    this.updateResponseOne = this.updateResponseOne.bind(this);
    this.updateResponseTwo = this.updateResponseTwo.bind(this);
    this.updateResponseThree = this.updateResponseThree.bind(this);
    this.updateResponseFour = this.updateResponseFour.bind(this);
    this.updateResponseFive = this.updateResponseFive.bind(this);
    this.updateResponseSix = this.updateResponseSix.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  updateResponseOne(e) {
    this.setState({responseOne: e.target.value });
  }

  updateResponseTwo(e) {
    this.setState({responseTwo: e.target.value });
  }

  updateResponseThree(e) {
    this.setState({responseThree: e.target.value });
  }

  updateResponseFour(e) {
    this.setState({responseFour: e.target.value });
  }

  updateResponseFive(e) {
    this.setState({responseFive: e.target.value });
  }

  updateResponseSix(e) {
    this.setState({responseSix: e.target.value });
  }

  handleSubmitClick() {
    var r1 = this.state.responseOne;
    var r2 = this.state.responseTwo;
    var r3 = this.state.responseThree;
    var r4 = this.state.responseFour;
    var r5 = this.state.responseFive;
    var r6 = this.state.responseSix;
    this.props.handlePartThreeClick(r1, r2, r3, r4, r5, r6);
  }

  render() {
    return (
      <div>
      <div id="basic-info">
        <p> Part 3: Short Response </p>
      </div>
      <div id="questions">
        <p id="choice"> Choice 1: {this.props.state.teamOne} </p>
        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Why do you want to join this team?</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseOne}
              onChange={this.updateResponseOne}
            />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Describe your relevant experience.</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseTwo}
              onChange={this.updateResponseTwo}
            />
        </FormGroup>
      </div>
      <div id="questions">
        <p id="choice"> Choice 2: {this.props.state.teamTwo} </p>
        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Why do you want to join this team?</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseThree}
              onChange={this.updateResponseThree}
            />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Describe your relevant experience.</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseFour}
              onChange={this.updateResponseFour}
            />
        </FormGroup>
      </div>
      <div id="questions">
        <p id="choice"> Choice 3: {this.props.state.teamThree} </p>
        <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Why do you want to join this team?</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseFive}
              onChange={this.updateResponseFive}
            />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Describe your relevant experience.</ControlLabel>
            <FormControl
              componentClass="textarea"
              value={this.state.responseSix}
              onChange={this.updateResponseSix}
            />
        </FormGroup>
      </div>
      <SubmitButton onClick = {this.handleSubmitClick} />
      </div>
    );
  }
}

function SubmitButton(props) {
  return (
   <Row className="center-block text-center">
      <Col>
        <Button bsStyle="next" bsSize="large" onClick={props.onClick}>review for submission</Button>
      </Col>
   </Row>
  );
}

export default BasicInformation;