import React from "react";
import Card from "./Card";
import "./componentCss/Newest.css";


const Added = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  return (
    <div className="newest">
      <div className="new-data">
        {data && data.map((ele) => <Card key={data.indexOf(ele)} data={ele} add={true} />)}
      </div>
    </div>
  );
};

export default Added;
