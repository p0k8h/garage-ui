import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./index.css";
import { isMechanic, isOwner } from "../config"


const NavBar1 = (props) => {

  return (
    <>
      <nav className="container1">
        <div className="nav-item">
          <Link className="link" to={{
            pathname: "/employees"
          }}>Employees</Link>
        </div>
        <div className="nav-item">
          <Link className="link" to={{
            pathname: "/customers"
          }}>Customer</Link>
        </div>
        <div className="nav-item">
          <Link className="link" to={{
            pathname: "/orders"
          }}>Orders</Link>
        </div>
        <div className="nav-item">
          <Link className="link" to={{
            pathname: "/stocks"
          }}>Stocks</Link>
        </div>
        {
           isMechanic() && <div className="nav-item">
            <Link className="link" to={{
              pathname: "/jobs"
            }}>Jobs Files</Link>
          </div>
        }
        {isOwner() && <div className="nav-item">
          <Link className="link" to={{
            pathname: "/invoice"
          }}>Invoice </Link>
        </div>}
      </nav>
    </>
  );
};

export default withRouter(NavBar1);
