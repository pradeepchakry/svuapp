import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Table from "./components/Table"
import AddEmployee from "./components/AddEmployee"

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={AddEmployee} />
        <Route exact path="/view" component={Table} />
      </Router>
    );
  }
}

export default App;
