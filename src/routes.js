import React from "react";

import {
  HashRouter as Router,
  Route,
  Link
} from "react-router-dom";

import App from "./containers/App/AppContainer";

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={App}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
);

export default Routes;