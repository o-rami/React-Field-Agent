import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { findAllAgents } from "../Services/agentApi";

function AgentList() {

  const [agents, setAgents] = useState([]);

  const location = useLocation();

  useEffect(() => {
    findAllAgents()
      .then(data => {
        setAgents(data);
      })
  }, []);

  return <table className="table table-striped table-hover">
    <caption>List of agents</caption>
    <thead className="thead-dark">
      <tr>
        <th scope="col" className="table-dark">#</th>
        <th scope="col" className="table-dark">First Name</th>
        <th scope="col" className="table-dark">Last Name</th>
        <th scope="col" className="table-dark">Height (Inches)</th>
        <th className="table-dark"></th>
      </tr>
    </thead>
    <tbody className="table-group-divider">
      {agents.length > 0
        ? agents.map(a =>
          <tr>
            <th scope="row">{a.agentId}</th>
            <td>{a.firstName}</td>
            <td>{a.lastName}</td>
            <td>{a.heightInInches}</td>
            <td>
              <Link to={`/edit/${a.id}`} className="btn btn-primary btn-sm">EDIT</Link>
              <Link to={`/delete/${a.id}`} className="btn btn-danger btn-sm">DELETE</Link>
            </td>
          </tr>)
        : <tr>
          <th colSpan={6}>No Agents</th>
        </tr>}
      <tr>
        <th colSpan={6}>
          {location.state && <div className="alert alert-info">
            {location.state.message}
          </div>}
        </th>
      </tr>
    </tbody>
  </table>
};

export default AgentList;