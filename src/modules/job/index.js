import React from "react";
import { withRouter } from "react-router-dom";

import { API_URL } from "../../config";
import NoRecord from "../norecord";
import AddJob from "./AddJob";

import { SuccessToaster, ErrorToaster } from "../toaster";

const Employee = (props) => {
  const [jobs, setJobs] = React.useState([]);
  const [showAddPage, setShowAddPage] = React.useState(false);

  React.useEffect(() => {
    fetch(`${API_URL}/jobs`)
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(err => console.log(err));
  }, []);

  function handleDelete(jobID) {
    fetch(`${API_URL}/jobs/${jobID}`, {
      method: "DELETE"
    }).then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    }).then(data => {
      SuccessToaster("Job Deleted successfully");
      window.location.href = "/jobs";
    })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  return (
    <div style={{
      marginBottom: "10%"
    }}>
      <h1>Job List:</h1>
      <hr />
      <button onClick={() => {
        setShowAddPage(true);
      }}
        style={{
          width: "30%"
        }}
      >Add a Job</button>
      {
        showAddPage ? <>
          <AddJob setShowAddPage={setShowAddPage} />
        </> : <>
          {jobs.length ? <div className="grid-container">
            {jobs.map(job => (
              <>
                <div className="grid-item">
                  <div className="data-cell-name"><div className="data-cell-value">ID:&nbsp; </div>{job.id}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Job Name: &nbsp;</div>{job.name}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Customer Name: &nbsp;</div>{`${job.firstName} ${job.lastName}`}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Hours: &nbsp;</div>{job.hours}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Amount: &nbsp;</div>$ {job.amount}</div>
                  <div className="data-cell-name"><div className="data-cell-value">Is Job Completed:&nbsp; </div>{job.isCompleted ? "YES" : "NO"}</div>
                  <div>
                    <button style={{
                      backgroundColor: "#a96f6f",
                      color: "black",
                      fontWeight: "bold"
                    }} onClick={() => {
                      handleDelete(job.id);
                    }}>Delete</button>
                  </div>
                </div>

              </>
            ))}
          </div> : <NoRecord />
          }
        </>
      }
    </div >
  );
};

export default withRouter(Employee);
