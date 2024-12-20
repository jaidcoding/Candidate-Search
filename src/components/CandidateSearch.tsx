import { useState } from 'react';
import { fetchCandidates } from '../services/githubService';

interface Candidate {
  id: number;
  login: string;
  // Add other properties if needed
}

const CandidateSearch = () => {
  const [query, setQuery] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const result = await fetchCandidates(query);
      setCandidates(result);
    } catch (error) {
      console.error('Error fetching candidates:', error);
      alert('An error occurred while fetching candidates. Please check your API token and try again.');
    } finally {
      setLoading(false);
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
      {loading ? (
        <p>Loading candidates...</p>
      ) : (
        <ul>
          {candidates.map((candidate) => (
            <li key={candidate.id}>{candidate.login}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CandidateSearch;