const agentApi = (function() {

  const API_URL = 'http://localhost:8080/api/agent';

  const findAll = async () => {
    const response = await fetch(API_URL);

    if (response.status === 200) {
      return await response.json();
    }
  };

  const add = async (agent) => {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(agent)
    };
  
    const response = await fetch(API_URL, init);
  
    if (response.status === 201) {
      return await response.json();
    } else {
      const errors = await response.json();
      return Promise.reject(errors);
    }
  };

  const update = async (agent) => {
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(agent)
    };
  
    const url = `${API_URL}/${agent.agentId}`;
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
    const init = {
      method: 'DELETE',
    };
  
    const response = await fetch(`${API_URL}/${agent.agentId}`, init);
  
    if (response.status === 404) {
      return Promise.reject(`${agent.firstName} ${agent.lastName} was not found!`);
    }
  };

  return {
    findAll,
    add,
    update,
    deleteById
  }

})();