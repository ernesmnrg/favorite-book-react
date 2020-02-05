import React from "react";
import "../styles/FavoriteBooks.css";

let FavBooks = props => {
  let list = props.favorites.map(item => (
    <div className="fav-card-books" key={item.id}>
      <img src={item.image} alt={item.title} className="fav-books-image" />
      <div className="fav-text-box-right">
        <h3>{item.title}</h3>
        <p>by {item.author}</p>
        <p>Language: {item.language}</p>
        <p>Ratings: {item.rating}</p>
        <button onClick={() => props.remove(item.id)}>Remove</button>
      </div>
    </div>
  ));
  return <div className="fav-product-container">{list}</div>;
};

export default FavBooks;
