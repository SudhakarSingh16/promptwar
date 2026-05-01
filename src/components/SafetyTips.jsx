import React from 'react';
import { ShieldAlert, AlertTriangle, Key, Smartphone } from 'lucide-react';

const SafetyTips = () => {
  return (
    <div className="container" style={{ padding: '2rem 1rem' }}>
      <div className="section-header" style={{ marginBottom: '2rem' }}>
        <h2 className="section-title">Safety & Fraud Awareness</h2>
        <p className="section-subtitle">Stay secure during the election season.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        
        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--accent-blue)' }}>
          <ShieldAlert size={32} color="var(--accent-blue)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>Beware of Fake Links</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Only trust URLs ending in <strong>.gov.in</strong> or <strong>.nic.in</strong>. Do not click links on WhatsApp claiming to issue Voter IDs.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid #EF4444' }}>
          <Key size={32} color="#EF4444" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>Never Share OTPs</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Election officials will <strong>never</strong> ask for your OTP or bank details over the phone.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--saffron)' }}>
          <Smartphone size={32} color="var(--saffron)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>No Phones Inside Booth</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Mobile phones, cameras, and smartwatches are strictly prohibited inside the polling station.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--green)' }}>
          <AlertTriangle size={32} color="var(--green)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ marginBottom: '0.5rem', color: 'var(--navy)' }}>Report Malpractice</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            Use the official ECI cVIGIL app to anonymously report model code violations or bribery attempts.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SafetyTips;
