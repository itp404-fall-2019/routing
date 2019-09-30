const API_URL = 'https://api.github.com';

export async function fetchMembers() {
  let response = await fetch(`${API_URL}/orgs/facebook/members`);
  return response.json();
}

export async function fetchUser(login) {
  let response = await fetch(`${API_URL}/users/${login}`);
  return response.json();
}

export async function fetchRepos() {
  let response = await fetch(`${API_URL}/orgs/facebook/repos`);
  return response.json();
}