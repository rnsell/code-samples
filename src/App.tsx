import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HomePage, GradingStudentPage } from "./pages";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/grading-students"
            exact
            component={GradingStudentPage}
          />
          <Route path="/" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
