import React from "react";
import Heart from "../Heart/Heart";
import "./Card.css";

/**
 * -Card-komponent: alla sökresultat presenteras utifrån cardstrukturen.
 * Card får prop addfavorite vilket gör att användaren kan spara en 
 * film som favorit.
 * Card-komponenten renderas på movie-komponentens sida
 */

function Card({ movies, addFavourite }) {
  return (
    <div className="card-container">
      {movies.map((movie, index) => (
        <div key={index} className="card">
          <img
            className="image"
            src={movie.image || "https://via.placeholder.com/150"}
            alt={movie.Title}
          />
          <h3 className="title">{movie.Title || "No title"}</h3>
          <p className="year">({movie.Year || "No year"})</p>
          <Heart onClick={() => addFavourite(movie)} />
        </div>
      ))}
    </div>
  );
}

export default Card;
