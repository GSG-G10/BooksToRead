import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./componentCss/Header.css";

import Welcome from "./Welcome";
import Newest from "./Newest";
import Added from "./AddedToRead";
import Search from "./Search";
import NewestBtn from "./buttons/NewestBtn";
import HomeBtn from "./buttons/HomeBtn";
import SearchBtn from "./buttons/SearchBtn";
import ToReadBtn from "./buttons/ToReadBtn";

const Header = () => {
  return (
    <Router>
      <header>
        <ul>
          <HomeBtn />
          <NewestBtn />
          <SearchBtn />
          <ToReadBtn />
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
