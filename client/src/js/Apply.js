import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import BasicInformation from '../js/BasicInformation.js';
import TeamSelection from '../js/TeamSelection.js';
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
    this.state = {partOne: true}
    this.handlePartOneClick = this.handlePartOneClick.bind(this);
  }

  handlePartOneClick() {
    this.setState({
      partOne: false,
      partTwo: true
    })
  }

  render() {
    console.log("Logged in as: " + this.state.user)
    const partOne = this.state.partOne;
    const partTwo = this.state.partTwo;
    console.log(partOne);
    console.log(partTwo);
    let display; 

    if (partOne) {
      display = <BasicInformation handlePartOneClick = {this.handlePartOneClick} />;
    } else if (partTwo) {
      display = <TeamSelection/>;
    }
    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Apply;
