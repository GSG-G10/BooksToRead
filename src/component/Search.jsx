import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import "./componentCss/Newest.css";

const Search = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [click, setClick] = useState(false);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${click}`, { signal })
      .then((data) => data.json())
      .then((data) => setData(data.items))
      .catch((err) => setErrors(err));
    return () => {
      controller.abort();
    };
  }, [click]);

  return (
    <Fragment>
      <div className="newest">
        <label className="input-search">
          <h1 className="desc"> Search about you want</h1>
          <input
            className="input"
            type="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={() => {
              setClick(search);
            }}
          >
            Search
          </button>
        </label>
        <h3>{errors}</h3>
        <div className="new-data">
          {data &&
            data.map((ele) => <Card key={ele.etag} data={ele} add={false} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default Search;
