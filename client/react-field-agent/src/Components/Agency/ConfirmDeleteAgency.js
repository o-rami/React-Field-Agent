import { deleteAgencyById, findAgencyById } from "../../Services/agencyApi";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function ConfirmDeleteAgency() {

  const [agency, setAgency] = useState({ lastName: '' });

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    findAgencyById(id)
      .then(data => setAgency(data))
      .catch(() => {
        navigate("/agencies/not-found", {
          state: { msg: `Agency ID# ${id} was not found.` }
        });
      });
  }, [id, navigate]);

  const handleDelete = () => {
    deleteAgencyById(id)
      .then(res => {
        navigate("/agencies", {
          state: { msg: `Agency ${agency.firstName} ${agency.lastName} was deleted.` }
        });
      })
      .catch(() => {
        navigate("/agencies/not-found", {
          state: { msg: `Agency ID# ${id} was not found.` }
        });
      });
  }

  return <div className="container-fluid">
    <div className="row">
      <div className="col">
        <h2 id="deleteTitle">Agency ID#{id}: {agency.firstName} {agency.lastName}</h2>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <div className="alert alert-danger">
          Are you sure you want to permanently delete this agency?
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col">
        <button type="button" className="btn btn-danger" onClick={handleDelete}>DELETE</button>
        <Link type="button" name="cancelButton" className="btn btn-secondary" to="/agencies">CANCEL</Link>
      </div>
    </div>

  </div>
}


export default ConfirmDeleteAgency;