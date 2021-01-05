import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Router, Route, Link } from 'react-router-dom';
import history from './components/history';
import Table from "./components/Table"
import Home from "./components/Home"
import Login from "./components/Login"
import {withRouter} from 'react-router';

class App extends React.Component {
  
  render() {
    return (
      <Router history={history}>
        <Route name="Home" path="/" exact component={Home} />
        {/* <Route name="Home" path="/home" exact component={Home} /> */}
      </Router>
    );
  }
}

export default App;
