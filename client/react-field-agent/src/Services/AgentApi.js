const AGENT_API_URL = 'http://localhost:8080/api/agent';

export async function findAllAgents() {
  const response = await fetch(AGENT_API_URL);

  if (response.status === 200) {
    return response.json();
  }
};

export async function findAgentById(id) {


}

export async function createAgent(agent) {


}

export async function updateAgent(agent) {

}

export async function deleteAgentById(id) {

}




const add = async (agent) => {
  const init = makeAgentInit('POST', agent);

  const response = await fetch(AGENT_API_URL, init);

  if (response.status !== 201) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
  return response.json();
};

const update = async (agent) => {
  const init = makeAgentInit('PUT', agent);

  const url = `${AGENT_API_URL}/${agent.agentId}`;
  console.log(url);


  const response = await fetch(url, init);

  if (response.status === 404) {
    return Promise.reject(`${agent.firstName} ${agent.lastName} was not found!`);
  } else if (response.status !== 204) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
};

const deleteById = async (agent) => {
  fetch(`${AGENT_API_URL}/${agent.agentId}`, { method: 'DELETE', })
    .then(response => {
      if (response.status === 204) {
        //set
      } else if (response.status === 404) {
        return Promise.reject(`Agent ${agent.firstName} ${Agent.lastName} not found`);
      } else {
        return Promise.reject(`Delete failed with status: ${reponse.status}`)
      }
    })
    .catch(console.log);

};

const makeAgentInit = (method, agent) => {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(agent)
  };
}