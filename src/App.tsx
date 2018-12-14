import React, { Component } from "react";
import { HomePage } from "./pages";
import "./App.css";
// import { Route } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={HomePage} />
        </Router>
      </div>
    );
  }
}

export default App;
