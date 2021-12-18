/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Sidebar from "../../Sidebar/Sidebar";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-stream-11817.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    if (confirm("You are deleting a product!!")) {
      const url = `https://infinite-stream-11817.herokuapp.com/products/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = products.filter((event) => event._id !== id);
            setProducts(remaining);
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
        <h2>This is Manage product page</h2>
        <Table striped bordered hover className="p-3 shadow">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete Product</th>
            </tr>
          </thead>

          {products.map((product) => (
            <tbody key={product._id}>
              <tr>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-success"
                  >
                    Delete
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

export default ManageProduct;
