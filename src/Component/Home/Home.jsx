import React from "react";
import "./Home.css";

/**
 * Movie Finders första sida. Presentation av nonsenstext
 * 
 */
function Home() {
  return (
    <div className="home-container">
      <h1 className="main-title">Movie Finder</h1>
      <div className="text-container-l">
        <p>
          Dive into the world of cinema with MovieFinder, a powerful database
          that connects you to thousands of movies sourced from the extensive
          OMDB API. Search for your favorite films, discover new titles, and see
          them paired with stunning images from Unsplash.
        </p>
        <h2>What Can Movie Finder Do?</h2>
        <p>
          Search through thousands of movies and explore a massive library of
          films with detailed information, including title and release year.
          Search by movie title or keywords to find exactly what you're looking
          for.
        </p>
        <h2>Visualize Your Search</h2>
        <p>
          Get a visual treat as each movie is paired with beautiful and relevant
          images from Unsplash. Enjoy a modern and immersive browsing
          experience.
        </p>
        <h2>Save Your Favorites</h2>
        <p>
          Add movies to your Favorites with just a click. Access your saved
          favorites anytime under the "Favorites" section.
        </p>
        <h2>Personalized Experience</h2>
        <p>
          Create your own curated movie list for easy reference and sharing.
          Rediscover your favorite movies or build a watchlist for the future.
        </p>
      </div>
      <div className="text-container-r">
        <h2>Why Choose Movie Finder?</h2>
        <h3>Comprehensive Movie Data</h3>
        <p>
          Powered by the OMDB API, MovieFinder provides accurate and up-to-date
          movie information.
        </p>
        <h3>Stunning Visuals</h3>
        <p>
          Images from Unsplash bring your searches to life, making MovieFinder
          not just a database but an experience.
        </p>
        <h3>Seamless Functionality</h3>
        <p>
          Enjoy fast, easy-to-navigate features with a clean and responsive
          design.
        </p>
      </div>
    </div>
  );
}

export default Home;
