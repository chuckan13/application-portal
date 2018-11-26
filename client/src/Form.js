import React from 'react';
import './Form.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Form extends React.Component {

  state = {
    name: '',
    email: '',
    class: '',
    concentration: '',
    gender: '',
    isSubmitted: false,
  }

  constructor(props, context) {
    super(props, context);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.updateConcentration = this.updateConcentration.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  updateName(e) {
    this.setState({name: e.target.value });
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
    console.log("Name: " + this.state.name);
    console.log("Email: " + this.state.email);
    console.log("Class: " + this.state.class);
    console.log("Concentration: " + this.state.concentration);
    console.log("Gender: " + this.state.gender);
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
                placeholder="Name"
                value={this.state.name}
                onChange={this.updateName}
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