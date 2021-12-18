import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-area py-5 ">
      <Container>
        <footer className="row text-start">
          <div className="col-md-6 col-lg-3 ">
            <h3>FASH HOUSE</h3>
            <p>
              We provide handmade, homemade, stylist designing cloths and
              dresses for your daily uses and casual uses. Our priority is you
              and your satisfaction. We'll never disappointed in quality and
              pricing
            </p>
          </div>
          <div className="col-md-6 col-lg-3 ">
            <h3>Pages</h3>
            <a href="/">Home</a>
            <br />
            <a href="/">About Us</a>
            <br />
            <a href="/">Products</a>
            <br />
            <a href="/">Reviews</a>

            <br />
            <a href="/">Contact</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Branches</h3>
            <a href="#">Uttara</a>
            <br />
            <a href="#">Mohammadpur</a>
            <br />
            <a href="#">Bonani</a>
            <br />
            <a href="#">Gulshan</a>
            <br />
            <a href="#">Dhanmandi</a>
          </div>
          <div className="col-md-6 col-lg-3">
            <h3>Contacts</h3>
            <h5>Phone: +88 01879664431</h5>
            <p>E-mail: fahad@gmail.com</p>
            <br />
            <p>Address: 15/A Dhanmandi Dhaka, 1214</p>
          </div>
        </footer>
        <div className="text-center mt-3">
          <p>Copyright © {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
