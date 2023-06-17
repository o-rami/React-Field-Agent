import { deleteAgentById, findAgentById } from "../Services/agentApi";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ConfirmDeleteAgent() {

  const [agent, setAgent] = useState({ lastName: '' });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    findAgentById(id)
      .then(data => setAgent(data))
      .catch(() => {
        navigate("/agents/not-found", {
          state: { msg: `Agent ID# ${id} was not found.` }
        });
      });
  }, [id, navigate]);

  const handleDelete = () => {
    deleteAgentById(id)
      .then(res => {
        navigate("/agents", {
          state: { msg: `Agent ${agent.firstName} ${agent.lastName} was deleted.` }
        });
      })
      .catch(() => {
        navigate("/agents/not-found", {
          state: { msg: `Agent ID# ${id} was not found.` }
        });
      });
  }

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h2 id="deleteTitle">Agent ID#{id}: {agent.firstName} {agent.lastName}</h2>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="alert alert-danger">
          Are you sure you want to permanently delete this agent?
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>DELETE</button>
        <Link type="button" name="cancelButton" className="btn btn-secondary" to="/agents">CANCEL</Link>
      </div>
    </div>

  </div>
}


export default ConfirmDeleteAgent;