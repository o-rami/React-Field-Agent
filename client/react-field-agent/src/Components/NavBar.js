import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav id="navbar" className="navbar-expand navbar-dark bg-dark" >
      <div className="navbar-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/agencies">Agencies</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <Link to="/missions">Missions</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;