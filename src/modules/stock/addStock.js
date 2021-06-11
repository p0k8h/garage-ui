import React from "react";

import { API_URL } from "../../config";
import { ErrorToaster, SuccessToaster } from "../toaster";

const AddStock = ({setShowAddPage}) => {

  const [stock, setStock] = React.useState({})

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${API_URL}/stocks`, {
      method: "POST",
      body: JSON.stringify({
        ...stock,
        employeeID: localStorage.getItem("id")
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    })
    .then(data => {
      SuccessToaster("Stock added successfully.");
      window.location.href = "/stocks"
    })
    .catch(err => {
      const m = err.message || err.sqlMessage || err;

      ErrorToaster(String(m))
    });
  }

  function handleInputChange(e) {
    const {name, value} = e.target;

    setStock({
      ...stock,
      [name]: value
    })
  }

  return (
    <div style={{
      margin: "auto",
      width: "50%"
    }} >
      <form onSubmit={handleSubmit}>
      <div className="container">
        <label for="name"><b>Name</b></label>
        <input type="text" placeholder="Stock Name" name="name" required onChange={handleInputChange} value={stock.name}/>
        <label for="itemID"><b>Item ID</b></label>
        <input type="text" placeholder="Item ID" name="itemID" required onChange={handleInputChange} value={stock.itemID}/>

        <label for="totalItems"><b>Total Items</b></label>
        <input className="select" type="number" placeholder="Total Items" name="totalItems" required onChange={handleInputChange} value={stock.totalItems}/>

        <div style={{
          display: "flex",
          justifyContent: "space-between"
        }}>
          <button style={{
            width: "30%"
          }}
          onClick={() => {
            setShowAddPage(false)
          }}
          >Cancel</button>
          <button style={{
            width: "30%"
          }}
          type="submit"
          >Save</button>
        </div>

      </div>
      </form>
    </div>
  );
};

export default AddStock;
