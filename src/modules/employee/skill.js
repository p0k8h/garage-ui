import React from "react";

import { API_URL } from "../../config"
import { SuccessToaster, ErrorToaster } from "../toaster"

const Skill = (props) => {
  const [newSkill, setNewSkill] = React.useState({});

  function handleInputChange(e) {
    const {name, value} = e.target;

    setNewSkill({
      ...newSkill,
      [name]: value
    })
  }

  function handleAddSkill(e) {
    e.preventDefault();

    fetch(`${API_URL}/skills/${props.employeeID}`, {
      method: "POST",
      body: JSON.stringify(newSkill),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(async response => {
      if (response.status === 400) {
        const a = await response.json();
        throw a;
      } else {
        return response.json();
      }
    }).then(data => {
      SuccessToaster("Successfully Added Skill");
      window.location.href = "/editEmployee";
    }).catch(err => {
      const m = err.message || err.sqlMessage || err;
      ErrorToaster(String(m));
    })
  }

  return (
    <div>
      <form onSubmit={handleAddSkill}>
      <div style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        border: "2px solid black"
      }}>
        <h4>Add a New Skill:</h4>
        <div className="container-item">

          <label><b>Skill Name:</b></label>
          <input type="text" placeholder="Skill Name" name="name" required value={newSkill.name} onChange={handleInputChange}/>
        </div>
        <div className="container-item">

          <label><b>Date Received</b></label>
          <input className="select" type="date" placeholder="Date Received" name="dateReceived" required value={newSkill.dateReceived} onChange={handleInputChange}/>
        </div>
        <button onClick={() => props.setShowAddSkillForm(false)}>Cancel</button>
        <button type="submit">Save Skill</button>
      </div>
      </form>
    </div>
  );
};

export default Skill;
