import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { createAgency, updateAgency, findAgencyById } from "../../Services/agencyApi";
import Errors from "../Errors";

const DEFAULT_AGENCY = {
  agencyId: 0,
  shortName: '',
  longName: '',
  locations: [],
  agents: [],
}

function AgencyForm() {

  const [agency, setAgency] = useState(DEFAULT_AGENCY);
  const [errors, setErrors] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      findAgencyById(id)
        .then(data => setAgency(data))
        .catch(error => {
          navigate("/error", {
            state: { msg: error }
          });
        });
    } else {
      setAgency(DEFAULT_AGENCY);
    }
  }, [id, navigate]);

  const handleChange = (event) => {
    const nextAgency = { ...agency };
    console.log(agency);
    
    let nextValue = event.target.value;
    if (event.target.type === 'number') {
      nextValue = parseFloat(nextValue, 10);
      if (isNaN(nextValue)) {
        nextValue = event.target.value;
      }
    }

    nextAgency[event.target.name] = nextValue;

    setAgency(nextAgency);
  }


  const handleSaveAgency = (event) => {
    event.preventDefault();

    if (agency.agencyId === 0) {
      createAgency(agency)
        .then(data => {
          navigate("/agencies", {
            state: { 
              msg: `Agency ${data.shortName} was added!` }
          })
        })
        .catch(err => setErrors(err))
    } else {
      updateAgency(agency)
        .then(() => {
          navigate("/agencies", {
            state: {
              msg: `Agency ${agency.shortName} was updated!` }
          })
        })
        .catch(err => setErrors(err));
    }

  };

  return (<div className="container-fluid">
    <form onSubmit={handleSaveAgency}>
      <h2>Agency Form</h2>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">Short Name</label>
        <input type="text" id="firstName" name="firstName" className="form-control" value={agency.firstName} onChange={handleChange}
          required />
      </div>

      <div className="mb-3">
        <label htmlFor="middleName" className="form-label">Long Name</label>
        <input type="text" id="middleName" name="middleName" className="form-control" value={agency.middleName} onChange={handleChange} />
      </div>

      <div className="mb-3">
        <button type="submit" id="saveAgencyButton" className="btn btn-dark">SAVE</button>
        <Link to="/agencies" type="button" name="cancelButton" className="btn btn-secondary">CANCEL</Link>
      </div>

    </form>
    <Errors errors={errors} />
  </div>
  );
}


export default AgencyForm;