import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    const user = { email };
    fetch("http://localhost:5000/users", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="pt-4 col-md-10 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
        <h2>Make An Admin</h2>
        <form onSubmit={handleSubmit}>
          <input onBlur={handleOnBlur} type="email" />
          <button type="submit" className="btn btn-success">
            Add Admin
          </button>
        </form>
        <br />
        {success && <Alert variant="primary">Made Admin Successfully</Alert>}
      </div>
    </div>
  );
};

export default MakeAdmin;
