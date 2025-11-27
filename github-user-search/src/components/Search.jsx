import React, { useState } from 'react';
import { fetchAdvancedUsers } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    await searchUsers(1, true);
  };

  const searchUsers = async (pageNumber, reset = false) => {
    setLoading(true);
    setError('');
    if (reset) setResults([]);

    try {
      const users = await fetchAdvancedUsers({
        username,
        location,
        minRepos,
        page: pageNumber,
      });
      setResults((prev) => (reset ? users : [...prev, ...users]));
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    searchUsers(nextPage);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Minimum public repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <div className="flex items-center space-x-4">
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p>{user.location || 'Location not available'}</p>
                <p>Public Repos: {user.public_repos ?? 'N/A'}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && !loading && (
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
