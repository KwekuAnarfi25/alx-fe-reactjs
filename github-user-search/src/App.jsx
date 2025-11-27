import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchGitHubUser } from './services/github';

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    try {
      const data = await fetchGitHubUser(username);
      setUser(data);
      setError('');
    } catch (err) {
      setUser(null);
      setError('User not found or API error.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {user && (
        <div style={{ marginTop: '1rem' }}>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <h2>{user.name || user.login}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
