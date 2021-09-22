import React from "react";
import "./componentCss/Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Newest from "./Newest";
import Added from "./AddedToRead";
import Search from "./Search";

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
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/read">To Read</Link>
          </li>
        </ul>
      </header>

      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>

        <Route exact path="/new">
          <Newest />
        </Route>

        <Route exact path="/search">
          <Search />
        </Route>

        <Route exact path="/read">
          <Added />
        </Route>
        
      </Switch>
    </Router>
  );
};

export default Header;
