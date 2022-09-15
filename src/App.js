import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/structure/Header";
import Content from "./components/structure/Content";
import Footer from "./components/structure/Footer";
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
            <div>
              <Header />
              <Content />
              <Footer />
            </div>
          </Route>
          <Route path="/apps/ussd-transakt/policy" exact>
            <Policy />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
