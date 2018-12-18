import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AnotherComponent from './AnotherComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnotherComponent />
      </div>
    );
  }
}

export default App;
