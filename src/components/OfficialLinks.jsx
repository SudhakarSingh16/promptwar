import React from 'react';
import { ExternalLink, Globe, Landmark, BookOpen } from 'lucide-react';

const OfficialLinks = () => {
  const links = [
    {
      title: "Voter Portal (ECI)",
      desc: "Register to vote, track application status, and download e-EPIC.",
      url: "https://voters.eci.gov.in/",
      icon: <Globe size={24} color="var(--accent-blue)" />
    },
    {
      title: "Election Commission of India",
      desc: "The official portal for all election-related announcements and guidelines.",
      url: "https://eci.gov.in/",
      icon: <Landmark size={24} color="var(--saffron)" />
    },
    {
      title: "Know Your Candidate (KYC)",
      desc: "Download the app or view affidavits to know criminal antecedents of candidates.",
      url: "https://kyc.eci.gov.in/",
      icon: <BookOpen size={24} color="var(--green)" />
    }
  ];

  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Official Resources</h2>
        <p className="section-subtitle">Direct, secure links to government portals.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="glass-panel" 
            style={{ 
              padding: '1.5rem', 
              borderRadius: 'var(--radius-lg)', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'space-between',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              textDecoration: 'none'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-lg)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
          >
            <div>
              <div style={{ marginBottom: '1rem' }}>{link.icon}</div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>{link.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
                {link.desc}
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-blue)', fontWeight: '600', fontSize: '0.875rem' }}>
              Visit Portal <ExternalLink size={16} />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default OfficialLinks;
