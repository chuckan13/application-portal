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
		let { teamOne, teamTwo, teamThree, questionNumbers, allResponses } = this.props.state;

		if (teamOne) {
			teamOne = this.props.state.teams.filter(team => team.id === Number(teamOne))[0];
		} else {
			teamOne = '';
		}
		if (teamTwo) {
			teamTwo = this.props.state.teams.filter(team => team.id === Number(teamTwo))[0];
		} else {
			teamTwo = '';
		}
		if (teamThree) {
			teamThree = this.props.state.teams.filter(team => team.id === Number(teamThree))[0];
		} else {
			teamThree = '';
		}

		return (
			<div>
				<div id="chunk">
					<p id="header"> Basic Information: </p>
					<p id="information"> First name: {this.props.state.firstName}</p>
					<p id="information"> Last name: {this.props.state.lastName}</p>
					<p id="information"> Email: {this.props.state.email}</p>
					<p id="information"> Class: {this.props.state.class}</p>
					<p id="information"> Concentration: {this.props.state.concentration}</p>
				</div>
				<div>
					<p id="header"> Short Response Questions: </p>
					<TeamResponses team={teamOne.name} num="One" questions={teamOne.question} resp={allResponses} />
					{teamTwo ? (
						<TeamResponses team={teamTwo.name} num="Two" questions={teamTwo.question} resp={allResponses} />
					) : (
						''
					)}
					{teamThree ? (
						<TeamResponses
							team={teamThree.name}
							num="Three"
							questions={teamThree.question}
							resp={allResponses}
						/>
					) : (
						''
					)}
				</div>
				<SubmitButton onClick={this.handleSubmitClick} />
			</div>
		);
	}
}

function TeamResponses(props) {
	const responses = props.questions.map(question => {
		var currResponse = '';
		for (var i = 0; i < props.resp.length; i++) {
			if (props.resp[i].qId == question.id) {
				currResponse = props.resp[i].text;
			}
		}
		return (
			<ShortResponseSection
				id="response-last"
				name={props.team}
				num={props.num}
				question={question.text}
				qId={question.id}
				resp={currResponse}
			/>
		);
	});

	return (
		<div id="choice-section">
			<p id="review-choice">
				{' '}
				Choice {props.num}: {props.team}{' '}
			</p>
			<div id="responses">{responses}</div>
		</div>
	);
}

function ShortResponseSection(props) {
	return (
		<div id="choice-section">
			<p id="question">{props.question}</p>
			<pre id="response">{props.resp}</pre>
		</div>
	);
}

function SubmitButton(props) {
	return (
		<Row className="center-block text-center">
			<Col>
				<Button bsStyle="next" bsSize="large" onClick={props.onClick}>
					submit
				</Button>
			</Col>
		</Row>
	);
}

export default Review;
