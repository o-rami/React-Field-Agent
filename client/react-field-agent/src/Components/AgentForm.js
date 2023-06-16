


function AgentForm() {






  
  return (<div id="agentFormView" class="container-fluid" style="display:none;">

    <form onsubmit="handleAgentSave(event)">

      <h3 id="actionTitle"></h3>
      <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" id="firstName" name="firstName" class="form-control" onchange="handleChange(event)"
          required />
      </div>

      <div class="mb-3">
        <label for="middleName" class="form-label">Middle Name</label>
        <input type="text" id="middleName" name="middleName" class="form-control" onchange="handleChange(event)" />
      </div>

      <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" id="lastName" name="lastName" class="form-control" onchange="handleChange(event)"
          required />
      </div>

      <div class="mb-3">
        <label for="dob" class="form-label">Date of Birth</label>
        <input type="date" id="dob" name="dob" class="form-control" onchange="handleChange(event)" />
      </div>

      <div class="mb-3">
        <label for="heightInInches" class="form-label">Height (inches)</label>
        <input type="number" id="heightInInches" name="heightInInches" class="form-control" min="1" max="120"
          onchange="handleChange(event)" required />
      </div>

      <div class="mb-3">
        <button id="saveAgentButton" type="submit" class="btn btn-dark">SAVE</button>
        <button name="cancelButton" type="button" class="btn btn-secondary" onclick="setView('agentListView')">CANCEL</button>
      </div>

    </form>

  </div>);

}

export default AgentForm;