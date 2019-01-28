import React from 'react';
import '../css/BasicInformation.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import axios from 'axios';

class Review extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    concentration: '',
    gender: ''
  }

  constructor(props, context) {
    super(props, context);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    axios.post('/api/users', {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      class: this.state.class,
      concentration: this.state.concentration,
      gender: this.state.gender
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    this.props.handlePartOneClick();
  }

  render() {
    return (
      <div>
      <div id="basic-info">
        <p> Basic Information: </p>
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
        <Button bsStyle="next" bsSize="large" onClick={props.onClick}>submit</Button>
      </Col>
   </Row>
  );
}

export default Review;