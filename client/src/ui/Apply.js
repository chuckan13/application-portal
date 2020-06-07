import React, { Component } from 'react';
import axios from 'axios';
import './App/App.css';
import BasicInformation from './BasicInformation/BasicInformation.js';
import TeamSelection from './TeamSelection/TeamSelection.js';
import ShortResponse from './ShortResponse/ShortResponse.js';
import Review from './Review/Review.js';
import Submitted from './Submitted.js';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import { Button } from 'react-bootstrap';
addStyle(Button, 'next');

class Apply extends Component {
	state = {
		/* User attributes */
		user: '',
		firstName: '',
		lastName: '',
		email: '',
		class: '',
		concentration: '',
		teamOne: '',
		teamTwo: '',
		teamThree: '',
		responseOne: '',
		responseTwo: '',
		responseThree: '',
		responseFour: '',
		responseFive: '',
		responseSix: '',
		/* display booleans */
		partOne: true,
		partTwo: false,
		partThree: false,
		partFour: false,
		submitted: false,
		// list of teams
		teams: []
	};

	constructor(props) {
		super(props);
		this.handlePartOneClick = this.handlePartOneClick.bind(this);
		this.handlePartTwoClick = this.handlePartTwoClick.bind(this);
		this.handlePartThreeClick = this.handlePartThreeClick.bind(this);
		this.handlePartFourClick = this.handlePartFourClick.bind(this);
	}

	componentDidMount() {
		// fetch('/session')
		// 	.then(res => res.text())
		// 	.then(token => {
		// 		console.log(`current user: ${token}`);
		// 		this.setState({ user: token });
		// 		return token;
		// 	})
		// 	.then(token => axios.get(`/api/users/${token}`))
		// 	.then(user => {
		// 		// if there is a user with the specified token, they must've submitted
		// 		if (user) {
		// 			this.setState({ submitted: true });
		// 		}
		// 	})
		// 	.catch(err => console.error(err));

		// request the list of teams
		axios
			.get('/api/teams')
			.then(res => {
				this.setState({ teams: res.data });
			})
			.catch(err => console.log(err));
	}

	handlePartOneClick(fn, ln, e, cl, con) {
		this.setState({
			firstName: fn,
			lastName: ln,
			email: e,
			class: cl,
			concentration: con,
			partOne: false,
			partTwo: true
		});
	}

	handlePartTwoClick(t1, t2, t3) {
		this.setState({
			teamOne: t1,
			teamTwo: t2,
			teamThree: t3,
			partTwo: false,
			partThree: true
		});
	}

	handlePartThreeClick(r1, r2, r3, r4, r5, r6) {
		this.setState({
			responseOne: r1,
			responseTwo: r2,
			responseThree: r3,
			responseFour: r4,
			responseFive: r5,
			responseSix: r6,
			partThree: false,
			partFour: true
		});
		window.scrollTo(0, 0);
	}

	handlePartFourClick() {
		axios
			.post('/api/users', {
				token: this.state.user,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				class: this.state.class,
				concentration: this.state.concentration,
				gender: this.state.gender,
				teamOne: this.state.teamOne,
				teamTwo: this.state.teamTwo,
				teamThree: this.state.teamThree,
				responseOne: this.state.responseOne,
				responseTwo: this.state.responseTwo,
				responseThree: this.state.responseThree,
				responseFour: this.state.responseFour,
				responseFive: this.state.responseFive,
				responseSix: this.state.responseSix
			})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			});
		this.setState({
			partFour: false,
			submitted: true
		});
	}

	render() {
		const { partOne, partTwo, partThree, partFour, submitted } = this.state;
		let display;

		if (!submitted && partOne) {
			display = <BasicInformation handlePartOneClick={this.handlePartOneClick} state={this.state} />;
		} else if (partTwo) {
			display = <TeamSelection handlePartTwoClick={this.handlePartTwoClick} state={this.state} />;
		} else if (partThree) {
			display = <ShortResponse handlePartThreeClick={this.handlePartThreeClick} state={this.state} />;
		} else if (partFour) {
			display = <Review handlePartFourClick={this.handlePartFourClick} state={this.state} />;
		} else if (submitted) {
			display = <Submitted handlePartFourClick={this.handlePartFourClick} state={this.state} />;
		}

		return <div>{display}</div>;
	}
}

export default Apply;
