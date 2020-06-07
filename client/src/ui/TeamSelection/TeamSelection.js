import React from 'react';
import './TeamSelection.css';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class TeamSelection extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			teamOne: '',
			teamTwo: '',
			teamThree: '',
			teams: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		const name = event.target.name;
		this.setState({
			[name]: event.target.value
		});
	}

	handleSubmit() {
		var t1 = this.state.teamOne;
		var t2 = this.state.teamTwo;
		var t3 = this.state.teamThree;
		this.props.handlePartTwoClick(t1, t2, t3);
		// event.preventDefault();
	}
	renderTeamOption(team) {
		return (
			<option key={team.id} value={team.id}>
				{team.name}
			</option>
		);
	}
	render() {
		const { teams } = this.props.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup id="short-form-slect">
					<ControlLabel id="short-form-label">Team 1:</ControlLabel>
					<FormControl name="teamOne" componentClass="select" onChange={this.handleChange}>
						<option />
						{teams.map(this.renderTeamOption)}
					</FormControl>
				</FormGroup>
				<FormGroup id="short-form-slect">
					<ControlLabel id="short-form-label">Team 2:</ControlLabel>
					<FormControl name="teamTwo" componentClass="select" onChange={this.handleChange}>
						<option />
						{teams.map(this.renderTeamOption)}
					</FormControl>
				</FormGroup>
				<FormGroup id="short-form-slect">
					<ControlLabel id="short-form-label">Team 3:</ControlLabel>
					<FormControl name="teamThree" componentClass="select" onChange={this.handleChange}>
						<option />
						{teams.map(this.renderTeamOption)}
					</FormControl>
				</FormGroup>
				<Row className="center-block text-center">
					<Col>
						<Button bsStyle="next" bsSize="large" onClick={this.handleSubmit}>
							next
						</Button>
					</Col>
				</Row>
			</form>
		);
	}
}
export default TeamSelection;

// class TeamSelection extends React.Component {
// state = {
// 	teamOne: 'a',
// 	teamTwo: 'b',
// 	teamThree: 'c',
// 	teams: []
// };

// 	constructor(props, context) {
// 		super(props, context);
// 		this.handleSubmitClick = this.handleSubmitClick.bind(this);
// 		this.updateState = this.updateState.bind(this);
// 	}

// 	updateState(e) {
// const name = e.target.name;
// this.setState({
// 	[name]: e.target.value
// });
// 	}

// 	handleSubmitClick() {
// var t1 = this.state.teamOne;
// var t2 = this.state.teamTwo;
// var t3 = this.state.teamThree;
// this.props.handlePartTwoClick(t1, t2, t3);
// 	}

// renderTeamOption(team) {
// 	return (
// 		<option key={team.id} value={team.id}>
// 			{team.name}
// 		</option>
// 	);
// }

// 	render() {
// 		const { teams } = this.props.state;
// 		return (
// 			<div>
// 				<div id="title">
// 					<p> Part 2: Team Selection </p>
// 				</div>
// 				<form>
// 					<TeamChoice
// 						label="Team 1:"
// 						name="teamOne"
// 						defaultValue={this.state.teamOne}
// 						onChange={this.updateState}
// 						render={teams.map(this.renderTeamOption)}
// 					/>
// 					<TeamChoice
// 						label="Team 2:"
// 						name="teamTwo"
// 						value={this.state.teamTwo}
// 						onChange={this.updateState}
// 						render={teams.map(this.renderTeamOption)}
// 					/>
// 					<TeamChoice
// 						label="Team 3:"
// 						name="teamThree"
// 						value={this.state.teamThree}
// 						onChange={this.updateState}
// 						render={teams.map(this.renderTeamOption)}
// 					/>
// 				</form>
// 				<SubmitButton onClick={this.handleSubmitClick} />
// 			</div>
// 		);
// 	}
// }

// function TeamChoice(props) {
// 	return (
// <FormGroup>
// 	<ControlLabel id="short-form-label">{props.label}</ControlLabel>
// 	<FormControl
// 		id="short-form-answer"
// 		name={props.name}
// 		componentClass="select"
// 		value={props.value}
// 		onChange={props.onChange}
// 		// render={props.render}
// 	>
// 		<option />
// 		{props.render}
// 	</FormControl>
// </FormGroup>
// 	);
// }

// function SubmitButton(props) {
// 	return (
// <Row className="center-block text-center">
// 	<Col>
// 		<Button bsStyle="next" bsSize="large" onClick={props.onClick}>
// 			next
// 		</Button>
// 	</Col>
// </Row>
// 	);
// }
