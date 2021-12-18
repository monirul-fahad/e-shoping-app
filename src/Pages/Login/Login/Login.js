import React, { useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loginUser, isLoading, authError } = useAuth();

  const location = useLocation();
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    loginUser(email, password, location, history);

    e.preventDefault();
  };
  return (
    <div className="login">
      <div
        className="pt-5 container d-flex align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-6">
          {!isLoading && (
            <form onSubmit={handleSignUp}>
              <h3 className="text-warning">Please Login</h3>

              <input
                onBlur={handleEmailChange}
                type="email"
                className="form-control mb-3"
                id="inputName"
                required
              />

              <input
                onBlur={handlePasswordChange}
                type="password"
                className="form-control mb-3"
                id="inputPassword3"
                required
              />
              <button type="submit" className=" mb-3 w-100 btn btn-warning">
                Login
              </button>
              <br />
              <div className="text-start">
                Don't have an account?
                <Link to="/register" className="text-danger">
                  Register
                </Link>
              </div>
            </form>
          )}
          {isLoading && <Spinner animation="border" variant="danger" />}
          {user?.email && <Alert variant="primary">Login Successful</Alert>}
          {authError && <Alert variant="danger">{authError}</Alert>}
        </div>
        <div className="col-md-6"></div>
      </div>
    </div>
  );
};

export default Login;
