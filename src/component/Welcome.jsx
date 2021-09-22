import React from "react";
import SearchBtn from "./buttons/SearchBtn";
import "./componentCss/Welcome.css";
import "./componentCss/Header.css";
const Welcome = () => {

  return (
      <div className="basic">
        <div className="text-box">
          <h1 className="title">To-Do list ...What about To-Read list?</h1>
          <h3 className="desc">
            'Is one book enough for fun or do I need a library?' 
            
            All you have to do is go to <SearchBtn /> to add the book you like to your reading list
          </h3>
        </div>
      </div>
  );
};

export default Welcome;
