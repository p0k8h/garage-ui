import React from "react";
import { Link, withRouter } from "react-router-dom";

import "./index.css";
import NavBar1 from "./navbar";

const NavBar = (props) => {

  function logout() {
    localStorage.clear();
  }

  const checkAuth = () => {
    const token = localStorage.getItem("jwtToken");
    if (!token) {
      return false;
    }
    return true;
  };

  return (
    <>
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li>
            <Link to="/car">Car Mechanics</Link>
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>

          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>

          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>

          </li>
          {/* <li>
            <Link to="/book">Book a service</Link>

          </li> */}
          <li className="drop">
            <a>
              USER
      </a>
            <ul className="user nav-list">
              {checkAuth() ? <>
                <li>
                  <Link to="/home" onClick={logout}>Log Out </Link>
                </li>
              </> : <>
                <li>

                  <Link to="/login">Log In</Link>
                </li>
                <li>
                  <Link to="/register">Sign Up</Link>

                </li>
              </>}
            </ul>
          </li>
        </ul>
      </nav>



      { checkAuth() && <NavBar1 />}

    </>
  );
};

export default withRouter(NavBar);
