import React from "react";

const Footer = () => {

  React.useEffect(() => {
    console.log("document.documentElement.offsetHeight", document.documentElement.offsetHeight)
  },[])

  return (
    <div style={{
      backgroundColor: "black",
    }}>
      {/* <footer > */}
        <div class="footer-links">
          <div class="menu">
            <h4 class="menu-title">Get In Touch</h4>
            <a class="other-links">vir.singha@gmail.com</a>
            <br/>
            <a class="other-links">+61451825371</a>
          </div>
        </div>
        <p class="copyright">&copy; Copyright 2021 |  Famous Garage</p>
      {/* </footer> */}
    </div>
  );
};

export default Footer;
