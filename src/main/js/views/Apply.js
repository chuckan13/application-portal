import React, { Component } from 'react';
import axios from 'axios';
import '../app.css';
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
		userId: '',
		user: '',
		firstName: '',
		lastName: '',
		email: '',
		classYear: '',
		concentration: '',
		building: '',
		roomNumber: '',
		phoneNumber: '',
		linkedin: '',
		teamOne: 0,
		teamTwo: 0,
		teamThree: 0,
		teamOneQuestions: [],
		teamTwoQuestions: [],
		teamThreeQuestions: [],
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
				console.log("RES DATA");
				console.log(res.data);
				var newTeams = [];
				for (index = 0; index < res.data.length; index++) {
					if (res.data[index].name != "No team" || res.data[index].name != "Presidents") {
						console.log(res.data[index]);
						newTeams.push(res.data[index]);
					}
				}
				console.log("NEW TEAMS");
				console.log(newTeams);
				this.setState({ teams: newTeams });
			})
			.catch(err => console.log(err));
	}

	handlePartOneClick(fn, ln, e, cl, con, bui, rn, pn, li) {
		console.log('Handle part one click');
		console.log(fn);
		console.log(cl);
		console.log(con);
		this.setState({
			firstName: fn,
			lastName: ln,
			email: e,
			classYear: cl,
			concentration: con,
			building: bui,
			roomNumber: rn,
			phoneNumber: pn,
			linkedin: li,
			partOne: false,
			partTwo: true
		});
	}

	async handlePartTwoClick(t1, t2, t3) {
		console.log('Handle part two click');
		console.log(t1);
		console.log(t2);
		console.log(t3);
		var tempId = '';
		var teamOneQ = [];
		var teamTwoQ = [];
		var teamThreeQ = [];
		await axios
			.post('/api/users/new', {
				//json stringify?
				token: this.state.user,
				firstName: this.state.firstName,
				lastName: this.state.lastName,
				email: this.state.email,
				classYear: this.state.classYear,
				concentration: this.state.concentration,
				building: this.state.building,
				roomNumber: this.state.roomNumber,
				phoneNumber: this.state.phoneNumber,
				linkedin: this.state.linkedin,
				role: 'USER'
			})
			.then(function (response) {
				console.log(tempId);
				tempId = response.data.id;
			})
			.catch(function (error) {
				console.log(error);
			});
		await axios.post('/api/userteams/new', {
			teamId: t1,
			userId: tempId,
			preference: 1
		});
		await axios.post('/api/userteams/new', {
			teamId: t2,
			userId: tempId,
			preference: 2
		});
		await axios.post('/api/userteams/new', {
			teamId: t3,
			userId: tempId,
			preference: 3
		});
		await axios
			.get('/api/questions/' + t1)
			.then(res => {
				console.log('get request to /api/questions/{teamid} 1');
				console.log(res.data);
				teamOneQ = res.data;
				// this.setState({ teamOneQuestions: res.data });
			})
			.catch(err => console.log(err));
		await axios
			.get('/api/questions/' + t2)
			.then(res => {
				console.log('get request to /api/questions/{teamid} 2');
				console.log(res.data);
				teamTwoQ = res.data;
				// this.setState({ teamOneQuestions: res.data });
			})
			.catch(err => console.log(err));
		await axios
			.get('/api/questions/' + t3)
			.then(res => {
				console.log('get request to /api/questions/{teamid} 3');
				console.log(res.data);
				teamThreeQ = res.data;
				// this.setState({ teamOneQuestions: res.data });
			})
			.catch(err => console.log(err));
		this.setState({
			userId: tempId,
			teamOne: t1,
			teamTwo: t2,
			teamThree: t3,
			teamOneQuestions: teamOneQ,
			teamTwoQuestions: teamTwoQ,
			teamThreeQuestions: teamThreeQ,
			partTwo: false,
			partThree: true
		});
		console.log(this.state.userId);
	}

	handlePartThreeClick(qNums, allResp) {
		console.log('Handle part three click');
		console.log(qNums);
		console.log(allResp);
		this.setState({
			questionNumbers: qNums,
			allResponses: allResp,
			partThree: false,
			partFour: true
		});
		window.scrollTo(0, 0);
	}

	handlePartFourClick() {
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
			console.log(this.state.email);
			display = <Submitted handlePartFourClick={this.handlePartFourClick} state={this.state} emailAddy={this.state.email} />;
		}

		return <div>{display}</div>;
	}
}

export default Apply;
