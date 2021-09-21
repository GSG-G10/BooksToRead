import React from 'react';

const Card = ({data}) => {
    console.log(data)

    return ( <div className="card">
    
    <div className="item">
      <div className="img-frame">
        <img
          className="book-image"
          src={data.imageLinks.smallThumbnail}
          alt="book"
        />
      </div>

      <div className="info">
        <p>Category: {data.categories}</p>
        <p> Author: {data.authors[0]}</p>
        <p> puhblished Date: {data.publishedDate}</p>
        <p> language: {data.language}</p>
        <a
          className="link-goolge"
          href={data.previewLink}
        >
          Go to more Details
        </a>
      </div>
    </div>

    <div className="area-btn">
      <p className="book-title">Title: {data.title}</p>
    </div> 
  </div>);
}
 
export default Card;