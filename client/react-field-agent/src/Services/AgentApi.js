const AGENT_API_URL = 'http://localhost:8080/api/agent';

export async function findAllAgents() {
  const response = await fetch(AGENT_API_URL);

  if (response.status === 200) {
    return response.json();
  }
};

export async function findAgentById(id) {
  const response = await fetch(`${AGENT_API_URL}/${id}`);

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject(`Agent with ID#:${id} was not found`);
  }
}

export async function createAgent(agent) {
  const init = makeAgentInit('POST', agent);

  const response = await fetch(AGENT_API_URL, init);

  if (response.status !== 201) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
  return response.json();
}

export async function updateAgent(agent) {
  const init = makeAgentInit('PUT', agent);

  const url = `${AGENT_API_URL}/${agent.agentId}`;

  const response = await fetch(url, init);

  if (response.status === 404) {
    return Promise.reject(`Agent ${agent.firstName} ${agent.lastName} was not found!`);
  } else if (response.status !== 204) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
}

export async function deleteAgentById(id) {

  const response = await fetch(`${AGENT_API_URL}/${id}`, { method: 'DELETE' });

  if (response.status === 404) {
    return Promise.reject(`Agent with ID# ${id}was not found.`)
  }
};

function makeAgentInit(method, agent) {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(agent)
  };
}