import axios from 'axios';


export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
  const headers = {};
  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;

  if (apiKey) {
    headers.Authorization = `token ${apiKey}`;
  }

  let query = '';
  if (username) query += `${username} `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}&page=${page}&per_page=10`;

  const response = await axios.get(url, { headers });

  // Fetch extra user details for each result
  const detailedUsers = await Promise.all(
    response.data.items.map(async (user) => {
      const userDetails = await axios.get(user.url, { headers });
      return userDetails.data;
    })
  );

  return detailedUsers;
};
