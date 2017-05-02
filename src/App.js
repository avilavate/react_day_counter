import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './counter/counter';

class App extends Component {
  constructor(props) {
    super(props);

  }
  deadline = "December 25 2017";
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Day Counter</h2>
        </div>
        <Counter deadline={this.deadline}/>
      </div>
    );
  }
}

export default App;
