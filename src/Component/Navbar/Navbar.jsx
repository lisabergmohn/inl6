import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 *
 * En navbar av enklaste sort
 */

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/FavouriteList">Favourites</Link>
    </nav>
  );
}

export default Navbar;
