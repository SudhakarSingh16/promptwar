import React from 'react';
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import './HeroSection.css';

const HeroSection = ({ onStart, onCheckEligibility }) => {
  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      
      <div className="hero-content">
        <div className="hero-badge">
          Official Guidelines Simplified
        </div>
        
        <h1 className="hero-title">
          Become <span className="gradient-text">Election-Ready</span> in Minutes 🇮🇳
        </h1>
        
        <p className="hero-subtitle">
          Your smart, step-by-step AI guide to voting in India. From eligibility checks to casting your vote on the EVM, we make democracy simple.
        </p>
        
        <div className="hero-actions">
          <button className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={onStart}>
            Start My Voting Journey <ArrowRight size={20} />
          </button>
          <button className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }} onClick={onCheckEligibility}>
            Check Eligibility <CheckCircle size={20} style={{ color: 'var(--green)' }} />
          </button>
        </div>

        <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', animation: 'fadeIn 1s ease-out 0.8s both', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle size={16} color="var(--green)" /> 100% Free & Secure
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} color="var(--accent-blue)" /> Updated for Next Elections
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
