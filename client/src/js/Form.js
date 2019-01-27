import React from 'react';
import '../css/Form.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Form extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    class: '',
    concentration: '',
    gender: '',
    isSubmitted: false,
  }

  constructor(props, context) {
    super(props, context);
    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.updateConcentration = this.updateConcentration.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  updateFirstName(e) {
    this.setState({firstName: e.target.value });
  }

  updateLastName(e) {
    this.setState({lastName: e.target.value });
  }

  updateEmail(e) {
    this.setState({email: e.target.value });
  }

  updateClass(e) {
    this.setState({class: e.target.value });
  }

  updateConcentration(e) {
    this.setState({concentration: e.target.value });
  }

  updateGender(e) {
    this.setState({gender: e.target.value });
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
  }

  render() {
    return (
      <div>
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.updateFirstName}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.updateLastName}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Email"
                value={this.state.email}
                onChange={this.updateEmail}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Class Year"
                value={this.state.class}
                onChange={this.updateClass}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                placeholder="Concentration"
                value={this.state.concentration}
                onChange={this.updateConcentration}
              />
            </FormGroup>
            <FormGroup controlId="formBasicText">
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

export default Form;