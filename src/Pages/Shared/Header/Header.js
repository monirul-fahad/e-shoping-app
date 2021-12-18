import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, isLoading, logOut } = useAuth();
  return (
    <>
      <Navbar
        style={{ position: "absolute", left: 0, top: 0, right: 0, zIndex: 3 }}
        expand="lg"
        className="header-nav"
      >
        <Container>
          <Navbar.Brand
            as={Link}
            style={{ fontSize: "30px" }}
            className="web-name header-logo fw-bold text-black"
            to="/"
          >
            FASH HOUSE
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className=" fw-bold text-black" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className=" fw-bold text-black" as={Link} to="/explore">
                Explore
              </Nav.Link>
              <Nav.Link className=" fw-bold text-black" as={Link} to="#">
                About
              </Nav.Link>
              <Nav.Link className=" fw-bold text-black" as={Link} to="#">
                Contact
              </Nav.Link>

              {user?.email ? (
                <>
                  <Nav.Link
                    className=" fw-bold text-black"
                    as={Link}
                    to="/dashboard"
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    onClick={logOut}
                    className="active ms-lg-5 p-1 px-4 btn btn-danger text-white border-box"
                  >
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  className="active ms-lg-5 p-1 px-4 btn btn-warning text-black border-box"
                >
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
