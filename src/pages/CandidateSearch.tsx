import React, { useState, useEffect } from 'react';
import CandidateCard from '../components/CandidateCard';
import { searchGithub } from '../api/API'; 

interface Candidate {
    login: string;
    avatar_url: string;
    name: string;
    location: string;
    email: string;
    html_url: string;
    company: string;
}

const CandidateSearch: React.FC = () => {
    const [candidates, setCandidates] = useState<Candidate[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
        const saved = localStorage.getItem('savedCandidates');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        const fetchCandidates = async () => {
            try {
                const data: Candidate[] = await searchGithub();
                console.log(data); // Log data to check its structure
                setCandidates(data);
            } catch (error) {
                console.error("Error fetching candidates:", error);
            }
        };

        fetchCandidates();
    }, []);

    const saveCandidate = () => {
        if (currentIndex < candidates.length) {
            const candidateToSave = candidates[currentIndex];
            const updatedSavedCandidates = [...savedCandidates, candidateToSave];
            setSavedCandidates(updatedSavedCandidates);
            localStorage.setItem('savedCandidates', JSON.stringify(updatedSavedCandidates));
            setCurrentIndex((prevIndex) => prevIndex + 1);
        }
    };

    const nextCandidate = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, candidates.length - 1));
    };

    const currentCandidate = candidates[currentIndex];

    return (
        <div>
            <h1>Candidate Search</h1>
            {candidates.length === 0 ? (
                <p>Loading candidates...</p>
            ) : currentCandidate ? (
                // <>hello</>
                <CandidateCard
                    candidate={currentCandidate}
                    onSave={saveCandidate}
                    onNext={nextCandidate}
                />
            ) : (
                <p>No more candidates available.</p>
            )}
            <button 
                onClick={saveCandidate} 
                disabled={currentIndex >= candidates.length} 
            >
                Save Candidate
            </button>
            <button 
                onClick={nextCandidate} 
                disabled={currentIndex >= candidates.length - 1} 
            >
                Next Candidate
            </button>
        </div>
    );
};

export default CandidateSearch;