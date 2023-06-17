
function ConfirmDeleteAgent() {
  return (<div id="agentDeleteView" class="container-fluid" style="display:none;">
    <div class="row">
      <div class="col">
        <h2 id="deleteTitle"></h2>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="alert alert-danger">
          Are you sure you want to permanently delete this agent?
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <button type="button" class="btn btn-danger" onclick="handleDelete()">DELETE</button>
        <button type="button" name="cancelButton" class="btn btn-secondary" onclick="setView('agentListView')">CANCEL</button>
      </div>
    </div>

  </div>)
}


export default ConfirmDeleteAgent;