import React from "react";
import "./componentCss/Welcome.css";
const Welcome = () => {
  return (

      <div className="welcome">
        <div className="text-box">
          <h1 className="title">To-Do list ...What about To-Read list?</h1>
          <h3 className="desc">
            'Is one book enough for fun or do I need a library?' <br />
            <br />
            All you have to do is go to &nbsp; <span className='link'>Search Section</span>
            &nbsp; to add the book you like to your reading list
          </h3>
        </div>
      </div>
  );
};

export default Welcome;
