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
    teamThree: '',
    teams: [],
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
    var t1 = this.state.teamOne;
    var t2 = this.state.teamTwo;
    var t3 = this.state.teamThree;
    this.props.handlePartTwoClick(t1, t2, t3);
  }

  renderTeamOption(team) {
    return <option key={team.id} value={team.id}>{team.name}</option>
  }

  render() {
    const { teams } = this.props.state;
    return (
      <div>
        <div id="title">
          <p> Part 2: Team Selection </p>
        </div>
        <form>
          <TeamChoice 
            label="Team 1:" name="teamOne" 
            onChange={this.updateState} render={teams.map(this.renderTeamOption)}
          />
          <TeamChoice 
            label="Team 2:" name="teamTwo" 
            onChange={this.updateState} render={teams.map(this.renderTeamOption)}
          />
          <TeamChoice 
            label="Team 3:" name="teamThree" 
            onChange={this.updateState} render={teams.map(this.renderTeamOption)}
          />
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
       <FormControl 
        name={props.name} componentClass="select" 
        onChange={props.onChange} render={props.render}>
               <option value=""></option>
               {props.render}
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