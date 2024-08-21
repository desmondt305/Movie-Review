import React from "react";
import Review from "./Review";

const ReviewList = ({ reviews }) => {
  if (!reviews) {
    return null;
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <Review key={index} text={review} />
      ))}
    </div>
  );
};

export default ReviewList;
