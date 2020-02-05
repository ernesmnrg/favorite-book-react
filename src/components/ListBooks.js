import React from "react";
import "../styles/ListBooksStyle.css";

const ListBooks = props => {
  const product = props.books.map(item => (
    <div className="card-book" key={item.id}>
      <img src={item.image} alt={item.title} className="book-image" />
      <div className="text-box-right">
        <h3>{item.title}</h3>
        <p>by {item.author}</p>
        <p>Language: {item.language}</p>
        <p>Ratings: {item.rating}</p>
        <button onClick={() => props.add(item.id)}>Add to favorite</button>
      </div>
    </div>
  ));
  return <div className="product-container">{product}</div>;
};

export default ListBooks;
