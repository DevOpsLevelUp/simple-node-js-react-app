import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React application </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <h1>This application is deployed using jenkins pipeline with khaled </h1>
        <img src="https://www.tek-up.de/plans/img/logo-header.png" alt="Spidertocat"
           class="img-responsive center-block" style="width:300px"/>
      </div>
    );
  }
}

export default App;
