import React from "react";
import { Link } from "react-router-dom";

const SearchBtn = () => {
  return (
    <li className ='link'>
      <Link to="/search">Search</Link>
    </li>
  );
};

export default SearchBtn;
