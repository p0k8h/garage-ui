import React from "react";
import SearchImg from "./search.png";

const NoRecord = () => {

  return (
    <div style={{
      marginTop: "70px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "10%"
    }}>
      <img src={SearchImg} alt="search icon" height="100px" style={{
        width: "auto"
      }} />
      <br />
      <h3>No Record Found</h3>
    </div>
  )
}

export default NoRecord;
