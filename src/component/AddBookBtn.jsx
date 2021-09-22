import React, { Fragment } from "react";
import "./componentCss/AddBtn.css";

const AddBook = ({ data }) => {
  const { etag } = data;

  const addToList = () => {
    if (JSON.parse(localStorage.getItem("data")) == null) {
      let newData = JSON.stringify([data]);
      localStorage.setItem("data", newData);
    } else {
      let oldData = JSON.parse(localStorage.getItem("data"));
      const newNew = JSON.stringify([...oldData, data]);
      return localStorage.setItem("data", newNew);
    }
  };
  return (
    <Fragment>
      <button
        className="btn-add"
        value={etag}
        onClick={(e) => {
          addToList(e);
        }}
      >
        Add to list
      </button>
    </Fragment>
  );
};

export default AddBook;
