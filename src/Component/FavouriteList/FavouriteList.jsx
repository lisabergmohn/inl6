import React from "react";
import "./FavouriteList.css";

/**
 * Komponent som hanterar alla sparade filmer.
 * Komponenten renderas på en egen sida. 
 * Komponenten tar emot en prop för att hantera deletefavourite
 * (där funktionen skapars i App.jsx)
 * 
 */

function FavouriteList({ favourites, deleteFavourite }) {
  if (!favourites || favourites.length === 0) {
    return <p className="save-text">No saved favourites</p>;
  }

  return (
    <div>
      <h1 className="saved-title">Saved Favourites</h1>
      <div className="favourite-container">
        {favourites.map((favourite, index) => (
          <div key={index} className="delete-card">
            <img
              className="image"
              src={favourite.image || "https://via.placeholder.com/150"}
            ></img>

            <h3 className="title">{favourite.Title}</h3>
            <p className="year">({favourite.Year})</p>
            <button
              className="delete-button"
              onClick={() => deleteFavourite(favourite)}
              style={{ cursor: "pointer" }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteList;
