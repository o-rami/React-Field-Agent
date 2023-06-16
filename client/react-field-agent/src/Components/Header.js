
function Header() {
  return (<header>
    <div>
      <nav id="navbar" class="navbar navbar-expand navbar-dark bg-dark" >
        <div class="navbar-nav">
          <a class="nav-link disabled">Agencies</a>
          <a class="nav-link disabled">Locations</a>
          <a class="nav-link active" href="#">Agents</a>
          <a class="nav-link disabled">Aliases</a>
          <a class="nav-link disabled">Missions</a>
        </div>
      </nav>
    </div>
    <div class="container-fluid" style="margin-top:1rem;">
      <button type="button" id="addAgentButton" class="btn btn-dark" onclick="handleAdd()">ADD NEW AGENT</button>
    </div>
  </header>)
}

export default Header;