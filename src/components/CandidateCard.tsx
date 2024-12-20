import { FunctionComponent } from 'react';
import { Candidate } from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  candidate: Candidate;
  onSave: () => void; 
  onNext: () => void; 
}

const CandidateCard: FunctionComponent<CandidateCardProps> = ({ candidate, onSave, onNext }) => {
  console.log(candidate); // Log candidate to check its properties
  return (
    <div className="candidate-card">
      <img 
        src={candidate.avatar_url} 
        alt={`${candidate.login}'s avatar`} 
        className="candidate-avatar" 
      />
      <div className="candidate-card-content">
        <h2>{candidate.name || candidate.login}</h2> {/* Use login as fallback */}
        <p><strong>Location:</strong> {candidate.location}</p>
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Company:</strong> {candidate.company}</p>
        <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        <div className="button-group">
          <button className="button save-button" onClick={onSave}>Save Candidate</button>
          <button className="button next-button" onClick={onNext}>Next Candidate</button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;