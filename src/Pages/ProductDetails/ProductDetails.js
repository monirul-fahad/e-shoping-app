import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Header from "../Shared/Header/Header";
import "./ProductDetails.css";
import Footer from "../Shared/Footer/Footer";

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
      <div className=" pt-5">
        {!isLoading && (
          <div className="">
            <div className="py-5 container">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <img
                    className="w-100"
                    src={product.img}
                    alt={product.title}
                  />
                </div>
                <div className="col-md-6 text-start pe-5">
                  <h2 className="fs-1 py-3">{product.title}</h2>
                  <p className="fs-3 text-info">Price- {product.price} BDT</p>
                  <p className="fs-4">{product.desc}</p>
                </div>
              </div>
            </div>
            <div className="order">
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
      <Footer />
    </>
  );
};

export default ProductDetails;
