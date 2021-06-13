import React from "react";
import { withRouter } from "react-router";
import { API_URL } from "../../config";
import { SuccessToaster, ErrorToaster } from "../toaster";

const SignUp = (props) => {

  const [employee, setEmployee] = React.useState({
    role: 1
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value
    });

  }

  function handleRegister(e) {
    e.preventDefault();

    fetch(`${API_URL}/auth/register`, {
      body: JSON.stringify(employee),
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
        props.history.push("/login");
        SuccessToaster("User Successfully Registered! Please Login...");
      })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  return (
    <div style={{
      margin: "auto",
      width: "50%",
      border: "2px solid black",
      padding: "10px",
      marginTop: "50px",
      marginBottom: "10%"
    }} >
      <center> <h1>Employee Sign Up Form:</h1></center>
      <form onSubmit={handleRegister}>

        <div className="container">
          <label htmlFor="email"><b>Email</b></label>
          <input type="email" className="select" placeholder="Enter Email" name="email" required onChange={handleInputChange} value={employee.email} />
          <label htmlFor="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={handleInputChange} value={employee.password} />

          <label htmlFor="roles"><b>Choose a role</b></label>
          <select name="role" id="role" className="select" onChange={handleInputChange} value={employee.role}>
            <option value={1}>Office Assistant</option>
            <option value={2}>Mechanic</option>
            <option value={3}>Owner</option>
          </select>
          <button type="submit">Register</button>
          <button onClick={() => {
            props.history.push("/login")
          }}>Cancel</button>
        </div>
      </form>
    </div >
  );
};

export default withRouter(SignUp);
