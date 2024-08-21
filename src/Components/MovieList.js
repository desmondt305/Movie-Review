import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
import ReviewForm from "./ReviewForm";
import Stars from "./Stars"; // Import the Stars component
import "./MovieList.css"; // Import the CSS file for styling

// Component to display the list of movies
const MovieList = ({ movies, addReview, updateRating }) => {
  return (
    <div className="movie-list">
      {/* Loop through each movie and display its details */}
      {movies.map((movie) => (
        <Card key={movie.id} className="movie-card">
          {/* Movie image */}
          <CardImg
            top
            src={movie.image}
            alt={movie.title}
            className="movie-img"
          />
          <CardBody>
            {/* Movie title */}
            <CardTitle tag="h5">{movie.title}</CardTitle>
            {/* Movie synopsis */}
            <CardText>{movie.synopsis}</CardText>
            <CardFooter>
              {/* Display and allow users to rate the movie using the Stars component */}
              <Stars
                rating={movie.rating}
                onRate={(rating) => updateRating(movie.id, rating)}
              />
              {/* Display list of reviews */}
              <ul>
                {movie.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
              {/* Form to add a new review */}
              <ReviewForm
                addReview={(reviewText) => addReview(movie.id, reviewText)}
              />
            </CardFooter>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

// Prop types validation to ensure correct props are passed
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      synopsis: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      reviews: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  addReview: PropTypes.func.isRequired,
  updateRating: PropTypes.func.isRequired,
};

export default MovieList;
