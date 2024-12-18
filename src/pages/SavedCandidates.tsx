import React, { useEffect, useState } from 'react';

interface Candidate {
    login: string;
    avatar_url: string;
    html_url: string;
    location?: string;
    email?: string;
}

const SavedCandidates: React.FC = () => {
    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

    useEffect(() => {
        const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
        setSavedCandidates(candidates);
    }, []);

    return (
        <div>
            <h1>Potential Candidates</h1>
            {savedCandidates.length > 0 ? (
                <ul className="candidate-list">
                    {savedCandidates.map((candidate, index) => (
                        <li key={index} className="candidate-list-item">
                            <img 
                                src={candidate.avatar_url} 
                                alt={candidate.login} 
                                className="avatar"
                            />
                            <div className="candidate-info"> {/* Use a CSS class for better structure */}
                                <h2>{candidate.login}</h2>
                                <p><strong>Location:</strong> {candidate.location || 'N/A'}</p>
                                <p><strong>Email:</strong> {candidate.email || 'N/A'}</p>
                                <a 
                                    href={candidate.html_url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    View Profile
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No potential candidates have been saved.</p>
            )}
        </div>
    );
};

export default SavedCandidates;