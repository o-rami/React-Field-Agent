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
                <Link to={`/edit/${a.id}`} type="button" className="btn btn-primary btn-sm">EDIT</Link>
                <Link to={`/delete/${a.id}`} type="button" className="btn btn-danger btn-sm">DELETE</Link>
              </td>
            </tr>)
          : <div className="col-sm-6 col-lg-4">No Agents</div>}
        <div >
            {location.state && <div className="alert alert-info">
              {location.state.message}
            </div>}
        </div>
      </tbody>
    </table>
  </>)
}

export default AgentList;