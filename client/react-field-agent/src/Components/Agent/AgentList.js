import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { findAllAgents } from "../../Services/agentApi";

function AgentList() {

  const [agents, setAgents] = useState([]);

  const location = useLocation();

  useEffect(() => {
    findAllAgents()
      .then(data => {
        setAgents(data);
      })
  }, []);

  return (<>
    <div className="container-fluid">
      <h2>Agents</h2>
    </div>
    <table className="table table-striped table-hover">
      <caption>List of agents</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="table-dark">#</th>
          <th scope="col" className="table-dark">First Name</th>
          <th scope="col" className="table-dark">Last Name</th>
          <th scope="col" className="table-dark">Height (Inches)</th>
          <th scope="col" className="table-dark">
            <Link className="btn btn-light btn-sm" to="/agents/add">ADD AGENT</Link>
          </th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {agents.length > 0
          ? agents.map(a =>
            <tr key={a.agentId}>
              <th scope="row">{a.agentId}</th>
              <td>{a.firstName}</td>
              <td>{a.lastName}</td>
              <td>{a.heightInInches}</td>
              <td>
                <Link to={`/agents/edit/${a.agentId}`} className="btn btn-primary btn-sm">UPDATE</Link>
                <Link to={`/agents/delete/${a.agentId}`} className="btn btn-danger btn-sm">DELETE</Link>
              </td>
            </tr>)
          : <tr><td colSpan={5}>No Agents</td></tr>}
      </tbody>
    </table>
    <div >
      {location.state
        && <div className="alert alert-success">
          {location.state.msg}
        </div>}
    </div>
  </>)
}

export default AgentList;