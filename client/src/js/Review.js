import React from 'react';
import '../css/Review.css';
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
  }

  handleSubmitClick() {
    this.props.handlePartFourClick();
  }

  render() {
    return (
      <div>
      <div id="basic-info">
        <p> Basic Information: </p>
        <p id="information"> First Name: {this.props.state.firstName}</p>
        <p id="information"> Last Name: {this.props.state.lastName}</p>
        <p id="information"> Email: {this.props.state.email}</p>
        <p id="information"> Class: {this.props.state.class}</p>
        <p id="information"> Concentration: {this.props.state.concentration}</p>
        <p id="information"> Gender: {this.props.state.gender}</p>
      </div>
      <div id="basic-info">
        <p> Short Response Questions: </p>
        <p id="information"> Choice 1: {this.props.state.teamOne}</p>
        <p id="information"> {this.props.state.responseOne}</p>
        <p id="information"> {this.props.state.responseTwo}</p>
        <p id="information"> Choice 2: {this.props.state.teamTwo}</p>
        <p id="information"> {this.props.state.responseThree}</p>
        <p id="information"> {this.props.state.responseFour}</p>
        <p id="information"> Choice 3: {this.props.state.teamThree}</p>
        <p id="information"> {this.props.state.responseFive}</p>
        <p id="information"> {this.props.state.responseSix}</p>
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