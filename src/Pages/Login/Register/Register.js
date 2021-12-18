import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, registerUser, authError, isLoading } = useAuth();

  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    registerUser(name, email, password, history);
    e.preventDefault();
  };
  return (
    <>
      <div className="register">
        <div
          className="pt-5 container d-flex align-items-center "
          style={{ height: "100vh" }}
        >
          <div className="col-md-6">
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <h3 className="text-primary">Please Register</h3>

                <input
                  onBlur={handleNameChange}
                  type="text"
                  placeholder="Name"
                  className="form-control mb-3"
                  id="inputName"
                  required
                />

                <input
                  onBlur={handleEmailChange}
                  type="email"
                  placeholder="Email"
                  className="form-control mb-3"
                  id="inputName"
                  required
                />

                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  id="inputPassword3"
                  required
                />

                <button type="submit" className=" mb-3 w-100 btn btn-warning">
                  Register
                </button>
                <br />
                <div className="text-start">
                  Already have an account?
                  <Link to="/login" className="text-danger">
                    Login
                  </Link>
                </div>
              </form>
            )}
            {isLoading && <Spinner animation="border" variant="danger" />}
            {user?.email && (
              <Alert variant="primary">Registration Successful</Alert>
            )}
            {authError && <Alert variant="danger">{authError}</Alert>}
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Register;
