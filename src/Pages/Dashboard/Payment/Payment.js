import React from "react";
import Sidebar from "../../Sidebar/Sidebar";

const Payment = () => {
  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="pt-4 col-md-10 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
        <h2> payment method coming soon</h2>
      </div>
    </div>
  );
};

export default Payment;
