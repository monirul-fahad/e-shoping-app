import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Sidebar.css";

const Sidebar = () => {
  const { logOut, user } = useAuth();
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://infinite-stream-11817.herokuapp.com/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => setAdmin(data.admin));
  }, [user.email]);

  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled li-style">
        <Link style={{ textDecoration: "none" }} to="/">
          <h2 className="glassy">Glassy</h2>
        </Link>
        {!admin && (
          <>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/myOrders"
                className="text-white"
              >
                <span>Order List</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/payment"
                className="text-white"
              >
                <span>Payment</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/review"
                className="text-white"
              >
                <span>Review</span>
              </Link>
            </li>
          </>
        )}

        {admin && (
          <>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/manageOrder"
                className="text-white"
              >
                <span>Manage Order</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/manageProduct"
                className="text-white"
              >
                <span>Manage Product</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/addProduct"
                className="text-white"
              >
                <span>Add Product</span>
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none" }}
                to="/makeAdmin"
                className="text-white"
              >
                <span>Make Admin</span>
              </Link>
            </li>
          </>
        )}
      </ul>
      <div>
        <Link to="/login" className="text-white">
          <button onClick={logOut} className="btn btn-warning">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
