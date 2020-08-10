import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/nav/nav";
import Jumbotron from "./components/jumbotron/jumbotron";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
      </div>
    );
  }
}

export default App;
