import React, { Component } from 'react';
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Table } from 'react-bootstrap';

class viewApplicants extends Component {

  state = {
    applicants: []
  };

  constructor(props) {
    super(props);
    this.getApplicants = this.getApplicants.bind(this);
  }

  getApplicants() {
    this.setState({
      applicants: axios.get("/api/teams/2")
    });
  }

  render() {
    let button = <BackButton onClick={this.props.backButton} />;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Choice 1</th>
              <th>Choice 2</th>
              <th>Choice 3</th>
            </tr>
          </thead>
          <tbody>
            <TableEntry 
              firstName="Christine" lastName="Hu"
              c1="HackPrinceton"
              c2="Development"
              c3="Design"
            />
            <TableEntry 
              firstName="Christine" lastName="Hu"
              c1="HackPrinceton"
              c2="Development"
              c3="Design"
            />
          </tbody>
        </Table>
        <BackButton onClick={this.props.backButton} />
      </div>
    );
  }
}

function TableEntry(props) {
  return (
    <tr>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.c1}</td>
      <td>{props.c2}</td>
      <td>{props.c3}</td>
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