import React from "react";
import PropTypes from "prop-types";
//Importing card components from reactstrap//
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "reactstrap";
//Importing the ReviewForm Component//
import ReviewForm from "./ReviewForm";
//Takes movies and addReview as props//
//div className is the conatianer for the MovieList Component//
const MovieList = ({ movies, addReview }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Card key={movie.id} className="mb-4" style={{ width: "18rem" }}>
          <CardImg
            top
            src={movie.image}
            alt={movie.title}
            className="img-fluid"
          />
          <CardBody>
            <CardTitle tag="h5">{movie.title}</CardTitle>
            <CardText>{movie.synopsis}</CardText>
            <CardFooter>
              <small className="text-muted">Rating: {movie.rating}/5</small>
              <ul>
                {movie.reviews.map((review, index) => (
                  <li key={index}>{review}</li>
                ))}
              </ul>
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
};

export default MovieList;
