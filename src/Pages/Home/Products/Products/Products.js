import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h2 className="mt-5 pb-5">Featured Products</h2>
      <div className="container pb-5">
        <div className="row">
          {products.map((product) => (
            <div
              className="col-lg-3 col-md-6  mb-3 product-style"
              key={product._id}
            >
              <Link
                style={{ textDecoration: "none" }}
                className="text-black"
                to={`/productDetails/${product._id}`}
              >
                <img className="w-100" src={product.img} alt={product.title} />
                <h4 className="fs-5 fw-bold">{product.title}</h4>
                <p>TK: {product.price} BDT</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
