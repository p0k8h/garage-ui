import React from "react";
import { SuccessToaster, ErrorToaster } from "../toaster";

import { API_URL } from "../../config";
import { withRouter } from "react-router";

const Login = (props) => {

  const [user, setUser] = React.useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch(`${API_URL}/auth/login`, {
      body: JSON.stringify(user),
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
        localStorage.setItem("jwtToken", data.token);
        localStorage.setItem("role", data.user.role);
        localStorage.setItem("id", data.user.id);

        props.history.push("/employees");
        SuccessToaster("User Logged In");
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
      marginTop: "50px"
    }}>
      <center> <h1> Login Form </h1> </center>
      <form onSubmit={handleLogin}>

        <div className="container">
          <label>Email : </label>
          <input type="email" placeholder="Enter Email" name="email" required onChange={handleInputChange} className="select" />
          <label>Password : </label>
          <input type="password" placeholder="Enter Password" name="password" required onChange={handleInputChange} />
          <button type="submit" >Login</button>
          <button onClick={() => props.history.push("/register")}>Sign UP for a new Account</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);
