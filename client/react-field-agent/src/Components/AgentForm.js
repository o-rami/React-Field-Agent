import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AGENT_API_URL, createAgent, updateAgent, makeAgentInit, findAgentById } from "../Services/agentApi";

const DEFAULT_AGENT = {
  agentId: 0,
  firstName: '',
  middleName: '',
  lastName: '',
  dob: '',
  heightInInches: 1,
  agencies: [],
  aliases: [],
}

function AgentForm() {

  const [agent, setAgent] = useState(DEFAULT_AGENT);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      findAgentById(id)
        .then(data => setAgent(data))
        .catch(error => {
          navigate("/error", {
            state: { msg: error }
          });
        });
    } else {
      setAgent(DEFAULT_AGENT);
    }
  }, [id, navigate]);

  const handleChange = (event) => {
    const nextAgent = { ...agent };
    if (event.target.type === 'number') {
      let nextValue = parseFloat(nextValue, 10);
      if (isNaN(nextValue)) {
        nextValue = event.target.value;
      }
    }
    nextAgent[event.target.name] = event.target.value;
    setAgent(nextAgent);
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

    return (<div className="container-fluid">
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
          <button type="submit" id="saveAgentButton" className="btn btn-dark">SAVE</button>
          <Link to="/" type="button" name="cancelButton" className="btn btn-secondary" onclick="setView('agentListView')">CANCEL</Link>
        </div>

      </form>
      <errors errors={errors} />
      </div>
    );
  }
}

export default AgentForm;