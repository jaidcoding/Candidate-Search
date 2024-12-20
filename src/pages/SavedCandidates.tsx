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

    const removeCandidate = (index: number) => {
        const updatedCandidates = savedCandidates.filter((_, i) => i !== index);
        setSavedCandidates(updatedCandidates);
        localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    };

    return (
        <div>
            <h1>Potential Candidates</h1>
            {savedCandidates.length > 0 ? (
                <table className="candidate-table">
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Login</th>
                            <th>Location</th>
                            <th>Email</th>
                            <th>Profile</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {savedCandidates.map((candidate, index) => (
                            <tr key={index}>
                                <td>
                                    <img 
                                        src={candidate.avatar_url} 
                                        alt={candidate.login} 
                                        className="avatar"
                                    />
                                </td>
                                <td>{candidate.login}</td>
                                <td>{candidate.location || 'N/A'}</td>
                                <td>{candidate.email || 'N/A'}</td>
                                <td>
                                    <a 
                                        href={candidate.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        View Profile
                                    </a>
                                </td>
                                <td>
                                    <button onClick={() => removeCandidate(index)}>Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No potential candidates have been saved.</p>
            )}
        </div>
    );
};

export default SavedCandidates;