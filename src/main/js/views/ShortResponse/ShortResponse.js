import React from 'react';
import './ShortResponse.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import axios from 'axios';

class ShortResponse extends React.Component {
	state = {
		questionNumbers: [],
		userId: 0
	};

	constructor(props, context) {
		super(props, context);
		this.handleSubmitClick = this.handleSubmitClick.bind(this);
		this.updateState = this.updateState.bind(this);
		let { teamOne, teamTwo, teamThree, userId } = this.props.state;
	}

	updateState(e) {
		const name = e.target.name;
		this.setState({
			[name]: e.target.value
		});
	}

	async handleSubmitClick() {
		var allResponseObjects = [];
		for (var i = 0; i < this.state.questionNumbers.length; i++) {
			var currResponseObject = {
				text: this.state['question' + this.state.questionNumbers[i] + 'response'],
				qId: this.state.questionNumbers[i]
			};
			allResponseObjects.push(currResponseObject);
		}
		let responses = [];
		await Promise.all(
			allResponseObjects.map(obj =>
				axios
					.post('/api/responses', {
						text: obj.text,
						question_id: parseInt(obj.qId),
						user_id: parseInt(this.state.userId)
					})
					.then(response => {
						responses.push(response);
					})
			)
		);
		this.setState({
			allResp: allResponseObjects
		});
		this.props.handlePartThreeClick(this.state.questionNumbers, this.state.allResp);
	}

	alreadyInArray(idNum) {
		if (this.state.questionNumbers.includes(idNum)) {
			return true;
		}
		return false;
	}

	clearArrayOfUndefined(arrayVars) {
		var newArray = [];
		for (var i = 0; i < arrayVars.length; i++) {
			if (arrayVars[i]) {
				newArray.push(arrayVars[i]);
			}
		}
		return newArray;
	}

	render() {
		// initially they come in as ids.  we need to get the team out of them
		// added code so it doesn't break if no teams are chosen (?)
		let { teamOne, teamTwo, teamThree, userId } = this.props.state;
		this.state.userId = userId;
		if (teamOne) {
			teamOne = this.props.state.teams.filter(team => team.id === Number(teamOne))[0];
			console.log('Team one');
			console.log(teamOne);
			var questionNum = [];
			questionNum = teamOne.question.map(question => {
				if (!this.alreadyInArray(question.id)) {
					return question.id;
				}
			});
			this.state.questionNumbers = this.state.questionNumbers.concat(this.clearArrayOfUndefined(questionNum));
		} else {
			teamOne = '';
		}
		if (teamTwo) {
			teamTwo = this.props.state.teams.filter(team => team.id === Number(teamTwo))[0];
			var questionNum = [];
			questionNum = teamTwo.question.map(question => {
				if (!this.alreadyInArray(question.id)) {
					return question.id;
				}
			});
			this.state.questionNumbers = this.state.questionNumbers.concat(this.clearArrayOfUndefined(questionNum));
		} else {
			teamTwo = '';
		}
		if (teamThree) {
			teamThree = this.props.state.teams.filter(team => team.id === Number(teamThree))[0];
			var questionNum = [];
			questionNum = teamThree.question.map(question => {
				if (!this.alreadyInArray(question.id)) {
					return question.id;
				}
			});
			this.state.questionNumbers = this.state.questionNumbers.concat(this.clearArrayOfUndefined(questionNum));
		} else {
			teamThree = '';
		}

		return (
			<div>
				<div id="short-response-title">
					<p> Part 3: Short Response </p>
				</div>
				<TeamQuestions
					team={teamOne.name}
					num="One"
					questions={teamOne.question}
					onChange={this.updateState}
					v={this.state}
				/>
				{teamTwo ? (
					<TeamQuestions
						team={teamTwo.name}
						num="Two"
						questions={teamTwo.question}
						onChange={this.updateState}
						v={this.state}
					/>
				) : (
					''
				)}
				{teamThree ? (
					<TeamQuestions
						team={teamThree.name}
						num="Three"
						questions={teamThree.question}
						onChange={this.updateState}
						v={this.state}
					/>
				) : (
					''
				)}
				<SubmitButton onClick={this.handleSubmitClick} />
			</div>
		);
	}
}

function Question(props) {
	return (
		<FormGroup>
			<ControlLabel id="long-form-label">{props.question}</ControlLabel>
			<FormControl
				id="long-form-answer"
				name={props.name + 'response'}
				componentClass="textarea"
				value={props.v[props.name + 'response']}
				onChange={props.onChange}
			/>
		</FormGroup>
	);
}

function TeamQuestions(props) {
	const questions = props.questions.map(question => (
		<Question
			name={'question' + question.id}
			question={question.text}
			onChange={props.onChange}
			questionId={question.id}
			v={props.v}
		/>
	));

	return (
		<div>
			<p id="short-response-choice">
				{' '}
				Choice {props.num}: {props.team}{' '}
			</p>
			<div id="questions">{questions}</div>
		</div>
	);
}

function SubmitButton(props) {
	return (
		<Row className="center-block text-center">
			<Col>
				<Button bsStyle="next" bsSize="large" onClick={props.onClick}>
					review for submission
				</Button>
			</Col>
		</Row>
	);
}

export default ShortResponse;
