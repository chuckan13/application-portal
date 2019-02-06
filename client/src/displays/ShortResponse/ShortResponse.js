import React from 'react';
import './ShortResponse.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class ShortResponse extends React.Component {

  state = {
    responseOne: '',
    responseTwo: '',
    responseThree: '',
    responseFour: '',
    responseFive: '',
    responseSix: ''
  }

  constructor(props, context) {
    super(props, context);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    const name = e.target.name;
    this.setState({ 
      [name]: e.target.value 
    });
  }

  handleSubmitClick() {
    var r1 = this.state.responseOne;
    var r2 = this.state.responseTwo;
    var r3 = this.state.responseThree;
    var r4 = this.state.responseFour;
    var r5 = this.state.responseFive;
    var r6 = this.state.responseSix;
    this.props.handlePartThreeClick(r1, r2, r3, r4, r5, r6);
  }

  render() {
    // initially they come in as ids.  we need to get the team out of them
    // added code so it doesn't break if no teams are chosen (?)
    let { teamOne, teamTwo, teamThree } = this.props.state;
    if (teamOne) {
      teamOne = this.props.state.teams.filter(team => team.id === Number(teamOne))[0]
    } else {
      teamOne = "";
    }
    if (teamTwo) {
      teamTwo = this.props.state.teams.filter(team => team.id === Number(teamTwo))[0]
    } else {
      teamTwo = "";
    }
    if (teamThree) {
      teamThree = this.props.state.teams.filter(team => team.id === Number(teamThree))[0]
    } else {
      teamThree = "";
    }

    return (
      <div>
        <div id="short-response-title">
          <p> Part 3: Short Response </p>
        </div>
        <TeamQuestions 
          team={teamOne.name} num="1"
          n1="responseOne" n2="responseTwo"
          q1={teamOne.questionOne} q2={teamOne.questionTwo}
          v1={this.state.responseOne} v2={this.state.responseTwo}
          onChange={this.updateState}
        />
        { teamTwo ? <TeamQuestions 
          team={teamTwo.name} num="2"
          n1="responseThree" n2="responseFour"
          q1={teamTwo.questionOne} q2={teamTwo.questionTwo}
          v1={this.state.responseThree} v2={this.state.responseFour}
          onChange={this.updateState}
        />: ''}
        { teamThree ? <TeamQuestions 
          team={teamThree.name} num="3"
          n1="responseFive" n2="responseSix"
          q1={teamThree.questionOne} q2={teamThree.questionTwo}
          v1={this.state.responseFive} v2={this.state.responseSix}
          onChange={this.updateState}
        />: ''}
        <SubmitButton onClick = {this.handleSubmitClick} />
      </div>
    );
  }
}

function Question(props) {
  return (
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel id="long-form-label">{props.question}</ControlLabel>
      <FormControl
        id="long-form-answer"
        name={props.name}
        componentClass="textarea"
        value={props.v}
        onChange={props.onChange}
      />
    </FormGroup>
  );
}

function TeamQuestions(props) {
  return (
    <div>
      <p id="short-response-choice"> Choice {props.num}: {props.team} </p>
      <div id="questions">
        <Question 
          name={props.n1} question={props.q1}
          v={props.v1} onChange={props.onChange} 
        />
        <Question 
          name={props.n2} question={props.q2}
          v={props.v2} onChange={props.onChange} 
        />
      </div>
    </div>
  );
}

function SubmitButton(props) {
  return (
   <Row className="center-block text-center">
      <Col>
        <Button bsStyle="next" bsSize="large" onClick={props.onClick}>review for submission</Button>
      </Col>
   </Row>
  );
}

export default ShortResponse;