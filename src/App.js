import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Dashboard />
      </Fragment>
    );
  }
}

export default App;
