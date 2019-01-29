import React from 'react';
import '../css/TeamSelection.css';
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
  }

  updateTeamOne(e) {
    this.setState({teamOne: e.target.value });
  }

  updateTeamTwo(e) {
    this.setState({teamTwo: e.target.value });
  }

  updateTeamThree(e) {
    this.setState({teamThree: e.target.value });
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
      <div id="basic-info">
        <p> Part 2: Team Selection </p>
      </div>
      <Row>
        <Col>
          <form>
           <FormGroup>
              <ControlLabel>Team 1:</ControlLabel>
              <FormControl componentClass="select" placeholder="first choice" onChange={this.updateTeamOne}>
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

           <FormGroup controlId="formControlsSelect">
              <ControlLabel>Team 2:</ControlLabel>
              <FormControl componentClass="select" placeholder="second choice" onChange={this.updateTeamTwo}>
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

           <FormGroup controlId="formControlsSelect">
              <ControlLabel>Team 3:</ControlLabel>
              <FormControl componentClass="select" placeholder="third choice" onChange={this.updateTeamThree}>
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