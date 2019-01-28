import React from 'react';
import '../css/BasicInformation.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import axios from 'axios';

class BasicInformation extends React.Component {

  state = {
    questionOne: '',
    questionTwo: '',
    questionThree: '',
    questionFour: '',
    questionFive: '',
    questionSix: ''
  }

  constructor(props, context) {
    super(props, context);
    this.updateQuestionOne = this.updateQuestionOne.bind(this);
    this.updateQuestionTwo = this.updateQuestionTwo.bind(this);
    this.updateQuestionThree = this.updateQuestionThree.bind(this);
    this.updateQuestionFour = this.updateQuestionFour.bind(this);
    this.updateQuestionFive = this.updateQuestionFive.bind(this);
    this.updateQuestionSix = this.updateQuestionSix.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  updateQuestionOne(e) {
    this.setState({questionOne: e.target.value });
  }

  updateQuestionTwo(e) {
    this.setState({questionTwo: e.target.value });
  }

  updateQuestionThree(e) {
    this.setState({questionThree: e.target.value });
  }

  updateQuestionFour(e) {
    this.setState({questionFour: e.target.value });
  }

  updateQuestionFive(e) {
    this.setState({questionFive: e.target.value });
  }

  updateQuestionSix(e) {
    this.setState({questionSix: e.target.value });
  }

  handleSubmitClick() {
    axios.post('/api/users', {
      questionOne: this.state.questionOne,
      questionTwo: this.state.questionTwo,
      questionThree: this.state.questionThree,
      questionFour: this.state.questionFour,
      questionFive: this.state.questionFive,
      questionSix: this.state.questionSix
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.handlePartThreeClick();
  }

  render() {
    return (
      <div>
      <div id="basic-info">
        <p> Part 3: Short Response </p>
      </div>
      <Row>
        <Col>
          <form>
          <FormGroup controlId="formBasicText">
              <ControlLabel>First Name:</ControlLabel>
              <FormControl
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.updateFirstName}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Last Name:</ControlLabel>
              <FormControl
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.updateLastName}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Email:</ControlLabel>
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateEmail}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Class Year:</ControlLabel>
              <FormControl
                type="text"
                placeholder="Class Year"
                value={this.state.class}
                onChange={this.updateClass}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Concentration:</ControlLabel>
              <FormControl
                type="text"
                placeholder="Concentration"
                value={this.state.concentration}
                onChange={this.updateConcentration}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <ControlLabel>Gender:</ControlLabel>
              <FormControl
                type="text"
                placeholder="Gender"
                value={this.state.gender}
                onChange={this.updateGender}
              />
            </FormGroup>
          </form>
        </Col>
      </Row>
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