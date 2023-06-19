import { Link } from "react-router-dom";

function Header() {

  return (<header>

    <nav id="navbar" className="navbar navbar-expand-sm navbar-dark bg-dark" >
      <Link to="/" className="navbar-brand col-4">
        <img src="/logo512.png" width="40"/>
        React Field Agent</Link>
      <div className="navbar-nav">
        <Link className="nav-link nav-item" to="/">Home</Link>
        <Link className="nav-link nav-item" to="/agencies" >Agencies</Link>
        <Link className="nav-link nav-item disabled" to="/locations">Locations</Link>
        <Link className="nav-link nav-item" to="/agents">Agents</Link>
        <Link className="nav-link nav-item disabled" to="/aliases">Aliases</Link>
        <Link className="nav-link nav-item disabled" to="/missions">Missions</Link>
      </div>
    </nav>
  </header>
  );
}

export default Header;