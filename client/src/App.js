import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    test: "Hello ...",
  }

  constructor(props) {
    super(props);
    var that = this;
    fetch('api/users')
      .then(function(res) {
         return res.text();
      })
      .then(function(text) {
         that.setState({test: "Hello " + text});
      })
      .catch(function (err) {
        console.err(err);
      });
  }

  render() {
    return (
      <div className="App">
        <p>{ this.state.test }</p>
      </div>
    );
  }
}

export default App;
