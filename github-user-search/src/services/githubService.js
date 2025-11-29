import axios from 'axios';

const BASE_URL = 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: BASE_URL,
  headers: API_KEY ? {
    Authorization: `token ${API_KEY}`
  } : {}
});

export const fetchUserData = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    // console.error('Error fetching user data:', error); // Removed for production
    throw error;
  }
};

export const searchUsersAdvanced = async (query, page = 1) => {
  try {
    const response = await githubAPI.get('/search/users', {
      params: {
        q: query,
        page: page,
        per_page: 10
      }
    });
    return response.data;
  } catch (error) {
    // console.error('Error searching users:', error); // Removed for production
    throw error;
  }
};

export const searchUsers = async (query) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${query}`);
    return response.data;
  } catch (error) {
    // console.error('Error searching users:', error); // Removed for production
    throw error;
  }
};

export default githubAPI;
