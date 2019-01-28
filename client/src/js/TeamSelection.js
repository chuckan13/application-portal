import React from 'react';
import '../css/TeamSelection.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import axios from 'axios';

class TeamSelection extends React.Component {

  state = {
    teamOne: '',
    teamTwo: '',
    teamThree: '',
  }

  constructor(props, context) {
    super(props, context);
    this.updateTeamOne = this.updateTeamOne.bind(this);
    this.updateTeamTwo = this.updateTeamTwo.bind(this);
    this.updateTeamThree = this.updateTeamThree.bind(this);
  }

  updateTeamOne(e) {
    this.setState({teamOne: e.target.value });
  }

  updateTeamTwo(e) {
    this.setState({teamTwo: e.target.value });
  }

  updateTeamThree(e) {
    this.setState({teamTwo: e.target.value });
  }

  handleSubmitClick() {
    axios.post('/api/users', {
      teamOne: this.state.teamOne,
      teamTwo: this.state.teamTwo,
      teamThree: this.state.teamThree
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
      <div id="basic-info">
        <p> Part 2: Team Selection </p>
      </div>
      <Row>
        <Col>
          <form onSubmit={this.handleSubmit}>
           <FormGroup>
              <ControlLabel>Team 1:</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select"></option>
                <option value="select">Alumni Outreach</option>
                <option value="other">COFF</option>
                <option value="other">Design</option>
                <option value="other">Development</option>
                <option value="other">MVP</option>
                <option value="other">HackPrinceton</option>
                <option value="other">ICE Network</option>
                <option value="other">IgniteStem</option>
                <option value="other">Rehack</option>
                <option value="other">NYTT</option>
                <option value="other">SVTT</option>
                <option value="other">TigerLaunch</option>
                <option value="other">TigerTables</option>
              </FormControl>
           </FormGroup>

           <FormGroup controlId="formControlsSelect">
              <ControlLabel>Team 2:</ControlLabel>
              <FormControl componentClass="select" placeholder="first choice">
                <option value="select" id="testing"></option>
                <option value="select">Alumni Outreach</option>
                <option value="other">COFF</option>
                <option value="other">Design</option>
                <option value="other">Development</option>
                <option value="other">MVP</option>
                <option value="other">HackPrinceton</option>
                <option value="other">ICE Network</option>
                <option value="other">IgniteStem</option>
                <option value="other">Rehack</option>
                <option value="other">NYTT</option>
                <option value="other">SVTT</option>
                <option value="other">TigerLaunch</option>
                <option value="other">TigerTables</option>
              </FormControl>
           </FormGroup>

           <FormGroup controlId="formControlsSelect">
              <ControlLabel>Team 3:</ControlLabel>
              <FormControl componentClass="select" placeholder="first choice">
                <option value="select"></option>
                <option value="select">Alumni Outreach</option>
                <option value="other">COFF</option>
                <option value="other">Design</option>
                <option value="other">Development</option>
                <option value="other">MVP</option>
                <option value="other">HackPrinceton</option>
                <option value="other">ICE Network</option>
                <option value="other">IgniteStem</option>
                <option value="other">Rehack</option>
                <option value="other">NYTT</option>
                <option value="other">SVTT</option>
                <option value="other">TigerLaunch</option>
                <option value="other">TigerTables</option>
              </FormControl>
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
        <Button bsStyle="next" bsSize="large" onClick={props.onClick}>next</Button>
      </Col>
   </Row>
  );
}

export default TeamSelection;