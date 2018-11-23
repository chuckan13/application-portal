import React, { Component } from 'react';
import './App.css';
import Apply from './Apply.js';
import Admin from './Admin.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {

  state = {
    home: 'Apply today!',
  }

  constructor(props) {
    super(props);
    this.state = "Apply to e-club!"
  }

  render() {
    return (
    <Router>
      <div>
      <Route path="/apply" component={Apply} />
       <Route path="/admin" component={Admin} />
      </div> 
    </Router>
  );
  
  }
}

export default App;
