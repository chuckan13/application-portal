import React, { Component } from 'react';
import '../Admin/Admin.css';
import ViewApplicants from "../ViewApplicants/ViewApplicants.js";
import EditApplication from "../EditApplication/EditApplication.js";
import { Button } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
addStyle(Button, 'admin');

class Admin extends Component {

  state = {
    /* team attributes */
    questionOne: "",
    questionTwo: "",

    /* display booleans */
    homePage: true,
    viewApplicants: false,
    editApplication: false
  };

  constructor(props) {
    super(props);
    this.displayApplicants = this.displayApplicants.bind(this);
    this.editApplication = this.editApplication.bind(this);
    this.backButton = this.backButton.bind(this);
  }


  displayApplicants() {
    this.setState({
      homePage: false,
      viewApplicants: true
    });
  }

  editApplication() {
    this.setState({
      homePage: false,
      editApplication: true
    });
  }

  // handles back button on all admin pages 
  backButton() {
    this.setState({
      homePage: true,
      editApplication: false,
      viewApplicants: false
    });
  }

  render() {
    let {homePage, viewApplicants, editApplication} = this.state;
    let display;

    if (homePage) {
      display = (
        <HomePage 
          displayApplicants={this.displayApplicants}
          editApplication={this.editApplication}
        />
      );
    } else if (viewApplicants) {
      display = (
        <ViewApplicants backButton={this.backButton}/>
      );
    } else if (editApplication) {
      display = (
        <EditApplication backButton={this.backButton}/>
      );
    }
    return (
      <div> {display} </div>
    );
  }
}

function HomePage(props) {
  return (
    <div id="welcome-content">
      <Row className="center-block text-center">
        <Col>
          <div>
            <Button bsStyle="admin" bsSize="large" onClick={props.displayApplicants}>View Applicants</Button>
          </div>
          <div>
            <Button bsStyle="admin" bsSize="large" onClick={props.editApplication}>Edit Application</Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Admin;