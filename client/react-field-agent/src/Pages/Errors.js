import { useLocation } from "react-router-dom";

function Errors({ errors }) {
  const location = useLocation();

  return <>
    {errors.length > 0
      && <div className="alert alertdanger">
        <ul>
          {errors.map(err => <li>{err}</li>)}
        </ul>
      </div>}</>
}

export default Error;