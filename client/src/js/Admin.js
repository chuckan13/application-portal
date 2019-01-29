import React, { Component } from 'react';
import '../css/App.css';

class Admin extends Component {

  state = {
    home: 'Admin Page',
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
