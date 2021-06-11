import React from "react";
import { withRouter } from "react-router";
import { API_URL } from "../../config";
import { SuccessToaster, ErrorToaster } from "../toaster";

const Job = (props) => {

  const [job, setJob] = React.useState({
    role: 1
  });

  function handleInputChange(e) {
    const { name, value } = e.target;

    setJob({
      ...job,
      [name]: value
    });

  }

  function handleJob(e) {
    e.preventDefault();

    fetch(`${API_URL}/jobs`, {
      body: JSON.stringify({ ...job, employeeID: localStorage.getItem("id") }),
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
