import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Movie from "./Component/Movie/Movie";
import FavouriteList from "./Component/FavouriteList/FavouriteList";

/**
 *
 * I app skapas addfavourite och deletefavorite-funktionerna eftersom
 * de ska skickas som props till flera olika komponenter.
 * Efter som resultatet i favoriter ska sparas när sidan laddas om
 * ligger localestorage i useEffect. useEffect renderas när sidan laddas.
 *
 * i app-komponenten ligger också hela movie finder routes, dvs
 * hur och vilken väg sidan ska ta när den laddas.
 * Route anger specifik väg och vilken väg som ska renderas.
 */

function App() {
  const [favourites, setFavourites] = useState([]);

  function addFavourite(movie) {
    console.log("addFavorite triggered for:", movie);
    const isFavourite = favourites.some((fav) => fav.imdbID === movie.imdbID);

    if (isFavourite) {
      alert("Favourit already added!");
      return;
    }

    const newFavourites = [...favourites, movie];
    setFavourites(newFavourites);
    console.log("Updated favourites:", newFavourites);
    //setItem
    localStorage.setItem("favourites", JSON.stringify(newFavourites));
  }

  function deleteFavourite(movie) {
    const saveDeleted = favourites.filter((fav) => fav.imdbID !== movie.imdbID);
    setFavourites(saveDeleted);

    localStorage.setItem("favourites", JSON.stringify(saveDeleted));
  }

  //sätter initialt värde, dvs det som är sparat från localstorage
  useEffect(() => {
    //getItem
    const savedItems = JSON.parse(localStorage.getItem("favourites")) || [];
    setFavourites(savedItems);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={<Movie addFavourite={addFavourite} />}
          />
          <Route
            path="/FavouriteList"
            element={
              <FavouriteList
                favourites={favourites}
                deleteFavourite={deleteFavourite}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
