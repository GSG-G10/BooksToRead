import React, { useState } from "react";
import Card from "./Card";
import "./componentCss/Newest.css";

const data = JSON.parse(localStorage.getItem("data"));

const Added = () => {
  return (
    <div className="newest">
      <div className="new-data">
        {data && data.map((ele) => <Card key={data.indexOf(ele)} data={ele} />)}
      </div>
    </div>
  );
};

export default Added;
