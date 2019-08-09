import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import routes from "./routes";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="App" />
        <nav />
        {routes}
      </div>
    );
  }
}
