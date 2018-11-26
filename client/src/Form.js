import React from 'react';
import './App.css';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';

class Form extends React.Component {

  state = {
    name: '',
    email: '',
    class: '',
    concentration: '',
    gender: '',
  }

  constructor(props, context) {
    super(props, context);
    this.updateName = this.updateName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.updateConcentration = this.updateConcentration.bind(this);
    this.updateGender = this.updateGender.bind(this);
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

  render() {
    return (
      <form >
        <FormGroup controlId="formBasicText">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type="text"
            placeholder="John Smith"
            value={this.state.name}
            onChange={this.updateName}
          />
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            placeholder="netid@princeton.edu"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <ControlLabel>Class Year</ControlLabel>
          <FormControl
            type="text"
            placeholder="ex: 2019"
            value={this.state.class}
            onChange={this.updateClass}
          />
          <ControlLabel>Concentration</ControlLabel>
          <FormControl
            type="text"
            placeholder="ex: computer science"
            value={this.state.concentration}
            onChange={this.updateConcentration}
          />
          <ControlLabel>Gender</ControlLabel>
          <FormControl
            type="text"
            placeholder="ex: female"
            value={this.state.gender}
            onChange={this.updateGender}
          />
        </FormGroup>
      </form>
    );
  }
}

export default Form;