import React from 'react';
import './TeamSelection.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class TeamSelection extends React.Component {

  state = {
    teamOne: '',
    teamTwo: '',
    teamThree: ''
  }

  constructor(props, context) {
    super(props, context);
    this.updateTeamOne = this.updateTeamOne.bind(this);
    this.updateTeamTwo = this.updateTeamTwo.bind(this);
    this.updateTeamThree = this.updateTeamThree.bind(this);
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
    var t1 = this.state.teamOne;
    var t2 = this.state.teamTwo;
    var t3 = this.state.teamThree;
    this.props.handlePartTwoClick(t1, t2, t3);
  }

  render() {
    return (
      <div>
        <div id="title">
          <p> Part 2: Team Selection </p>
        </div>
        <form>
          <TeamChoice label="Team 1:" name="teamOne" onChange={this.updateState}/>
          <TeamChoice label="Team 2:" name="teamTwo" onChange={this.updateState}/>
          <TeamChoice label="Team 3:" name="teamThree" onChange={this.updateState}/>
        </form>
        <SubmitButton onClick={this.handleSubmitClick} />
      </div>
    );
  }
}

function TeamChoice(props) {
  return (
    <FormGroup controlId="formControlsSelect">
       <ControlLabel>{props.label}</ControlLabel>
       <FormControl name={props.name} componentClass="select" onChange={props.onChange}>
         <option value=""></option>
         <option value="Alumni Outreach">Alumni Outreach</option>
         <option value="COFF">COFF</option>
         <option value="Design">Design</option>
         <option value="Development">Development</option>
         <option value="MVP">MVP</option>
         <option value="HackPrinceton">HackPrinceton</option>
         <option value="ICE Network">ICE Network</option>
         <option value="IgniteStem">IgniteStem</option>
         <option value="Rehack">Rehack</option>
         <option value="NYTT">NYTT</option>
         <option value="SVTT">SVTT</option>
         <option value="TigerLaunch">TigerLaunch</option>
         <option value="TigerTables">TigerTables</option>
       </FormControl>
    </FormGroup>
  );
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