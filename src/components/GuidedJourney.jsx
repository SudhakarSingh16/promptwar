import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, CheckCircle, ExternalLink, FileText, Vote, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import './GuidedJourney.css';
import EvmSimulation from './EvmSimulation';

const STEPS = [
  { id: 'eligibility', title: 'Eligibility Check', icon: <ShieldCheck size={32} color="var(--accent-blue)" /> },
  { id: 'registration', title: 'Registration (Form 6)', icon: <FileText size={32} color="var(--saffron)" /> },
  { id: 'epic', title: 'Your Voter ID', icon: <User size={32} color="var(--navy)" /> },
  { id: 'booth', title: 'Find Your Booth', icon: <MapPin size={32} color="var(--green)" /> },
  { id: 'voting', title: 'Voting Process (EVM)', icon: <Vote size={32} color="var(--saffron)" /> },
  { id: 'completion', title: 'Ready to Vote!', icon: <CheckCircle size={32} color="var(--green)" /> }
];

// Need these icons for STEPS definition
import { User, MapPin } from 'lucide-react';

const GuidedJourney = ({ userData, onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isConfused, setIsConfused] = useState(false);

  const currentStep = STEPS[currentStepIndex];
  const progressPercentage = ((currentStepIndex) / (STEPS.length - 1)) * 100;

  useEffect(() => {
    if (currentStepIndex === STEPS.length - 1) {
      triggerConfetti();
    }
  }, [currentStepIndex]);

  const triggerConfetti = () => {
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FF9933', '#FFFFFF', '#138808']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FF9933', '#FFFFFF', '#138808']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleNext = () => {
    if (currentStepIndex < STEPS.length - 1) {
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        setCurrentStepIndex(prev => prev + 1);
        setIsConfused(false);
      }, 1000);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
      setIsConfused(false);
    }
  };

  const renderStepContent = () => {
    switch (currentStep.id) {
      case 'eligibility':
        return (
          <>
            <div className="step-description">
              {isConfused ? (
                <p><strong>Simple terms:</strong> You must be an Indian citizen and at least 18 years old on Jan 1st of the election year.</p>
              ) : (
                <p>To vote in India, you must meet certain criteria set by the Election Commission of India (ECI). Let's check if you are ready to proceed.</p>
              )}
            </div>
            <div className="interactive-box">
              <h4 style={{ marginBottom: '1rem', color: 'var(--navy)' }}>Basic Requirements:</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={20} color="var(--green)" /> Indian Citizen
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={20} color="var(--green)" /> 18 years or older on the qualifying date (usually Jan 1st)
                </li>
                <li style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <CheckCircle size={20} color="var(--green)" /> Ordinary resident of the polling area
                </li>
              </ul>
              {userData && userData.age && (
                <div style={{ marginTop: '1rem', padding: '1rem', background: userData.age >= 18 ? 'rgba(19, 136, 8, 0.1)' : 'rgba(255, 0, 0, 0.1)', borderRadius: '8px' }}>
                  Based on your dashboard, you are {userData.age} years old. 
                  {userData.age >= 18 ? " You meet the age requirement! 🎉" : " You need to be 18 to vote."}
                </div>
              )}
            </div>
          </>
        );

      case 'registration':
        return (
          <>
            <div className="step-description">
              {isConfused ? (
                <p><strong>Simple terms:</strong> Fill out 'Form 6' online to get your name on the voter list. You need an address proof and a photo.</p>
              ) : (
                <p>If you meet the eligibility criteria, the next step is to register your name in the Electoral Roll. This is done by filling out <strong>Form 6</strong>.</p>
              )}
            </div>
            <div className="interactive-box">
              <h4 style={{ marginBottom: '1rem', color: 'var(--saffron)' }}>What you need for Form 6:</h4>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>📸 Passport size photo</div>
                <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>🏠 Proof of Address (Aadhaar, Bill)</div>
                <div style={{ padding: '0.5rem 1rem', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '8px' }}>📅 Proof of Age (Birth Cert, PAN)</div>
              </div>
            </div>
            <a href="#" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }} onClick={(e) => e.preventDefault()}>
              View Official Portal Link <ExternalLink size={16} />
            </a>
          </>
        );

      case 'voting':
        return (
          <>
            <div className="step-description">
              {isConfused ? (
                <p><strong>Simple terms:</strong> Press the blue button next to your chosen candidate on the machine. A red light will beep. You've voted!</p>
              ) : (
                <p>India uses Electronic Voting Machines (EVMs). Let's practice how to cast your vote safely and confidently.</p>
              )}
            </div>
            <div className="interactive-box" style={{ padding: 0, border: 'none', background: 'transparent' }}>
              <EvmSimulation onVoteSuccess={() => {
                // Could auto-advance or just let them click next
              }} />
            </div>
          </>
        );
      
      case 'epic':
        return (
            <>
               <div className="step-description">
                <p>Once registered, you receive an EPIC (Elector's Photo Identity Card), commonly known as a Voter ID. You must carry this or another approved ID to the polling booth.</p>
              </div>
              <div style={{ padding: '2rem', background: 'var(--navy)', color: 'white', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <User size={64} color="var(--saffron)" />
                  <div>
                      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>ELECTION COMMISSION OF INDIA</h3>
                      <p style={{ opacity: 0.8 }}>Identity Card</p>
                      <div style={{ marginTop: '1rem', fontFamily: 'monospace', fontSize: '1.2rem', letterSpacing: '2px', color: 'var(--saffron-light)' }}>
                          ABC1234567
                      </div>
                  </div>
              </div>
            </>
        );

      case 'booth':
         return (
            <>
               <div className="step-description">
                <p>You can only vote at your designated polling booth. Before election day, check your booth slip or search online using your EPIC number.</p>
              </div>
              <div className="interactive-box" style={{ textAlign: 'center' }}>
                  <MapPin size={48} color="var(--accent-blue)" style={{ margin: '0 auto 1rem' }} />
                  <h4>Find Your Polling Station</h4>
                  <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>Usually located in a nearby school or community hall.</p>
                  <button className="btn btn-secondary">Simulate Search Booth</button>
              </div>
            </>
        );

      case 'completion':
        return (
          <div className="completion-card">
            <div className="completion-icon">
              <CheckCircle size={48} />
            </div>
            <h2 className="step-title" style={{ justifyContent: 'center' }}>You are Election-Ready! 🇮🇳</h2>
            <p className="step-description">
              You've successfully learned the steps to participate in the world's largest democracy.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
              <button className="btn btn-primary" onClick={onComplete}>Back to Home</button>
              <a href="https://voters.eci.gov.in/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ display: 'inline-flex', gap: '0.5rem' }}>
                Go to ECI Portal <ExternalLink size={18} />
              </a>
            </div>
          </div>
        );

      default:
        return <p>Content for this step is under construction.</p>;
    }
  };

  return (
    <div className="journey-container">
      <div className="journey-header">
        <h2 style={{ fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>Your Voting Journey</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Follow these steps to become a registered voter.</p>
      </div>

      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="step-indicator">
        <span>Step {currentStepIndex + 1} of {STEPS.length}</span>
        <span>{Math.round(progressPercentage)}% Completed</span>
      </div>

      <div className={`step-card ${currentStep.id === 'completion' ? 'completion-card' : ''}`}>
        {showFeedback && (
          <div className="feedback-toast">
            Nice! You've completed Step {currentStepIndex + 1} 🎉
          </div>
        )}

        {currentStep.id !== 'completion' && (
          <h3 className="step-title">
            {currentStep.icon} {currentStep.title}
          </h3>
        )}

        <div className="step-content">
          {renderStepContent()}
        </div>

        {currentStep.id !== 'completion' && (
          <div className="step-actions">
            <div>
              <button 
                className="btn btn-secondary" 
                onClick={handlePrev}
                disabled={currentStepIndex === 0}
                style={{ opacity: currentStepIndex === 0 ? 0.5 : 1 }}
              >
                <ChevronLeft size={20} /> Back
              </button>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
               <button 
                className="btn btn-outline" 
                onClick={() => setIsConfused(!isConfused)}
              >
                {isConfused ? "Show Details" : "Explain Simply"}
              </button>
              <button className="btn btn-primary" onClick={handleNext}>
                {currentStepIndex === STEPS.length - 2 ? 'Finish Journey' : 'Next Step'} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidedJourney;
