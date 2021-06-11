import React from "react";
import "./index.css";

import { API_URL, ROLES } from "../../config";
import Skill from "./skill";
import { SuccessToaster, ErrorToaster } from "../toaster"

const EditEmployee = (props) => {
  const employeeID = props.location.state.employeeID;

  const [employee, setEmployee] = React.useState({});
  const [skills, setSkills] = React.useState([]);
  const [showAddSkillForm, setShowAddSkillForm] = React.useState(false);

  React.useEffect(() => {
    fetch(`${API_URL}/employees/${employeeID}`)
      .then(response => response.json())
      .then(data => {
        setEmployee(data.employee[0]);
        setSkills(data.skills);
      })
      .catch(err => console.log(err));
  }, [employeeID]);

  function handleInputChange(e) {
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value
    });
  }

  function handleUpdate() {
    fetch(`${API_URL}/employees/${employeeID}`, {
      method: "PUT",
      body: JSON.stringify(employee),
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
        SuccessToaster("Updated successfully!!");
      })
      .catch(err => {
        const m = err.message || err.sqlMessage || err;
        ErrorToaster(String(m));
      });
  }

  return (
    <>
      <h1>Edit Employee:</h1>
      <hr />
      <div style={{
        margin: "auto",
        width: "50%",
        border: "2px solid black",
        padding: "10px"
      }}>
        <div className="container" style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px"
        }}>
          <div className="container-item">
            <label><b>Employee No:</b></label>
            <input style={{
              backgroundColor: "#a4b3a4",
              cursor: "not-allowed"
            }} type="text" placeholder="id" name="id" required value={employee.id} readOnly />
          </div>
          <div className="container-item">
            <label><b>Email:</b></label>
            <input style={{
              backgroundColor: "#a4b3a4",
              cursor: "not-allowed"
            }} className="select" type="email" placeholder="email" name="email" required value={employee.email} readOnly />
          </div>
          <div className="container-item">
            <label><b>First Name:</b></label>
            <input type="text" placeholder="First Name" name="firstName" required value={employee.firstName} onChange={handleInputChange} />
          </div>
          <div className="container-item">
            <label><b>Last Name</b></label>
            <input type="text" placeholder="Last Name" name="lastName" required value={employee.lastName} onChange={handleInputChange} />
          </div>
          <div className="container-item">
            <label><b>Phone</b></label>
            <input type="text" placeholder="phone" name="phone" required value={employee.phone} onChange={handleInputChange} />
          </div>
          <div className="container-item">
            <label><b>Address</b></label>
            <input type="text" placeholder="address" name="address" required value={employee.address} onChange={handleInputChange} />
          </div>
          <div className="container-item">
            <label><b>Role</b></label>
            <input style={{
              backgroundColor: "#a4b3a4",
              cursor: "not-allowed"
            }} type="text" placeholder="role" name="role" required value={ROLES[employee.role]} readOnly />
          </div>
          <div className="container-item">
            <button onClick={() => {
              props.history.goBack()
            }}>Go Back</button>
            <button style={{
              marginLeft: '20px'
            }} onClick={handleUpdate}>Update Employee</button>
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "flex-end"
        }}>
          <button style={{
            width: "fit-content"
          }} onClick={() => {
            setShowAddSkillForm(true);
          }}>Add a New Skill</button>
        </div>
        <div>
          {
            showAddSkillForm && (
              <>
                <Skill showAddSkillForm={setShowAddSkillForm} setShowAddSkillForm={setShowAddSkillForm} employeeID={employee.id} />
              </>
            )
          }
        </div>

        {!!skills.length && skills.map(skill => (
          <div style={{
            border: "1px solid black",
            margin: "5px"
          }}>
            <h2>Skills:</h2>
            <div style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              margin: "10px"
            }}>

              <div className="container-item">

                <label><b>Skill No:</b></label>
                <input type="text" placeholder="role" name="id" required value={skill.id} />
              </div>
              <div className="container-item">

                <label><b>Skill Name:</b></label>
                <input type="text" placeholder="role" name="name" required value={skill.name} />
              </div>
              <div className="container-item">

                <label><b>Date Received</b></label>
                <input type="text" placeholder="role" name="dateReceived" required value={skill.dateReceived} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EditEmployee;
