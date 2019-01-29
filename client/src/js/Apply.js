import React, { Component } from "react";
import "../css/App.css";
import axios from "axios";
import BasicInformation from "../js/BasicInformation.js";
import TeamSelection from "../js/TeamSelection.js";
import ShortResponse from "../js/ShortResponse.js";
import Review from "../js/Review.js";
import { addStyle } from "react-bootstrap/lib/utils/bootstrapUtils";
import { Button } from "react-bootstrap";
addStyle(Button, "next");

class Apply extends Component {
  state = {
    user: "",
    partOne: true,
    partTwo: false,
    partThree: false,
    partFour: false,
    created: false
  };

  constructor(props) {
    super(props);
    this.handlePartOneClick = this.handlePartOneClick.bind(this);
    this.handlePartTwoClick = this.handlePartTwoClick.bind(this);
    this.handlePartThreeClick = this.handlePartThreeClick.bind(this);
  }

  componentDidMount() {
    fetch("/session")
      .then(res => res.text())
      .then(text => {
        this.setState({ user: text });

        return axios.post("/api/users", {
          token: text
        });
      })
      .then(response => {
        console.log(response);
        this.setState({ created: true });
      })
      .catch(error => {
        console.log(error);
      })
      .catch(err => console.error(err));
  }

  handlePartOneClick() {
    this.setState({
      partOne: false,
      partTwo: true
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
    /* create a new user */
    const { partOne, partTwo, partThree, partFour } = this.state;
    let display;

    if (partOne) {
      display = (
        <BasicInformation
          handlePartOneClick={this.handlePartOneClick}
          user={this.state.user}
        />
      );
    } else if (partTwo) {
      display = (
        <TeamSelection
          handlePartTwoClick={this.handlePartTwoClick}
          user={this.state.user}
        />
      );
    } else if (partThree) {
      display = (
        <ShortResponse handlePartThreeClick={this.handlePartThreeClick} />
      );
    } else if (partFour) {
      display = (
        <Review
          handlePartFourClick={this.handlePartFourClick}
          user={this.state.user}
        />
      );
    }

    return <div>{display}</div>;
  }
}

export default Apply;
