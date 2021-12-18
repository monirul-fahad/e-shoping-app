import React from "react";
import "./Testimonial.css";
import Rating from "react-rating";

const Testimonial = ({ review }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div
        style={{ backgroundColor: "white" }}
        className="testimonial-card p-4 rounded mb-5 mx-3 text-start"
      >
        <h3> {review.name}</h3>
        <p>Product: {review.productName}</p>
        <p>{review.description} </p>
        <Rating
          initialRating={parseInt(review.rating)}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
          readonly
        ></Rating>
      </div>
    </div>
  );
};

export default Testimonial;
