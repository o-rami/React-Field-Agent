import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createAgent, updateAgent, findAgentById } from "../../Services/agentApi";
import Errors from "../Errors";

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
    console.log(agent);
    
    let nextValue = event.target.value;
    if (event.target.type === 'number') {
      nextValue = parseFloat(nextValue, 10);
      if (isNaN(nextValue)) {
        nextValue = event.target.value;
      }
    }

    nextAgent[event.target.name] = nextValue;

    setAgent(nextAgent);
  }


  const handleSaveAgent = (event) => {
    event.preventDefault();

    if (agent.agentId === 0) {
      createAgent(agent)
        .then(data => {
          navigate("/agents", {
            state: { 
              msg: `Agent ${agent.firstName} ${agent.lastName} was added!` }
          })
        })
        .catch(err => setErrors(err))
    } else {
      updateAgent(agent)
        .then(() => {
          navigate("/agents", {
            state: {
              msg: `Agent ${agent.firstName} ${agent.lastName} was updated!` }
          })
        })
        .catch(err => setErrors(err));
    }

  };

  return (<div className="container-fluid">
    <form onSubmit={handleSaveAgent}>
      <h2>Agent Form</h2>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" id="firstName" name="firstName" className="form-control" value={agent.firstName} onChange={handleChange}
          required />
      </div>

      <div className="mb-3">
        <label htmlFor="middleName" className="form-label">Middle Name</label>
        <input type="text" id="middleName" name="middleName" className="form-control" value={agent.middleName} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" id="lastName" name="lastName" className="form-control" value={agent.firstName} onChange={handleChange}
          required />
      </div>

      <div className="mb-3">
        <label htmlFor="dob" className="form-label">Date of Birth</label>
        <input type="date" id="dob" name="dob" className="form-control" value={agent.dob} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <label htmlFor="heightInInches" className="form-label">Height (inches)</label>
        <input type="number" id="heightInInches" name="heightInInches" className="form-control" value={agent.heightInInches} min="1" max="120"
          onChange={handleChange} required />
      </div>

      <div className="mb-3">
        <button type="submit" id="saveAgentButton" className="btn btn-dark">SAVE</button>
        <Link to="/agents" type="button" name="cancelButton" className="btn btn-secondary">CANCEL</Link>
      </div>

    </form>
    <Errors errors={errors} />
  </div>
  );
}


export default AgentForm;