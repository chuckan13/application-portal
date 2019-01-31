import React, { Component } from 'react';
import '../Admin/Admin.css';
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
addStyle(Button, 'admin');

class Admin extends Component {

  constructor(props) {
    super(props);
    this.handleApplyClick = this.handleApplyClick.bind(this);
  }

  handleApplyClick() {
    this.props.history.push("/apply");
  }

  render() {
    let button = <ApplyButton onClick={this.handleApplyClick} />;
    return (
      <div> {button} </div>
    );
  }
}

function ApplyButton(props) {
  return (
    <div id="welcome-content">
      <Row className="center-block text-center">
        <Col>
          <div>
            <Button bsStyle="admin" bsSize="large" onClick={props.onClick}>View Applicants</Button>
          </div>
          <div>
            <Button bsStyle="admin" bsSize="large" onClick={props.onClick}>Edit Application</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;