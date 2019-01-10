import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';

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
    return (
      <div>
        <p>Logged in as: {this.state.user}</p>
        <Form />
      </div>
    );
  }
}

export default Apply;
