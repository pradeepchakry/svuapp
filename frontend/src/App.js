import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Router, Route, Link } from 'react-router-dom';
import history from './components/history';
import Table from "./components/Table"
import Home from "./components/Home"
import Login from "./components/Login"
import PhoneLogin from "./components/PhoneLogin"
import Root from "./components/Root"
import {withRouter} from 'react-router';
import { AppContext } from "./libs/contextLib";
import HomeComponent from './components/HomeComponent'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    }
  }
  render() {
    
    return (
        <Router history={history}>
          <Route name="Root" path="/" exact component={Root} />
          <Route name="Login" path="/login" exact component={Login} />
          <Route name="PhoneLogin" path="/phonelogin" exact component={PhoneLogin} />
          <Route name="HomeComponent" path="/home" exact component={HomeComponent} />
        </Router>
      
    );
  }
}

export default App;
