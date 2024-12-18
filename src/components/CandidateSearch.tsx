import React, { useState } from 'react';
import { fetchCandidates } from '../services/githubService';

interface Candidate {
  id: number;
  login: string;
  // Add other properties if needed
}

const CandidateSearch = () => {
  const [query, setQuery] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const handleSearch = async () => {
    try {
      const result = await fetchCandidates(query);
      setCandidates(result);
    } catch (error) {
      console.error('Error fetching candidates:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for candidates"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {candidates.map((candidate) => (
          <li key={candidate.id}>{candidate.login}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateSearch;
