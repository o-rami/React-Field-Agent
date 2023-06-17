import { Link } from "react-router-dom";

function Header() {

  return (<header>
    <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark" >
      <Link to="/" className="navbar-brand col-4">React Field Agent</Link>
      <div className="navbar-nav">
        <Link to="/" className="nav-link nav-item">Home</Link>
        <Link className="nav-link nav-item" to="/agencies" >Agencies</Link>
        <Link className="nav-link nav-item" to="/locations">Locations</Link>
        <Link className="nav-link nav-item" to="/agents">Agents</Link>
        <Link className="nav-link nav-item" to="/aliases">Aliases</Link>
        <Link className="nav-link nav-item" to="/missions">Missions</Link>
      </div>
    </nav>
  </header>
  );
}

export default Header;