import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="error">
      <div className="container text-center mt-5 pt-5 text-danger">
        <h1 className="h1">404</h1>
        <p className="p">Not Found</p>
        <p className="p2">
          <small>
            The resource requested could not be found on this server.
          </small>
        </p>
        <Nav.Link
          as={Link}
          to="/"
          className="active mt-5 mx-auto fw-blod p-1 px-4 btn btn-info border-box w-50"
        >
          Go Back To Home
        </Nav.Link>
      </div>
    </div>
  );
};

export default NotFound;
