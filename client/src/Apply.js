import React, { Component } from 'react';
import './App.css';

class Apply extends Component {

  state = {
    home: 'Apply Page',
  }

  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="App">
        <p>{ this.state.home }</p>
      </div>
    );
  }
}

export default Apply;
