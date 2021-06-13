import React from "react";
import { withRouter } from "react-router";

import { API_URL } from "../../config";
import { ErrorToaster, SuccessToaster } from "../toaster";

const AddCustomer = ({setShowAddPage, history}) => {

  const [customer, setCustomer] = React.useState({})

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${API_URL}/customers`, {
      method: "POST",
      body: JSON.stringify(customer),
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
      SuccessToaster("Customer added successfully.");
      // history.push("/customers")
      window.location.href = "/customers"
    })
    .catch(err => {
      const m = err.message || err.sqlMessage || err;

      ErrorToaster(String(m))
    });
  }

  function handleInputChange(e) {
    const {name, value} = e.target;

    setCustomer({
      ...customer,
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
        <label for="firstName"><b>FirstName</b></label>
        <input type="text" placeholder="FirstName" name="firstName" required onChange={handleInputChange} value={customer.firstName}/>
        <label for="lastName"><b>Last Name</b></label>
        <input type="text" placeholder="Part Name" name="lastName" required onChange={handleInputChange} value={customer.lastName}/>

        <label for="email"><b>Email</b></label>
        <input type="email" className="select" placeholder="Email" name="email" required onChange={handleInputChange} value={customer.email}/>

        <label for="phone"><b>Phone</b></label>
        <input type="text" placeholder="Phone" name="phone" required onChange={handleInputChange} value={customer.phone}/>

        <label for="address"><b>Address</b></label>
        <input type="text" placeholder="Address" name="address" required onChange={handleInputChange} value={customer.address}/>

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

export default withRouter(AddCustomer)
