import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Policy from "./components/policy";
import Resume from "./resume.json";

class App extends Component {
  componentDidMount() {
    document.title = [
      Resume.basics.name,
      Resume.basics.label,
      [Resume.basics.location.region, Resume.basics.location.country].join(
        ", "
      ),
    ].join(" | ");
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Policy />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
