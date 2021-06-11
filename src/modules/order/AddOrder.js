import React from "react";

import { API_URL } from "../../config";
import { ErrorToaster, SuccessToaster } from "../toaster";

const AddOrder = ({setShowAddPage}) => {

  const [order, setOrder] = React.useState({})

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${API_URL}/orders`, {
      method: "POST",
      body: JSON.stringify({
        ...order,
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
      SuccessToaster("Order added successfully.");
      window.location.href = "/orders"
    })
    .catch(err => {
      const m = err.message || err.sqlMessage || err;

      ErrorToaster(String(m))
    });
  }

  function handleInputChange(e) {
    const {name, value} = e.target;

    setOrder({
      ...order,
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
        <label for="amount"><b>Amount</b></label>
        <input type="text" placeholder="Amount" name="amount" required onChange={handleInputChange} value={order.amount}/>
        <label for="partName"><b>Part Name</b></label>
        <input type="text" placeholder="Part Name" name="partName" required onChange={handleInputChange} value={order.partName}/>

        <label for="modelNumber"><b>Model Number</b></label>
        <input type="text" placeholder="Model Number" name="modelNumber" required onChange={handleInputChange} value={order.modelNumber}/>

        <label for="size"><b>Size</b></label>
        <input type="text" placeholder="Size" name="size" required onChange={handleInputChange} value={order.size}/>

        <label for="quantity"><b>Quantity</b></label>
        <input type="text" placeholder="Quantity" name="quantity" required onChange={handleInputChange} value={order.quantity}/>

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

export default AddOrder;
