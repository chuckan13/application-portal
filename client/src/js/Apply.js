import React, { Component } from 'react';
import '../css/App.css';
import Form from '../js/Form.js';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import { Button } from 'react-bootstrap';
addStyle(Button, 'next');

class Apply extends Component {
  state = {
    user: ""
  }

  constructor(props) {
    super(props);
    let that = this;
    fetch('/session')
      .then(res => res.text())
      .then(text => that.setState({user: text}))
      .catch(err => console.error(err));
  }

  render() {
    console.log("Logged in as: " + this.state.user)
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default Apply;
