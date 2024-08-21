import React, { useState } from "react";

const ReviewForm = ({ addReview }) => {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (reviewText.trim()) {
      addReview(reviewText);
      setReviewText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <label htmlFor="review">Leave a review:</label>
      <textarea
        id="review"
        name="review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Leave a review..."
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
