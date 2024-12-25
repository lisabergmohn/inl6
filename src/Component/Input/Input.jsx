import React from "react";
import Card from "../Card/Card";
import "./Input.css";

/**
 * Appens input som ligger i egen komponent och renderas på 
 * sidan för movies. 
 * Input tar emot anrop från getData (query från movie)
 * 
 * 
 */

function Input({ getData, query, handleQuery }) {
  return (
    <div className="search">
      <form className="form" onSubmit={getData}>
        <h1 className="movie-finder-title">Movie Finder</h1>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleQuery}
        ></input>
        <button className="input-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Input;
