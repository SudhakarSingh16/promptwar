import React, { useState } from 'react';
import './EvmSimulation.css';

const CANDIDATES = [
  { id: 1, name: 'Candidate A', party: 'Party X' },
  { id: 2, name: 'Candidate B', party: 'Party Y' },
  { id: 3, name: 'Candidate C', party: 'Party Z' },
  { id: 'nota', name: 'None of the Above', party: 'NOTA' }
];

const EvmSimulation = ({ onVoteSuccess }) => {
  const [votedFor, setVotedFor] = useState(null);
  const [isVoting, setIsVoting] = useState(false);
  const [showSlip, setShowSlip] = useState(false);

  const handleVote = (candidate) => {
    if (votedFor || isVoting) return;

    setIsVoting(true);
    setVotedFor(candidate.id);

    // Simulate beep and light
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime); // Beep sound
    oscillator.connect(audioContext.destination);
    oscillator.start();
    
    setTimeout(() => {
      oscillator.stop();
      setIsVoting(false);
      setShowSlip(true);
      if (onVoteSuccess) {
        setTimeout(onVoteSuccess, 2000);
      }
    }, 1500); // Beep lasts for 1.5s
  };

  return (
    <div className="evm-container">
      <div style={{ marginBottom: '1.5rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <p>Interactive Simulation. Press the blue button to cast your vote.</p>
      </div>

      <div className="evm-machine">
        <div className="evm-header">
          Ballot Unit
        </div>

        <div className="evm-candidates">
          {CANDIDATES.map((candidate) => (
            <div key={candidate.id} className={`evm-candidate ${candidate.id === 'nota' ? 'nota' : ''}`}>
              <div className="candidate-info">
                <div className="candidate-number">
                  {candidate.id === 'nota' ? '' : candidate.id}
                </div>
                <div>
                  <div className="candidate-name">{candidate.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{candidate.party}</div>
                </div>
              </div>
              <div className="evm-action">
                <div className={`evm-light ${votedFor === candidate.id ? 'active' : ''}`}></div>
                <button 
                  className="evm-button" 
                  onClick={() => handleVote(candidate)}
                  disabled={votedFor !== null}
                  aria-label={`Vote for ${candidate.name}`}
                ></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showSlip && (
        <div className="vvpat-slip">
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>VVPAT Slip Printed</p>
          <div style={{ borderTop: '1px dashed #ccc', borderBottom: '1px dashed #ccc', padding: '1rem 0', margin: '0.5rem 0' }}>
            <strong>{CANDIDATES.find(c => c.id === votedFor)?.name}</strong><br/>
            <span style={{ fontSize: '0.875rem' }}>{CANDIDATES.find(c => c.id === votedFor)?.party}</span>
          </div>
          <p style={{ color: 'var(--green)', fontWeight: 'bold' }}>Vote Recorded!</p>
        </div>
      )}
    </div>
  );
};

export default EvmSimulation;
