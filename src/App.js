import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MovieList";
import Stars from "./Components/Stars"; // Import the Stars component

const App = () => {
  // State to hold the list of movies
  const [movieList, setMovieList] = useState([]);

  // Initial list of movies with details
  const movies = [
    {
      id: "1",
      title: "Friday",
      synopsis:
        "It's Friday and Craig Jones (Ice Cube) has just gotten fired for stealing cardboard boxes...",
      image: "/images/friday.jpg",
      rating: 5,
      reviews: [],
    },
    {
      id: "2",
      title: "Goodfellas",
      synopsis:
        "Goodfellas is a 1990 Martin Scorsese-directed crime biopic based on the true story of Henry Hill...",
      image: "/images/goodfellas.jpeg",
      rating: 4,
      reviews: [],
    },
    {
      id: "3",
      title: "Casino",
      synopsis:
        "Sam Rothstein (De Niro), a sports handicapper and mob associate, is sent to Las Vegas...",
      image: "/images/casino.jpg",
      rating: 5,
      reviews: [],
    },
  ];

  // Set the movie list when the component first loads
  useEffect(() => {
    setMovieList(movies);
  }, []);

  // Function to add a new review to a movie
  const addReview = (movieId, reviewText) => {
    setMovieList((prevList) =>
      prevList.map((movie) =>
        movie.id === movieId
          ? { ...movie, reviews: [...movie.reviews, reviewText] } // Add review to the correct movie
          : movie
      )
    );
  };

  // Function to update the rating of a movie
  const updateRating = (movieId, newRating) => {
    setMovieList((prevList) =>
      prevList.map(
        (movie) =>
          movie.id === movieId ? { ...movie, rating: newRating } : movie // Update the rating of the correct movie
      )
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie List</h1>
      </header>
      {/* Pass movies, addReview, and updateRating functions to MovieList */}
      <MovieList
        movies={movieList}
        addReview={addReview}
        updateRating={updateRating}
      />
    </div>
  );
};

export default App;
