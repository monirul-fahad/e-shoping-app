import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";

const Reviews = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post("http://localhost:5000/reviews", data).then((res) => {
      if (res.data.insertedId) {
        alert("Review added successfully");
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
        <h2>Give Review On Your Used Glass</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name", { required: true })}
            defaultValue={user.displayName}
          />
          <input
            {...register("productName", { required: true })}
            placeholder="Sunglass Name"
          />
          <textarea {...register("description")} placeholder="Review Text" />
          <input
            type="number"
            {...register("rating")}
            placeholder="Put a rating out of 5"
          />

          <input type="submit" value="Submit Review" />
        </form>
      </div>
    </div>
  );
};

export default Reviews;
