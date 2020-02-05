import React from "react";
import "./App.css";

import ListBooks from "./components/ListBooks.js";
import FavoriteBooks from "./components/FavoriteBooks.js";

class App extends React.Component {
  state = {
    books: [
      {
        id: 1,
        title: "Pulang",
        author: "Leila S Chudori",
        language: "Indonesia",
        image: require("./images/pulang.jpg"),
        rating: "4.43"
      },
      {
        id: 2,
        title: "Bumi Manusia",
        author: "Pramoedya Ananta Tour",
        language: "Indonesia",
        image: require("./images/bumi-manusia.jpg"),
        rating: "4.43"
      },
      {
        id: 3,
        title: "Anak Semua Bangsa",
        author: "Pramoedya Ananta Tour",
        language: "Indonesia",
        image: require("./images/anak-semua-bangsa.jpg"),
        rating: "4.43"
      },
      {
        id: 4,
        title: "Aroma Karsa",
        author: "Dee Lestari",
        language: "Indonesia",
        image: require("./images/aroma-karsa.jpg"),
        rating: "4.43"
      },
      {
        id: 5,
        title: "Laut Bercerita",
        author: "Leila S Chudori",
        language: "Indonesia",
        image: require("./images/laut-bercerita.jpg"),
        rating: "4.43"
      }
    ],
    favorites: []
  };

  //
  addToFavorite = id => {
    const data = this.state.books.find(item => item.id === id);

    this.setState({
      favorites: [...this.state.favorites, data]
    });
  };

  removeFromFavorite = id => {
    this.setState({
      favorites: this.state.favorites.filter(item => item.id !== id)
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <h2>List book</h2>
          <hr></hr>
          <ListBooks books={this.state.books} add={this.addToFavorite} />
          <FavoriteBooks
            favorites={this.state.favorites}
            remove={this.removeFromFavorite}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
