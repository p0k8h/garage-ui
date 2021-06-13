import React from "react";
import { withRouter } from "react-router";
import { API_URL } from "../../config";
import { SuccessToaster, ErrorToaster } from "../toaster";

const Job = (props) => {

  const [job, setJob] = React.useState({
    role: 1
  });
  const [customers, setCustomers] = React.useState([])
  const [selectedCustomerId, setSelectedCustomerId] = React.useState();

  function handleInputChange(e) {
    const { name, value } = e.target;

    setJob({
      ...job,
      [name]: value
    });

  }

  function handleSelectInputChange(e) {

    const { value } = e.target;

    setSelectedCustomerId(value);
  }

  React.useEffect(() => {
    fetch(`${API_URL}/customers`).then(response => response.json()).then(data => {
      if (data.length === 0) {
          ErrorToaster("No customers found to generate invoice")
          ErrorToaster("Please add a customer first")
      }
      setCustomers(data)
      const [customer] = data;
      setSelectedCustomerId(customer?.id);

    }).catch(err => console.log(err))
  }, [])

  function handleJob(e) {
    e.preventDefault();

    fetch(`${API_URL}/jobs`, {
      body: JSON.stringify({ ...job, employeeID: localStorage.getItem("id"), customerID: selectedCustomerId }),
      method: "POST",
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
        SuccessToaster("Job added successfully.");
        props.setShowAddPage(false);
        window.location.href = "/jobs";
      })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  function handleCheckbox(e) {
    const checked = e.target.checked;

    setJob({
      ...job,
      isCompleted: checked
    });
  }

  return (
    <div style={{
      margin: "auto",
      width: "50%",
      border: "2px solid black",
      padding: "10px",
      marginTop: "50px"
    }} >
      <center> <h1>Add a Job:</h1></center>
      <form onSubmit={handleJob}>

        <div className="container">
          <div>

            <label htmlFor="name"><b>Name</b></label>
            <input type="text" className="select" placeholder="Enter Job name" name="name" required onChange={handleInputChange} value={job.name} />
          </div>
          <label htmlFor="hours"><b>Hours</b></label>
          <input type="number" className="select" placeholder="Enter hours" name="hours" required onChange={handleInputChange} value={job.hours} />

          <label htmlFor="amount"><b>Amount</b></label>
          <input type="number" className="select" placeholder="Enter Amount (number)" name="amount" required onChange={handleInputChange} value={job.amount} />

          <label htmlFor="customerID"><b>Customer</b></label>
          <select name="customerID" id="customerID" className="select" onChange={handleSelectInputChange} value={selectedCustomerId}>
            {customers.map(customer => (
              <option value={customer.id}>{`${customer.firstName} ${customer.lastName}`}</option>
            ))}
          </select>

          <div style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: "10px",
            marginBottom: "10px"
          }}>
          <label htmlFor="isCompleted"><b>Is Job Completed</b></label>
          <input style={{
            marginLeft: "20px",
            transform: "scale(1.5)"
          }} type="checkbox" id="myCheck" value={job.isCompleted} onClick={handleCheckbox} ></input>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }}>
            <button style={{
              width: "30%"
            }}
              onClick={() => {
                props.setShowAddPage(false);
              }}
            >Cancel</button>
            <button style={{
              width: "30%"
            }}>Save</button>
          </div>

        </div>
      </form>
    </div >
  );
};

export default withRouter(Job);
