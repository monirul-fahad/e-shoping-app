import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import Sidebar from "../../Sidebar/Sidebar";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://infinite-stream-11817.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const userOrders = orders.filter((orders) => orders.email === user.email);

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("You are deleting an ordered Product!!")) {
      const url = `https://infinite-stream-11817.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = orders.filter((event) => event._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  return (
    <div className="row">
      <Sidebar></Sidebar>
      <div
        className="pt-4 col-md-10 add-product"
        style={{ position: "absolute", right: "0", background: "white" }}
      >
        <h2>Your Ordered Products</h2>
        {userOrders.length === 0 ? (
          <h3>You Haven't Ordered Any Product yet.</h3>
        ) : (
          <Table striped bordered hover className="p-3 shadow">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Cancel Order</th>
              </tr>
            </thead>

            {userOrders.map((order) => (
              <tbody key={order._id}>
                <tr>
                  <td>{order.item.name}</td>
                  <td>${order.item.price}</td>
                  <td>{order.status}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-success"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
