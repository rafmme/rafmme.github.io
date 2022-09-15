import React, { Component } from "react";
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
      [Resume.basics.location.region, Resume.basics.location.country].join(", ")
    ].join(" | ");
  }

  render() {
    if (window.location.pathname.toLowerCase() === '/apps/ussd-transakt/policy') {
      return (
        <>
          <Policy />
        </>
      );
    }

    if (window.location.pathname.toLowerCase() === '/') {
      return (
        <div>
          <Header />
          <Content />
          <Footer />
        </div>
      );
    }

    return <></>;
  }
}

export default App;
