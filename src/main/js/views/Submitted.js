import React, { Component } from 'react';
import axios from 'axios';
import './Home/Home.css';
import { Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
addStyle(Button, 'apply');

class Submitted extends Component {
	constructor(props) {
		super(props);
		this.handleApplyClick = this.handleApplyClick.bind(this);
	}

	componentDidMount() {
		axios
			.get('/api/sendemail/' + this.props.emailAddy)
			.then(res => {
				console.log('sending confirmation email');
			})
			.catch(err => console.log(err));
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true });
	}

	handleApplyClick() {
		this.props.history.push('/apply');
	}

	render() {
		let button = <ApplyButton onClick={this.handleApplyClick} />;
		return <div> {button} </div>;
	}
}

function ApplyButton(props) {
	return (
		<div id="welcome-content">
			<Row className="center-block text-center">
				<div id="welcome-text">
					<p>Thank you. Your application has been submitted.</p>
					<p>All E-Club applicant will receive a free T-shirt this year! Click below to get one.</p>
					<a href="https://www.customink.com/g/kua0-00ca-s6c8" target="_blank">
						<img class="customink" border="0" src="https://i.ibb.co/LCdSHpD/front-medium-extended.jpg" />
					</a>
				</div>
			</Row>
		</div>
	);
}

export default Submitted;
