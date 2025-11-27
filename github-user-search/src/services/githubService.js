import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const githubAPI = axios.create({
  baseURL: API_URL,
  headers: API_KEY ? {
    'Authorization': `token ${API_KEY}`
  } : {}
});

export const searchUsers = async (username) => {
  try {
    const response = await githubAPI.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await githubAPI.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user details:', error);
    throw error;
  }
};
