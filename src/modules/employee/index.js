import React from "react";
import { withRouter } from "react-router-dom";

import { API_URL, ROLES } from "../../config";
import NoRecord from "../norecord";
import { isOfficeAssistant, isMechanic, isOwner } from "../../config"

const Employee = (props) => {
  const [employees, setEmployees] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API_URL}/employees`)
    .then(response => response.json())
    .then(data => setEmployees(data))
    .catch(err => console.log(err));
  }, [])

  function handleDelete(employeeID) {
    fetch(`${API_URL}/employees/${employeeID}`)
    .then(response => response.json())
    .then(data => setEmployees(data))
    .catch(err => console.log(err));
  }

  return (
    <div style={{
      marginBottom: "10%"
    }}>
      <h1>Employee List:</h1>
      <hr />
      {employees.length ? <div className="grid-container">
        {employees.map(employee => (
          <>
            <div className="grid-item">
              <div className="data-cell-name"><div className="data-cell-value">First Name:&nbsp; </div>{employee.firstName}</div>
              <div className="data-cell-name"><div className="data-cell-value">Last Name: &nbsp;</div>{employee.lastName}</div>
              <div className="data-cell-name"><div className="data-cell-value">Email: &nbsp;</div>{employee.email}</div>
              <div className="data-cell-name"><div className="data-cell-value">Phone:&nbsp; </div>{employee.phone}</div>
              <div className="data-cell-name"><div className="data-cell-value">Address:&nbsp; </div>{employee.address}</div>
              <div className="data-cell-name" ><div className="data-cell-value">Role:&nbsp; </div><div style={{
                fontWeight: "bold",
                textDecoration:"underline"
              }}>{ROLES[employee.role]}</div></div>
              <div>
                {isOfficeAssistant() && <button style={{
                  backgroundColor: "#649866",
                  color: "black",
                  fontWeight: "bold"
                }} onClick={() => {

                  props.history.push({
                    pathname: "/editEmployee",
                    state: {
                      employeeID: employee.id
                    }
                  })
                }}>Edit</button>}
                {/* <button style={{
                  backgroundColor: "#a96f6f",
                  color: "black",
                  fontWeight: "bold"
                }} onClick={() => {
                }}>Delete</button> */}
              </div>
            </div>

          </>
        ))}
      </div> : <NoRecord />
      }
    </div >
  )
}

export default withRouter(Employee)
