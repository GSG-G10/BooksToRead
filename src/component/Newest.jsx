import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./componentCss/Newest.css";

const Newest = () => {
  const [data, setData] = useState(null);
  const [num, setNum] = useState(0);

  useEffect(() => {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=AIzaSyCFvMpaFg1tH1bw8DnjCHlPZhy8EtvdPSo"
    )
      .then((data) => data.json())
      .then((data) => {
        setData(data.items);
      });
  }, []);
//   const click = () => {
//     setNum(num + 1);
//     JSON.stringify(localStorage.setItem("num", num + 1));
//   };

return (
    <div className="newest">
      <div className="new-data">
          {data && data.map((ele) => <Card key={ele.etag} data ={ele.volumeInfo} />
        )}


      </div>
    </div>
  );
};

export default Newest;
