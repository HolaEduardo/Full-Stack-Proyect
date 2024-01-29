import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Contact from "./Pages/Contact";
import ScrollToTopRoute from "./ScrollToTopRoute";
import homeHosting from "./Pages/HomeHosting";
import HomeTracking from "./Pages/Home-tracking";
import NotFound from "./Pages/404";

class App extends Component {
  componentDidMount() {
    this.props.hideLoader();
  }
  render() {
    return (
      <Router>
        <Switch>
          <ScrollToTopRoute path="/Contact" component={Contact} />
          <ScrollToTopRoute exact={true} path="/" component={homeHosting} />
          <ScrollToTopRoute path="/Home-Tracking" component={HomeTracking} />
          <ScrollToTopRoute component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
