import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { findAllAgencies } from "../../Services/agencyApi";

function AgencyList() {

  const [agencies, setAgencies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    findAllAgencies()
      .then(data => {
        setAgencies(data);
      })
  }, []);

  return (<>
    <div className="container-fluid">
      <h2>Agencies</h2>
    </div>
    <table className="table table-striped table-hover">
      <caption>List of agencies</caption>
      <thead className="thead-dark">
        <tr>
          <th scope="col" className="table-dark">#</th>
          <th scope="col" className="table-dark">Short Name</th>
          <th scope="col" className="table-dark">Long Name</th>
          <th scope="col" className="table-dark">
            <Link className="btn btn-light btn-sm" to="/agencies/add">ADD AGENCY</Link>
          </th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {agencies.length > 0
          ? agencies.map(a =>
            <tr key={a.agencyId}>
              <th scope="row">{a.agencyId}</th>
              <td>{a.shortName}</td>
              <td>{a.longName}</td>
              <td>
                <Link to={`/agencies/edit/${a.agencyId}`} className="btn btn-primary btn-sm">UPDATE</Link>
                <Link to={`/agencies/delete/${a.agencyId}`} className="btn btn-danger btn-sm">DELETE</Link>
              </td>
            </tr>)
          : <tr><td colSpan={5}>No Agencies</td></tr>}
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

export default AgencyList;