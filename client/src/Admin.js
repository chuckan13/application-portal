import React, { Component } from 'react';
import './App.css';

class Admin extends Component {

  state = {
    home: 'Admin Page',
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

export default Admin;
