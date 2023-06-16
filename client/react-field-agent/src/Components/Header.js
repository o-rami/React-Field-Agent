import { Link } from "react-router-dom";

function Header() {

  return (<header>
    <nav className="navbar navbar-dark navbar-expand-md bg-dark" >
      <Link to="/" className="navbar-brand">Field Agent</Link>
      <div className="navbar-nav">
        <ul className="navbar-nav">
          <li>
            <Link to="/" className="nav-item nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item nav-link">About</Link>
          </li>
          <li>
            <Link to="/agencies" className="nav-item nav-link">Agencies</Link>
          </li>
          <li>
            <Link to="/locations" className="nav-item nav-link">Locations</Link>
          </li>
          <li>
            <Link to="/" className="nav-item nav-link">Agents</Link>
          </li>
          <li>
            <Link to="/" className="nav-item nav-link">Aliases</Link>
          </li>
          <li>
            <Link to="/missions" className="nav-item nav-link">Missions</Link>
          </li>
        </ul>
      </div>
    </nav>
    <div className="container-fluid">
      <Link to="/add" type="button" id="addButton" className="btn btn-dark btn-md btn-nav" style={{ marginTop: '1em' }} >ADD AGENT</Link>
    </div>
  </header>
  );
}

export default Header;