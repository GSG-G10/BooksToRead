import React from "react";
import "./componentCss/Header.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <header>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/new">Newest</Link>
          </li>
          <li>
            <Link to="/read">To Read</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/new"></Route>
        <Route exact path="/read"></Route>
      </Switch>
    </Router>
  );
};

export default Header;
