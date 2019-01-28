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

  constructor(props, context) {
    super(props, context);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    var user = axios.get('/api/users/' + this.props.user)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    console.log(user);
    this.state = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      class: user.class,
      concentration: user.concentration,
      gender: user.gender,
      teamOne: user.teamOne,
      teamTwo: user.teamTwo,
      teamThree: user.teamThree
    }
  }

  handleSubmitClick() {
  }

  render() {
    return (
      <div>
      <div id="basic-info">
        <p> Basic Information: </p>
        <p> Name: </p>
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
        <Button bsStyle="next" bsSize="large" onClick={props.onClick}>submit</Button>
      </Col>
   </Row>
  );
}

export default Review;