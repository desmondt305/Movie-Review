// Stars.js
import React, { useState } from "react";
import "./Stars.css";

const Stars = ({ rating, onRate }) => {
  // useState to manage the state for hoverRating
  const [hoverRating, setHoverRating] = useState(0);

  // Function to handle when the mouse enters a star
  const handleMouseEnter = (index) => {
    setHoverRating(index); // Set hoverRating to the star's index
  };

  // Function to handle when the mouse leaves a star
  const handleMouseLeave = () => {
    setHoverRating(0); // Reset hoverRating to 0
  };

  // Function to handle when a star is clicked
  const handleClick = (index) => {
    onRate(index); // Call the onRate function passed as a prop with the star's index
  };

  return (
    <div className="stars">
      {" "}
      {/* Container for the star rating */}
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index} // Unique key for each star
          className={`star ${index <= (hoverRating || rating) ? "filled" : ""}`} // Apply 'filled' class if the star is filled
          onMouseEnter={() => handleMouseEnter(index)} // Handle mouse enter event
          onMouseLeave={handleMouseLeave} // Handle mouse leave event
          onClick={() => handleClick(index)} // Handle click event
        >
          ★ {/* Star character */}
        </span>
      ))}
    </div>
  );
};

export default Stars;
