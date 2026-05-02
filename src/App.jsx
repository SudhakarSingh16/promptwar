import React, { useState } from 'react';
import { Vote, Menu, X, ShieldAlert, FileQuestion } from 'lucide-react';
import './App.css';
import HeroSection from './components/HeroSection';
import SmartDashboard from './components/SmartDashboard';
import GuidedJourney from './components/GuidedJourney';
import InteractiveTimeline from './components/InteractiveTimeline';
import Flashcards from './components/Flashcards';
import SafetyTips from './components/SafetyTips';
import OfficialLinks from './components/OfficialLinks';
import ElectionQuiz from './components/ElectionQuiz';
import ChatAssistant from './components/ChatAssistant';

function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home', 'journey', 'dashboard'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleStartJourney = () => {
    setCurrentView('journey');
    window.scrollTo(0, 0);
  };

  const handleDashboardUpdate = (data) => {
    setUserData(data);
    setCurrentView('dashboard');
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div className="nav-brand" onClick={() => setCurrentView('home')} style={{ cursor: 'pointer' }}>
            <Vote className="nav-logo-icon" size={28} />
            <span>Vote<span className="india-gradient-text">India</span></span>
          </div>

          <div className="nav-links" style={{ display: 'none' /* Will make responsive later */ }}>
            <button className="nav-link" onClick={() => setCurrentView('home')}>Home</button>
            <button className="nav-link" onClick={() => setCurrentView('dashboard')}>My Status</button>
            <button className="nav-link" onClick={handleStartJourney}>Journey</button>
          </div>

          {/* Simplistic mobile menu toggle for now */}
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <main className="main-content">
        {currentView === 'home' && (
          <>
            <HeroSection onStart={handleStartJourney} onCheckEligibility={() => setCurrentView('dashboard')} />
            {/* Cards for navigation */}
            <section className="container">
              <div className="section-header">
                <h2 className="section-title">Explore Resources</h2>
                <p className="section-subtitle">Everything you need to know about the Indian electoral process.</p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer' }} onClick={() => setCurrentView('dashboard')}>
                   <div style={{ background: 'var(--saffron-light)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff' }}>
                     <Vote size={30} />
                   </div>
                   <h3>Check Eligibility</h3>
                   <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Find out if you can vote and what you need.</p>
                </div>
                <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer' }} onClick={handleStartJourney}>
                   <div style={{ background: 'var(--accent-blue)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff' }}>
                     <Menu size={30} />
                   </div>
                   <h3>Step-by-Step Guide</h3>
                   <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>A complete journey from registration to voting.</p>
                </div>
                 <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer' }}>
                   <div style={{ background: 'var(--green-light)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff' }}>
                     <ShieldAlert size={30} />
                   </div>
                   <h3>Safety & Tips</h3>
                   <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Learn how to stay safe and aware of election fraud.</p>
                </div>
              </div>
            </section>
            <section style={{ background: 'var(--white)' }}>
              <InteractiveTimeline />
            </section>
            <section>
              <Flashcards />
            </section>
            <section style={{ background: 'var(--bg-primary)' }}>
              <SafetyTips />
            </section>
            <section style={{ background: 'var(--white)' }}>
              <ElectionQuiz />
            </section>
            <section>
              <OfficialLinks />
            </section>
          </>
        )}

        {currentView === 'dashboard' && (
          <SmartDashboard userData={userData} onUpdate={handleDashboardUpdate} onStartJourney={handleStartJourney} />
        )}

        {currentView === 'journey' && (
          <GuidedJourney userData={userData} onComplete={() => setCurrentView('home')} />
        )}
      </main>

      <ChatAssistant />

      <footer style={{ background: 'var(--navy)', color: 'var(--white)', padding: '2rem 0', textAlign: 'center' }}>
        <div className="container">
          <Vote size={32} style={{ color: 'var(--saffron)', margin: '0 auto 1rem' }} />
          <p style={{ opacity: 0.8 }}>Not an official ECI website. Built for educational purposes.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
