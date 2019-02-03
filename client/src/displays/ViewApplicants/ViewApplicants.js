import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

class viewApplicants extends Component {

  state = {
    questionOne: "",
    questionTwo: ""
  };

  constructor(props) {
    super(props);
  }

  render() {
    let button = <BackButton onClick={this.props.backButton} />;
    return (
      <div>{button}</div>
    );
  }
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