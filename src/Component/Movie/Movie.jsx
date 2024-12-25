import React, { useState } from "react";
import Input from "../Input/Input";
import Card from "../Card/Card";
import FavouriteList from "../FavouriteList/FavouriteList";
import "./Movie.css";

/**
 * I denna komponent görs API-anrop, där båda api hämtas samtidigt.
 * Resultaten kombineras i ett gemensamt sök där 
 * sökfunktione där index fån movies (ombdID) jämförs med index i 
 * unsplash. Resultatet presenteras som ett combinedResult och renderas
 * i komponenten Card
 * 
 */
function Movie({ addFavourite }) {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  async function getData(event) {
    event.preventDefault();

    const omdb = `http://www.omdbapi.com/?s=${query}&apikey=ce72d52d`;
    const unsplash = `https://api.unsplash.com/search/photos?query=${query}&client_id=NsfrWiYzTqfnpPZi4I27rd439VtwFxtsN63CglkovG4`;

    try {
      const [movieResponse, imageResponse] = await Promise.all([
        fetch(omdb),
        fetch(unsplash),
      ]);

      if (!movieResponse.ok || !imageResponse.ok) {
        throw new Error("Error calling API");
      }

      const movieData = await movieResponse.json();
      const imageData = await imageResponse.json();

      const movieResult = movieData.Search || [];
      const imageResult = imageData.results || [];

      //kombinera sökresultat från movie och image
      const combineResult = movieResult.map((movie, index) => ({
        //kopiera movie
        ...movie,
        image:
          imageResult[index]?.urls?.small || "https://via.placeholder.com/150",
      }));

      //uppdatera resultat
      setMovies(combineResult);
    } catch (error) {
      console.error("Error data:", error.message);
    }
  }

  function handleQuery(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <div className="movie-container">
        <Input getData={getData} query={query} handleQuery={handleQuery} />

        <Card movies={movies} addFavourite={addFavourite} />
      </div>
    </div>
  );
}

export default Movie;
