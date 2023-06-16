import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AGENT_API_URL, createAgent, updateAgent, deleteAgentById, makeAgentInit } from "../Services/agentApi";

const DEFAULT_AGENT = {
  agentId: 0,
  firstName: "",
  middleName: "",
  lastName: "",
  dob: "",
  heightInInches: 1,
  agencies: [],
  aliases: []
}

function AgentForm() {

  const [agent, setAgent] = useState(DEFAULT_AGENT);

  const navigate = useNavigate();

  const handleChange = (event) => {
    const updatedAgent = { ...agent };
    if (event.target.type === 'number') {
      // handle NaN
    } else {
      updatedAgent[event.target.name] = event.target.value;
    }
    setAgent(updatedAgent);
  }


  const handleAgentSave = (event) => {
    event.preventDefault();

    const updatedAgent = { ...agent };

    if (updatedAgent.agentId === 0) {
      const init = makeAgentInit('POST', updatedAgent);
      fetch(AGENT_API_URL, init)
        .then(response => {
          if (response.status !== 201) {
            return Promise.reject("response is not 200 OK");
          }
          return response.json();
        })
        .then(data => {
          navigate("/confirmation", { state: { msg: "GOOD" } });
        })
        .catch(() => {
          navigate("/error", { state: { msg: "BAD" } });
        });
    };

    return (
      <form onsubmit={handleAgentSave}>

        <h3 id="actionTitle"></h3>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input type="text" id="firstName" name="firstName" className="form-control" onChange={handleChange}
            required />
        </div>

        <div className="mb-3">
          <label htmlFor="middleName" className="form-label">Middle Name</label>
          <input type="text" id="middleName" name="middleName" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <input type="text" id="lastName" name="lastName" className="form-control" onChange={handleChange}
            required />
        </div>

        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input type="date" id="dob" name="dob" className="form-control" onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="heightInInches" className="form-label">Height (inches)</label>
          <input type="number" id="heightInInches" name="heightInInches" className="form-control" min="1" max="120"
            onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <button id="saveAgentButton" type="submit" className="btn btn-dark">SAVE</button>
          <button name="cancelButton" type="button" className="btn btn-secondary" onclick="setView('agentListView')">CANCEL</button>
        </div>

      </form>
    );
  }
}

export default AgentForm;