import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section id="welcome-section" className="welcome-section">
        <h2>
          Welcome to
    </h2>
        <h1>
          Famous Garage
    </h1>
      </section>
      <section id="home-intro" className="content">
        <h1 style={{ fontSize: 'xxx-large' }}>
          Why Choose Famous Garage?
    </h1>
        <p className="wel-p">
          At Famous Garage, we offer a wide variety of best car services like Car Maintenance, Log Book Service, Brake and Suspension Repair, Gearbox and Clutch Repair, EFI Diagnostic and Repair, Periodic Services, Denting &amp; Painting, Batteries Replacement, AC Service &amp; Repair, Tyre Replacement &amp; Wheelcare, Car Detailing, Custom Services, Windshields &amp; Glass Replacement, Lights &amp; Fitments, Car Accessories and much more.
    </p>
        <p className="wel-p">
        <Link to="/about-us">Know More</Link>

        </p>
      </section>
    </>

  );
};

export default Home;
