import React from 'react';
import axios from 'axios';
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
		let {
			teamOne,
			teamTwo,
			teamThree,
			questionNumbers,
			allResponses,
			teamOneQuestions,
			teamTwoQuestions,
			teamThreeQuestions
		} = this.props.state;

		if (teamOne) {
			var teamOneObj = this.props.state.teams.filter(team => team.id === Number(teamOne))[0];
		} else {
			teamOne = '';
		}
		if (teamTwo) {
			var teamTwoObj = this.props.state.teams.filter(team => team.id === Number(teamTwo))[0];
		} else {
			teamTwo = '';
		}
		if (teamThree) {
			var teamThreeObj = this.props.state.teams.filter(team => team.id === Number(teamThree))[0];
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
					<p id="information"> Class: {this.props.state.classYear}</p>
					<p id="information"> Concentration: {this.props.state.concentration}</p>
					{/* <p id="information"> Building: {this.props.state.building}</p>
					<p id="information"> Room Number: {this.props.state.roomNumber}</p> */}
					<p id="information"> Phone Number: {this.props.state.phoneNumber}</p>
					<p id="information"> LinkedIn Profile: {this.props.state.linkedin}</p>
					<p id="information"> Returning Member? {this.props.state.returningmember}</p>
					<p id="information"> 3 Strong Traits:  {this.props.state.traits}</p>
					<p id="information"> Why join E-Club?  {this.props.state.whyjoin}</p>
					<p id="information"> Extracurriculars:  {this.props.state.extracurr}</p>
					<p id="information"> Crazy idea:  {this.props.state.idea}</p>
					<p id="information"> Resume link:  {this.props.state.resume}</p>
					<p id="information"> Portfolio link: {this.props.state.portfolio}</p>
					<p id="information"> Tigertrek interest: {this.props.state.tigertrek}</p>
				</div>
				<div>
					<p id="header"> Short Response Questions: </p>
					<TeamResponses team={teamOneObj.name} num="One" questions={teamOneQuestions} resp={allResponses} />
					{teamTwo ? (
						<TeamResponses
							team={teamTwoObj.name}
							num="Two"
							questions={teamTwoQuestions}
							resp={allResponses}
						/>
					) : (
							''
						)}
					{teamThree ? (
						<TeamResponses
							team={teamThreeObj.name}
							num="Three"
							questions={teamThreeQuestions}
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
			<p id="response">{props.resp}</p>
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
