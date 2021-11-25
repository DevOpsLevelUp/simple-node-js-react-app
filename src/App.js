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
          <h1>This Application Demo_V4 is deployed using jenkins pipeline </h1>
        <img src="https://d1q6f0aelx0por.cloudfront.net/product-logos/f5326186-8ae7-425c-a78d-7192dabf75be-jenkins.png" alt="Spidertocat"  />
      </div>
    );
  }
}

export default App;
