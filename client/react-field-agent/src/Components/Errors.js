function Errors({ errors }) {

  const getErrorList = (err) => {
    return Array.isArray(err) ? err : [err];
  }

  return <>
    {errors.length > 0
      && <div className="alert alert-danger">
        <ul>
          {getErrorList(errors).map(err => <li>{err}</li>)}
        </ul>
      </div>}
  </>
}

export default Errors;