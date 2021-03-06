import React from 'react';
import './BasicInformation.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class BasicInformation extends React.Component {
	state = {
		firstName: '',
		lastName: '',
		email: '',
		classYear: '',
		concentration: '',
		building: '',
		roomNumber: '',
		phoneNumber: '',
		linkedin: '',
		returningmember: '',
		errorMessage: 'Please review the above information carefully, you will not be able to return to edit.'
	};

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
		var fn = this.state.firstName;
		var ln = this.state.lastName;
		var e = this.state.email;
		var cl = this.state.classYear;
		var con = this.state.concentration;
		var bui = this.state.building;
		var rn = this.state.roomNumber;
		var pn = this.state.phoneNumber;
		var li = this.state.linkedin;
		var rm = this.state.returningmember;
		this.props.handlePartOneClick(fn, ln, e, cl, con, bui, rn, pn, li, rm);
	}

	render() {
		return (
			<div>
				<div id="title">
					<p>Part 1: Basic Information</p>
				</div>
				<form>
					<FormEntry
						label="First Name:"
						ph="First Name"
						name="firstName"
						v={this.state.firstName}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Last Name:"
						ph="Last Name"
						name="lastName"
						v={this.state.lastName}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Email:"
						ph="Email"
						name="email"
						v={this.state.email}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Class Year:"
						ph="Class Year"
						name="classYear"
						v={this.state.classYear}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Concentration:"
						ph="Concentration"
						name="concentration"
						v={this.state.concentration}
						onChange={this.updateState}
					/>
					{/* <FormEntry
						label="Building Name:"
						ph="Building Name"
						name="building"
						v={this.state.building}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Room Number:"
						ph="Room Number"
						name="roomNumber"
						v={this.state.roomNumber}
						onChange={this.updateState}
					/> */}
					<FormEntry
						label="Phone Number:"
						ph="Phone Number"
						name="phoneNumber"
						v={this.state.phoneNumber}
						onChange={this.updateState}
					/>
					<FormEntry
						label="LinkedIn Profile:"
						ph="LinkedIn"
						name="linkedin"
						v={this.state.linkedin}
						onChange={this.updateState}
					/>
					<FormEntry
						label="Are you a returning E-Club member?"
						ph="Returning member"
						name="returningmember"
						v={this.state.returningmember}
						onChange={this.updateState}
					/>
				</form>
				<div
					style={{
						color: 'black',
						display: 'flex',
						'justify-content': 'center'
					}}
				>
					<span>&#9888;</span>
					{this.state.errorMessage}
				</div>
				<SubmitButton onClick={this.handleSubmitClick} />
			</div>
		);
	}
}

function FormEntry(props) {
	return (
		<FormGroup>
			<ControlLabel id="short-form-label">{props.label}</ControlLabel>
			<FormControl
				id="short-form-answer"
				name={props.name}
				type="text"
				placeholder={props.ph}
				value={props.v}
				onChange={props.onChange}
			/>
		</FormGroup>
	);
}

function SubmitButton(props) {
	return (
		<Row className="center-block text-center">
			<Col>
				<Button bsStyle="next" bsSize="large" onClick={props.onClick}>
					next
				</Button>
			</Col>
		</Row>
	);
}

export default BasicInformation;
