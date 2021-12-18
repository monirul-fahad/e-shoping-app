import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-white text-start banner-text">
            <p className="fs-5 fw-bold text-color">Handmade Basics</p>
            <h1 className="fw-bold mb-4 fs-1 text-black">
              <span className="highlight-text">MODERN</span> & EASY
            </h1>
            <p className="fs-5 fw-bold text-color mb-4">
              Sunglass improves personality and smartness. But You need perfect
              glass to match with you. We've thousands of stylist sunglasses in
              our collection. Choose your glass and be smart.
            </p>
            <h2 className="fs-3 fw-bold text2-color mb-3">
              50% OFF ON WINTER COLLECTIONS
            </h2>
            <button className="btn btn-warning px-3 fw-bold py-2">
              Shop Now{" "}
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
