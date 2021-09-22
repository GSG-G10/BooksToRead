import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./componentCss/Newest.css";


const Search = () => {
  const [search, setSearch] = useState("نزار  قباني");
  const [data, setData] = useState(null);
  const [click, setClick] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
console.log(search)
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`, { signal })
      .then((data) => data.json())
      .then((data) => setData(data.items))
      .catch((err) => setErr(err));
    return () => {
    //   controller.abort();
    setTimeout(() => controller.abort(), 2000);
    };
  }, [click]);

  return (
    <div className="newest">
      <label className="input-search">
          <h1 className='desc'>  Search  about you want</h1>
        <input  className='input' type="search" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={() => {setClick(!click)}}>Search</button>
      </label>
      <div className="new-data">
        {data && data.map((ele) => <Card key={ele.etag} data={ele} add={false}/>)}
      </div>
    </div>
  );
};

export default Search;
