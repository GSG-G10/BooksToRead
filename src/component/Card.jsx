import React from "react";
import AddBook from "./AddBookBtn";

const Card = ({ data }) => {

const { volumeInfo } = data;

  return (
    <div className="card">
      <div className="item">
        <div className="img-frame">
          <img
            className="book-image"
            src={volumeInfo.imageLinks.smallThumbnail}
            alt="book"
          />
        </div>

        <div className="info">
          <p>Category: {volumeInfo.categories}</p>
          <p> Author: {volumeInfo.authors[0]}</p>
          <p> puhblished Date: {volumeInfo.publishedDate}</p>
          <p> language: {volumeInfo.language}</p>
          <a className="link-goolge" href={volumeInfo.previewLink}>
            Go to more Details
          </a>
        </div>
      </div>

      <div className="area-btn">
        <p className="book-title">Title: {volumeInfo.title}</p>
        <AddBook data={data} />
      </div>
    </div>
  );
};

export default Card;
