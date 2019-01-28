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

    state = {
      firstName: '',
      lastName: '',
      email: '',
      class: '',
      concentration: '',
      gender: '',
      teamOne: '',
      teamTwo: '',
      teamThree: ''
    }

  constructor(props, context) {
    super(props, context);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);

    axios.get('/api/users/' + this.props.user)
      .then(response => {
        this.setState({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          class: response.data.class,
          concentration: response.data.concentration,
          gender: response.data.gender
        })
      });
  }

  handleSubmitClick() {
  }

  render() {
    console.log(this.state.firstName);
    var firstName = this.state.firstName;
    var lastName = this.state.lastName;
    var email = this.state.email;
    var year = this.state.class;
    var concentration = this.state.concentration;
    var gender = this.state.gender;

    return (
      <div>
      <div id="basic-info">
        <p> Basic Information: </p>
        <p id="information"> First Name: {firstName}</p>
        <p id="information"> Last Name: {lastName}</p>
        <p id="information"> Email: {email}</p>
        <p id="information"> Class: {year}</p>
        <p id="information"> Concentration: {concentration}</p>
        <p id="information"> Gender: {gender}</p>
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