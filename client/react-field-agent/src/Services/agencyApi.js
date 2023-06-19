export const AGENCY_API_URL = 'http://localhost:8080/api/agency';

export async function findAllAgencies() {
  const response = await fetch(AGENCY_API_URL);

  if (response.status === 200) {
    return response.json();
  }
};

export async function findAgencyById(id) {
  const response = await fetch(`${AGENCY_API_URL}/${id}`);

  if (response.status === 200) {
    return response.json();
  } else {
    return Promise.reject(`Agency with ID#:${id} was not found`);
  }
};

export async function createAgency(agency) {
  const init = makeAgencyInit('POST', agency);

  const response = await fetch(AGENCY_API_URL, init);

  if (response.status !== 201) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
  return response.json();
};

export async function updateAgency(agency) {
  const init = makeAgencyInit('PUT', agency);

  const url = `${AGENCY_API_URL}/${agency.agencyId}`;

  const response = await fetch(url, init);

  if (response.status === 404) {
    return Promise.reject(`Agency ${agency.shortName} was not found!`);
  } else if (response.status !== 204) {
    const errors = await response.json();
    return Promise.reject(errors);
  }
};

export async function deleteAgencyById(id) {

  const response = await fetch(`${AGENCY_API_URL}/${id}`, { method: 'DELETE' });

  if (response.status === 404) {
    return Promise.reject(`Agency with ID# ${id}was not found.`)
  }
};

export function makeAgencyInit(method, agency) {
  return {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(agency)
  };
};