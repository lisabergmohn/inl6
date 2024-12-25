import React from "react";
import "./Heart.css";

/**
 * Visuell presentation av ett hjärta som är klickbart.
 * Tar emot onClick i prop som kommer från Card.
 *
 *
 */
function Heart({ onClick }) {
  return (
    <div className="heart" onClick={onClick} style={{ cursor: "pointer" }}>
      <span className="heart-image">Add to Favourites</span>
      <svg
        width="1.2em"
        height="1.2em"
        viewBox="0 0 16 16"
        className="bi bi-heart-fill"
        fill="#EE0F8A"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
        />
      </svg>
    </div>
  );
}

export default Heart;
