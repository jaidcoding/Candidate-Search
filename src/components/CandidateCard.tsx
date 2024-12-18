
import { FunctionComponent } from 'react';

interface Candidate {
  login: string;
  avatar_url: string;
  name?: string; 
  location?: string; 
  email?: string; 
  html_url: string;
  company?: string; 
}

interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void; 
  onNext: () => void; 
}

const CandidateCard: FunctionComponent<CandidateCardProps> = ({ candidate, onSave, onNext }) => {
  return (
    <div className="candidate-card">
      <img 
        src={candidate.avatar_url} 
        alt={`${candidate.login}'s avatar`} 
        className="candidate-avatar" 
      />
      <h2>{candidate.name || candidate.login}</h2>
      <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
      <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
      <p><strong>Company:</strong> {candidate.company || 'N/A'}</p>
      <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
      <div className="button-group">
        <button onClick={onSave}>Save Candidate</button>
        <button onClick={onNext}>Next Candidate</button>
      </div>
    </div>
  );
};

export default CandidateCard;
