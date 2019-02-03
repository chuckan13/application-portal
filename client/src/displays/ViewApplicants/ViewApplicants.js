import React, { Component } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import './ViewApplicants.css'
import { addStyle } from "react-bootstrap/lib/utils/bootstrapUtils";
addStyle(Button, "view-more");

class viewApplicants extends Component {

  state = {
    applicants: [],
    viewUser: false,
    user: '',
    teamOne: '',
    teamTwo: '',
    teamThree: ''
  };

  constructor(props) {
    super(props);
    this.displayInfo = this.displayInfo.bind(this);
    this.displayTable = this.displayTable.bind(this);
  }

  componentDidMount() {
    // request the list of teams
    axios.get('/api/users')
      .then(res => {
        this.setState({ applicants: res.data })
      })
      .catch(err => console.log(err));
  }

  displayInfo(token) {
    axios.get('/api/users/' + token)
      .then(res => {
        this.setState({
          user: res.data, 
          viewUser: true,
          teamOne: res.data.teams[0],
          teamTwo: res.data.teams[1],
          teamThree: res.data.teams[2]
        }, function() {
            console.log(this.state.user);
            console.log(this.state.teamOne);
        });
      })
      .catch(err => console.log(err));
  }

  displayTable() {
    this.setState({
      viewUser: false
    });
  }

  render() {

    let renderTable = this.state.applicants.map((user) => {
      // catch if user doesn't have 3 teams ranked
      let c1, c2, c3="";
      if (user.teams[0]) { c1 = user.teams[0].name; }
      if (user.teams[1]) { c2 = user.teams[1].name; }
      if (user.teams[2]) { c3 = user.teams[2].name; }

      return ([
        <TableEntry 
          key={user.id}
          firstName={user.firstName} lastName={user.lastName}
          c1={c1} c2={c2} c3={c3}
          onClick={() => this.displayInfo(user.token)}
        />
      ]);
    });

    let display; 
    let viewUser = this.state.viewUser;

    if (!viewUser) {
      display = (
        <div>
          <Table bordered>
            <thead>
              <tr id="head">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Choice 1</th>
                <th>Choice 2</th>
                <th>Choice 3</th>
                <th>More Details</th>
              </tr>
            </thead>
            <tbody>
              {renderTable}
            </tbody>
          </Table>
          <BackButton onClick={this.props.backButton} />
        </div>
      );
    } else {
      display = (
        <UserProfile 
          user={this.state.user}
          teamOne={this.state.teamOne}
          teamTwo={this.state.teamTwo}
          teamThree={this.state.teamThree}
          onClick={this.displayTable}
        />
      );
    }

    return (
      <div>{display}</div>
    );
  }
}

function UserProfile(props) {
  return (
      <div>
        <div id="chunk">
          <p id="header"> Basic Information: </p>
          <p id="information"> First name: {props.user.firstName}</p>
          <p id="information"> Last name: {props.user.lastName}</p>
          <p id="information"> Email: {props.user.email}</p>
          <p id="information"> Class: {props.user.class}</p>
          <p id="information"> Concentration: {props.user.concentration}</p>
          <p id="information"> Gender: {props.user.gender}</p>
        </div>
        <div>
          <p id="header2"> Short Response Questions: </p>
          <ShortResponseSection
            name={props.teamOne.name}
            q1={props.teamOne.questionOne} r1={props.user.responseOne}
            q2={props.teamOne.questionTwo} r2={props.user.responseTwo}
          />
          <ShortResponseSection
            name={props.teamTwo.name}
            q1={props.teamTwo.questionOne} r1={props.user.responseThree}
            q2={props.teamTwo.questionTwo} r2={props.user.responseFour}
          />
          <ShortResponseSection
            name={props.teamThree.name}
            q1={props.teamThree.questionOne} r1={props.user.responseFive}
            q2={props.teamThree.questionTwo} r2={props.user.responseSix}
          />
        </div>
        <BackButton onClick={props.onClick} />
      </div>
    );
}

function ShortResponseSection(props) {
  return (
    <div id="choice-section">
      <p id="choice"> Choice 1: {props.name}</p>
      <p id="question">{props.q1}</p>
      <p id="response">{props.r1}</p>
      <p id="question">{props.q2}</p>
      <p id="response">{props.r2}</p>
    </div>
  );
}

function TableEntry(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.c1}</td>
      <td>{props.c2}</td>
      <td>{props.c3}</td>
      <td><Button bsStyle="view-more" onClick={props.onClick}>view more</Button></td>
    </tr>
  );
}

function BackButton(props) {
  return (
    <div id="welcome-content">
      <Row className="center-block text-center">
        <div>
          <Button bsStyle="admin" bsSize="large" onClick={props.onClick}>back</Button>
        </div>
      </Row>
    </div>
  );
}

export default viewApplicants;