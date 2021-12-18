import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  const handleUpdate = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Status Updated Successful");
        }
        window.location.reload();
      });
  };

  const handleDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("You are deleting an ordered Product!!")) {
      const url = `http://localhost:5000/orders/${id}`;
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
        <h2>Manage User's Orders</h2>
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Status</th>
              <th>Update Status</th>
              <th>Delete</th>
            </tr>
          </thead>

          {orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.item.name}</td>
                <td>{order.status}</td>
                <td>
                  {" "}
                  {order.status === "pending" ? (
                    <button
                      onClick={() => handleUpdate(order._id)}
                      className="btn btn-warning"
                    >
                      Update
                    </button>
                  ) : (
                    // <button className="btn btn-success">ship</button>
                    "Updated"
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(order._id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
