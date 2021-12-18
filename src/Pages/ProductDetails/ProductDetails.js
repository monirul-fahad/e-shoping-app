import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Header from "../Shared/Header/Header";
import "./ProductDetails.css";

const ProductDetails = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { user, isLoading } = useAuth();

  const onSubmit = (data) => {
    const productDetails = product;
    data.item = productDetails;
    data.status = "pending";
    axios
      .post("https://infinite-stream-11817.herokuapp.com/orders", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Order Placed successfully");
          reset();
        }
      });
  };
  useEffect(() => {
    fetch(`https://infinite-stream-11817.herokuapp.com/products/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <>
      <Header></Header>
      <div className="container my-5 py-5">
        <h2 className="mb-5">Confirm you order </h2>
        {!isLoading && (
          <div className="row">
            <div className="col-md-5">
              <div className="card text-start">
                <img
                  src={product.img}
                  className="card-img-top order-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <h6 className="card-title">${product.price}</h6>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-7 order">
              <h2>place your order</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  {...register("name", { required: true })}
                  placeholder="Name"
                  defaultValue={user.displayName}
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="email"
                  defaultValue={user.email}
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                />
                <input
                  type="number"
                  {...register("phone")}
                  placeholder="phone"
                />

                <input type="submit" />
              </form>
            </div>
          </div>
        )}
        {isLoading && <Spinner animation="border" variant="danger" />}
      </div>
    </>
  );
};

export default ProductDetails;
