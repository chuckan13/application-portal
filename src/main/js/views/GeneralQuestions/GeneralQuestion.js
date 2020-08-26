import React from 'react';
import '../BasicInformation/BasicInformation.css';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';

class GeneralQuestions extends React.Component {
    state = {
        traits: '',
        whyjoin: '',
        extracurr: '',
        idea: '',
        resume: '',
        portfolio: '',
        tigertrek: '',
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
        var tr = this.state.traits;
        var wj = this.state.whyjoin;
        var ec = this.state.extracurr;
        var idea = this.state.idea;
        var res = this.state.resume;
        var pf = this.state.portfolio;
        var tt = this.state.tigertrek;
        this.props.handlePartOneTwoClick(tr, wj, ec, idea, res, pf, tt);
    }

    render() {
        return (
            <div>
                <div id="title">
                    <p>Part 2: General Questions</p>
                </div>
                <form>
                    <FormEntry
                        label="Name your 3 strongest traits/talents"
                        ph="3 Traits"
                        name="traits"
                        v={this.state.traits}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="Why do you want to join E-Club?"
                        ph="Why Join"
                        name="whyjoin"
                        v={this.state.whyjoin}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="Please describe your current/past extracurricular interests"
                        ph="Extracurriculars"
                        name="extracurr"
                        v={this.state.extracurr}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="What is a (crazy) idea that you’ve had that the world needs right now?"
                        ph="Idea"
                        name="idea"
                        v={this.state.idea}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="Please provide a link to your resume"
                        ph="Resume"
                        name="resume"
                        v={this.state.resume}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="If you have a portfolio, or there is something you built that you are especially proud of, please include a link here"
                        ph="Portfolio"
                        name="portfolio"
                        v={this.state.portfolio}
                        onChange={this.updateState}
                    />
                    <FormEntry
                        label="Are you interested in participating in the TigerTreks, scheduled December 2020 - January 2021 (Wintercession)?"
                        ph="Tigertrek Interest"
                        name="tigertrek"
                        v={this.state.tigertrek}
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
                id="long-form-answer"
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

export default GeneralQuestions;
