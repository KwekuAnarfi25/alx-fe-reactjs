import axios from 'axios';

const BASE_URL = 'https://api.github.com/users';

export const fetchGitHubUser = async (username) => {
  const headers = {};

  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  if (apiKey) {
    headers.Authorization = `token ${apiKey}`;
  }

  const response = await axios.get(`${BASE_URL}/${username}`, { headers });
  return response.data;
};
