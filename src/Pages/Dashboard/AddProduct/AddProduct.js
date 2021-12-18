import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import Sidebar from "../../Sidebar/Sidebar";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios.post("http://localhost:5000/products", data).then((res) => {
      if (res.data.insertedId) {
        alert("added successfully");
        reset();
      }
    });
  };
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="pt-4 col-md-10 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
        <h2>Add A Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name", { required: true })} placeholder="Name" />
          <input type="number" {...register("price")} placeholder="Price" />
          <input {...register("img")} placeholder="Image URL" />

          <textarea {...register("description")} placeholder="Description" />
          <input type="submit" value="Add This Product" />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
