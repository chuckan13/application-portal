import React from 'react';
import './Review.css';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Review extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleSubmitClick() {
    this.props.handlePartFourClick();
  }

  render() {
    // getting team names from ids
    let { teamOne, teamTwo, teamThree } = this.props.state;
    teamOne = this.props.state.teams.filter(team => team.id === Number(teamOne))[0]
    teamTwo = this.props.state.teams.filter(team => team.id === Number(teamTwo))[0]
    teamThree = this.props.state.teams.filter(team => team.id === Number(teamThree))[0]

    return (
      <div>
        <div id="chunk">
          <p id="header"> Basic Information: </p>
          <p id="information"> First name: {this.props.state.firstName}</p>
          <p id="information"> Last name: {this.props.state.lastName}</p>
          <p id="information"> Email: {this.props.state.email}</p>
          <p id="information"> Class: {this.props.state.class}</p>
          <p id="information"> Concentration: {this.props.state.concentration}</p>
          <p id="information-last"> Gender: {this.props.state.gender}</p>
        </div>
        <div>
          <p id="header"> Short Response Questions: </p>
          <ShortResponseSection
            name ={teamOne.name} num="1"
            q1 ={teamOne.questionOne} r1={this.props.state.responseOne}
            q2= {teamOne.questionTwo} r2={this.props.state.responseTwo}
          />
          <ShortResponseSection
            name ={teamTwo.name} num="2"
            q1 ={teamTwo.questionOne} r1={this.props.state.responseThree}
            q2= {teamTwo.questionTwo} r2={this.props.state.responseFour}
          />
          <ShortResponseSection
            name ={teamThree.name} num="3"
            q1 ={teamThree.questionOne} r1={this.props.state.responseFive}
            q2= {teamThree.questionTwo} r2={this.props.state.responseSix}
          />
        </div>
        <SubmitButton onClick = {this.handleSubmitClick} />
      </div>
    );
  }
}

function ShortResponseSection(props) {
  return (
    <div id="choice-section">
      <p id="review-choice"> Choice {props.num}: {props.name}</p>
      <p id="question">{props.q1}</p>
      <p id="response">{props.r1}</p>
      <p id="question">{props.q2}</p>
      <p id="response">{props.r2}</p>
    </div>
  );
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