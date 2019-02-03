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
  }

  componentDidMount() {
    // request the list of teams
    axios.get('/api/users')
      .then(res => {
        this.setState({ applicants: res.data })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.applicants);
    const renderTable = this.state.applicants.map(function(user) {

      // catch if user doesn't have 3 teams ranked
      let c1, c2, c3 ="";
      if (user.teams[0]) {
        c1 = user.teams[0].name;
      }
      if (user.teams[1]) {
        c2 = user.teams[1].name;
      }
      if (user.teams[2]) {
        c3 = user.teams[2].name;
      }

      return ([
        <TableEntry key={user.id}
          firstName={user.firstName} lastName={user.lastName}
          c1={c1}
          c2={c2}
          c3={c3}
        />
      ]);
    });

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
            {renderTable}
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