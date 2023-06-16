const emptyAgent = {
  agentId: 0,
  firstName: '',
  middleName: '',
  lastName: '',
  dob: undefined,
  heightInInches: 0,
  agencies: [],
  aliases: [],
};
const MESSAGE_STYLES = {
  'SUCCESS': 'alert alert-success',
  'ERROR': 'alert alert-danger',
};

let currentView = 'agentListView';
let currentAgent = {};
let agents = [];

const init = () => {
  refreshList();
}

const handleAdd = () => {
  hideMessages();
  document.getElementById('actionTitle').innerText = 'Add Agent'
  currentAgent = { ...emptyAgent };
  resetForm();
  setView('agentFormView');
}

const handleEdit = (agentId) => {
  hideMessages();
  document.getElementById('actionTitle').innerText = 'Edit Agent'
  const index = agents.findIndex(a => a.agentId === agentId);
  if (index !== -1) {
    currentAgent = agents[index];
    resetForm();
    setView('agentFormView');
  }
};

const handleConfirmDelete = (agentId) => {
  hideMessages();
  const index = agents.findIndex(a => a.agentId === agentId);
  if (index !== -1) {
    currentAgent = agents[index];
    document.getElementById('deleteTitle').innerText = 'Delete Agent: ' + currentAgent.firstName + ' ' + currentAgent.lastName;
    setView('agentDeleteView');
  }
};

const handleChange = (evt) => {
  let nextValue = evt.target.value;
  if (evt.target.type === 'number') {
    nextValue = parseFloat(nextValue, 10);
    if (isNaN(nextValue)) {
      nextValue = evt.target.value;
    }
  }
  currentAgent[evt.target.name] = nextValue;
};

const handleAgentSave = (evt) => {
  evt.preventDefault();

  if (currentAgent.agentId === 0) {
    agentApi.add(currentAgent)
      .then(data => {
        displayMessages(`Agent ${data.firstName} ${data.lastName} was added!`, 'SUCCESS');
        refreshList();
        setView('agentListView');
      })
      .catch(errors => {
        displayMessages(errors, 'ERROR');
      });
  } else {
    agentApi.update(currentAgent)
      .then(() => {
        displayMessages(`Agent ${currentAgent.firstName} ${currentAgent.lastName} was updated!`, 'SUCCESS');
        refreshList();
        setView('agentListView');
      })
      .catch(errors => {
        displayMessages(errors, 'ERROR');
      });
  }
};


const handleDelete = () => {
  agentApi.deleteById(currentAgent)
    .then(() => {
      displayMessages(`Agent ${currentAgent.firstName} ${currentAgent.lastName} was deleted!`, 'SUCCESS');
      refreshList();
      setView('agentListView');
    })
    .catch(err => {
      displayMessages(err, 'ERROR');
    });

};

const setView = (newView) => {
  currentView = newView;
  document.getElementById('agentListView').style.display = 'none';
  document.getElementById('agentFormView').style.display = 'none';
  document.getElementById('agentDeleteView').style.display = 'none';

  if (currentView === 'agentListView') {
    document.getElementById('agentListView').style.display = 'block';
  } else if (currentView === 'agentFormView') {
    document.getElementById('agentFormView').style.display = 'block';
  } else {
    document.getElementById('agentDeleteView').style.display = 'block';
  }
};

const refreshList = () => {
  agentApi.findAll()
    .then(data => {
      agents = data;
      renderList();
    })
    .catch(error => {
      displayMessages('Could not add agent', 'ERROR');
    });
};

const renderList = () => {
  let htmlString = `
      <table class="table table-striped table-hover">
        <caption>List of agents</caption>
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="table-dark">#</th>
            <th scope="col" class="table-dark">First Name</th>
            <th scope="col" class="table-dark">Last Name</th>
            <th scope="col" class="table-dark">Height (Inches)</th>
            <th class="table-dark"></th>
          </tr>
        </thead>
        <tbody class="table-group-divider">`;

  for (let agent of agents) {
    const agentHtml = `
      <tr>
        <th scope="row">${agent.agentId}</th>
        <td>${agent.firstName}</td>
        <td>${agent.lastName}</td>
        <td>${agent.heightInInches}</td>
        <td>
          <button type="button" id="editAgentButton" class="btn btn-primary btn-sm" onclick="handleEdit(${agent.agentId})">EDIT</button>
          <button type="button" class="btn btn-danger btn-sm" onclick="handleConfirmDelete(${agent.agentId})">DELETE</button>
        </td>
        <tr onclick="toggle" id="Row${agent.agentId}">
      </tr>`;

    htmlString += agentHtml;
  }

  htmlString += `</tbody></table>`;
  document.getElementById('agentListView').innerHTML = htmlString;
};

const displayMessages = (message, messageStyle) => {
  const messagesDisplay = document.getElementById('messages');
  messagesDisplay.className = MESSAGE_STYLES[messageStyle];
  const messages = Array.isArray(message) ? message : [message];

  let messageHtml = '<ul>';
  for (let msg of messages) {
    messageHtml += `<li>${msg}</li>`;
  }
  messageHtml += '</ul>';

  messagesDisplay.innerHTML = messageHtml;
  messagesDisplay.style.display = 'block';
};

const hideMessages = () => {
  const messages = document.getElementById('messages');
  messages.style.display = 'none';
};

const resetForm = () => {
  document.getElementById('firstName').value = currentAgent.firstName;
  document.getElementById('middleName').value = currentAgent.middleName;
  document.getElementById('lastName').value = currentAgent.lastName;
  document.getElementById('dob').value = currentAgent.dob;
  document.getElementById('heightInInches').value = currentAgent.heightInInches;
};

const toggleRow = (rowNumber) => {
  const row = document.getElementById('rowNumber');

  if (row.style.display === 'none') {
    row.style.display = 'compact';
  } else {
    row.style.display = 'none';
  }
}

init();