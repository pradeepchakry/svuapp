import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table"
import Home from "./components/Home"
import Page from "./components/Page"

class App extends React.Component {
  
  render() {
    return (
      <Router>
        <Route exact name="Login" path="/" component={Page} />
        <Route exact name="Home" path="/home" component={Home} />
      </Router>
    );
  }
}

export default App;
