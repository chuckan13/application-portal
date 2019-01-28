import React, { Component } from 'react';
import '../css/App.css';
import axios from 'axios';
import BasicInformation from '../js/BasicInformation.js';
import TeamSelection from '../js/TeamSelection.js';
import ShortResponse from '../js/ShortResponse.js';
import Review from '../js/Review.js';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import { Button } from 'react-bootstrap';
addStyle(Button, 'next');

class Apply extends Component {
  state = {
    user: "",
    partOne: true,
    partTwo: false,
    partThree: false,
    partFour: false
  }

  constructor(props) {
    super(props);
    let that = this;
    fetch('/session')
      .then(res => res.text())
      .then(text => that.setState({user: text}))
      .catch(err => console.error(err));
    this.handlePartOneClick = this.handlePartOneClick.bind(this);
    this.handlePartTwoClick = this.handlePartTwoClick.bind(this);
    this.handlePartThreeClick = this.handlePartThreeClick.bind(this);
  }

  handlePartOneClick() {
    this.setState({
      partOne: false,
      partTwo: true
    });
    /* create a new user */
    axios.post('/api/users' , {
      token: this.state.user
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handlePartTwoClick() {
    this.setState({
      partTwo: false,
      partThree: true
    });
  }

  handlePartThreeClick() {
    this.setState({
      partThree: false,
      partFour: true
    });
  }

  handlePartFourClick() {
    this.setState({
      partThree: false,
      partFour: true
    });
  }

  render() {
    console.log("Logged in as: " + this.state.user)
    const partOne = this.state.partOne;
    const partTwo = this.state.partTwo;
    const partThree = this.state.partThree;
    const partFour = this.state.partFour;
    let display;  

    if (partOne) {
      display = <BasicInformation 
        handlePartOneClick = {this.handlePartOneClick}
        user = {this.state.user} />;
    } else if (partTwo) {
      display = <TeamSelection 
        handlePartTwoClick = {this.handlePartTwoClick} 
        user = {this.state.user} />;
    } else if (partThree) {
      display = <ShortResponse handlePartThreeClick = {this.handlePartThreeClick} />;
    } else if (partFour) {
      display = <Review handlePartFourClick = {this.handlePartFourClick} />;
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}

export default Apply;
