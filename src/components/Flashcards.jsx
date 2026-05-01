import React, { useState } from 'react';
import { RefreshCcw, Vote, UserCheck, FileText, CheckSquare, Shield } from 'lucide-react';
import './Flashcards.css';

const CARDS_DATA = [
  {
    id: 'epic',
    title: 'EPIC',
    subtitle: 'Elector Photo Identity Card',
    icon: <UserCheck size={40} />,
    desc: 'The official Voter ID card issued by the Election Commission of India. It serves as an identity and address proof.'
  },
  {
    id: 'evm',
    title: 'EVM',
    subtitle: 'Electronic Voting Machine',
    icon: <Vote size={40} />,
    desc: 'A secure, battery-operated machine used to record votes. It eliminates invalid votes and makes counting faster.'
  },
  {
    id: 'nota',
    title: 'NOTA',
    subtitle: 'None Of The Above',
    icon: <CheckSquare size={40} />,
    desc: 'An option on the EVM allowing voters to officially reject all candidates contesting in the election.'
  },
  {
    id: 'form6',
    title: 'Form 6',
    subtitle: 'Voter Registration Form',
    icon: <FileText size={40} />,
    desc: 'The official application form used by first-time voters or individuals moving to a new constituency to register to vote.'
  },
  {
    id: 'vvpat',
    title: 'VVPAT',
    subtitle: 'Voter Verifiable Paper Audit Trail',
    icon: <Shield size={40} />,
    desc: 'A machine attached to the EVM that prints a paper slip showing the candidate you voted for, verifying your vote.'
  }
];

const Flashcards = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flashcards-container">
      <div className="section-header">
        <h2 className="section-title">Election Terminology</h2>
        <p className="section-subtitle">Click the cards to flip and learn key terms.</p>
      </div>

      <div className="flashcards-grid">
        {CARDS_DATA.map((card) => (
          <div 
            key={card.id} 
            className={`flashcard ${flippedCards[card.id] ? 'flipped' : ''}`}
            onClick={() => toggleFlip(card.id)}
          >
            <div className="flashcard-face flashcard-front">
              <div className="flashcard-icon">{card.icon}</div>
              <h3 className="flashcard-title">{card.title}</h3>
              <p className="flashcard-subtitle">{card.subtitle}</p>
              <div className="flip-hint">
                <RefreshCcw size={12} /> Click to flip
              </div>
            </div>
            
            <div className="flashcard-face flashcard-back">
              <h3 className="flashcard-back-title">{card.title}</h3>
              <p className="flashcard-desc">{card.desc}</p>
              <div className="flip-hint" style={{ color: 'var(--white)' }}>
                <RefreshCcw size={12} /> Click to flip back
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flashcards;
