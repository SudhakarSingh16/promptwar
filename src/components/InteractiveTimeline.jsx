import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import './InteractiveTimeline.css';

const TIMELINE_DATA = [
  {
    id: 'registration',
    title: 'Registration Phase',
    date: 'Months Before Election',
    description: 'The Election Commission publishes the draft electoral roll. This is the time to register yourself, check if your name is on the list, and make any corrections.',
    action: 'Check your name on the voter list'
  },
  {
    id: 'campaign',
    title: 'Campaign Phase',
    date: 'Weeks Before Election',
    description: 'Political parties and candidates announce their manifestos and hold rallies. Use this time to research the candidates in your constituency.',
    action: 'Read candidate profiles'
  },
  {
    id: 'voting',
    title: 'Voting Day',
    date: 'Election Day',
    description: 'Polling booths open typically from 7 AM to 6 PM. Go to your designated booth with your Voter ID (EPIC) or approved alternative ID. Cast your vote using the EVM.',
    action: 'Find your polling booth'
  },
  {
    id: 'counting',
    title: 'Counting & Results',
    date: 'Post-Election',
    description: 'EVMs are unsealed and votes are counted under strict supervision. Results are declared, and the winning candidates form the new government.',
    action: 'Follow official results'
  }
];

const InteractiveTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="timeline-container">
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Election Timeline</h2>
        <p className="section-subtitle">Understand the phases of the election process.</p>
      </div>

      <div className="timeline">
        {TIMELINE_DATA.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={item.id} 
              className={`timeline-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-title">{item.title}</div>
                  <div className="timeline-date">{item.date}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                   {isActive ? 'Click to collapse' : 'Click to expand'} 
                   {isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
                
                <div className="timeline-body">
                  <p>{item.description}</p>
                  <div className="timeline-action">
                    {item.action} <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
