import React, { useState } from 'react';
import { User, CheckCircle, XCircle, ArrowRight, MapPin } from 'lucide-react';
import './SmartDashboard.css';

const SmartDashboard = ({ userData, onUpdate, onStartJourney }) => {
  const [formData, setFormData] = useState(userData || {
    age: '',
    state: '',
    hasEpic: null,
    isFirstTime: null
  });

  const [isSubmitted, setIsSubmitted] = useState(!!userData);

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", 
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const setRadioValue = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.age && formData.state && formData.hasEpic !== null && formData.isFirstTime !== null) {
      setIsSubmitted(true);
      onUpdate(formData);
    } else {
      alert("Please fill all fields to generate your dashboard.");
    }
  };

  const isEligible = parseInt(formData.age) >= 18;

  if (!isSubmitted) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <div className="dashboard-header">
            <User size={32} color="var(--accent-blue)" />
            <div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--navy)' }}>Personalize Your Guide</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Tell us a bit about yourself to get customized instructions.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">How old are you?</label>
              <input 
                type="number" 
                name="age" 
                value={formData.age} 
                onChange={handleInputChange} 
                className="form-control" 
                placeholder="Enter your age"
                min="1"
                max="120"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Which state do you live in?</label>
              <select 
                name="state" 
                value={formData.state} 
                onChange={handleInputChange} 
                className="form-control"
              >
                <option value="">Select your state</option>
                {states.map(state => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Are you a first-time voter?</label>
              <div className="radio-group">
                <label className={`radio-label ${formData.isFirstTime === true ? 'active' : ''}`}>
                  <input type="radio" name="isFirstTime" checked={formData.isFirstTime === true} onChange={() => setRadioValue('isFirstTime', true)} />
                  Yes
                </label>
                <label className={`radio-label ${formData.isFirstTime === false ? 'active' : ''}`}>
                  <input type="radio" name="isFirstTime" checked={formData.isFirstTime === false} onChange={() => setRadioValue('isFirstTime', false)} />
                  No
                </label>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Do you have a Voter ID (EPIC)?</label>
              <div className="radio-group">
                <label className={`radio-label ${formData.hasEpic === true ? 'active' : ''}`}>
                  <input type="radio" name="hasEpic" checked={formData.hasEpic === true} onChange={() => setRadioValue('hasEpic', true)} />
                  Yes
                </label>
                <label className={`radio-label ${formData.hasEpic === false ? 'active' : ''}`}>
                  <input type="radio" name="hasEpic" checked={formData.hasEpic === false} onChange={() => setRadioValue('hasEpic', false)} />
                  No
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
              Generate My Dashboard <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card" style={{ borderTop: '4px solid var(--saffron)' }}>
        <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '1.5rem', textAlign: 'center' }}>
          Your Voting Status Dashboard
        </h2>

        <div className="summary-grid">
          <div className="summary-item">
            <div className="summary-label">Age</div>
            <div className="summary-value">
              {formData.age} {isEligible ? <CheckCircle size={20} color="var(--green)" /> : <XCircle size={20} color="red" />}
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-label">Location</div>
            <div className="summary-value" style={{ fontSize: '1rem' }}>
              <MapPin size={18} color="var(--accent-blue)" /> {formData.state}
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-label">Eligibility</div>
            <div className="summary-value" style={{ color: isEligible ? 'var(--green)' : 'red' }}>
              {isEligible ? 'Eligible' : 'Not Eligible'}
            </div>
          </div>
          <div className="summary-item">
            <div className="summary-label">Voter ID</div>
            <div className="summary-value">
              {formData.hasEpic ? (
                <><CheckCircle size={20} color="var(--green)" /> Registered</>
              ) : (
                <><XCircle size={20} color="red" /> Not Registered</>
              )}
            </div>
          </div>
        </div>

        <div className="status-box">
          <div className="status-title">👉 Recommended Action</div>
          <div className="status-desc">
            {!isEligible ? (
              "You must be 18 years or older to vote. You can still learn about the process so you are ready when you turn 18!"
            ) : !formData.hasEpic ? (
              "You need to register for a Voter ID. Start the journey to learn how to fill out Form 6."
            ) : formData.isFirstTime ? (
              "You are registered! Review the voting process so you know exactly what to do at the polling booth."
            ) : (
              "You are ready to vote! Check the timeline for upcoming election dates in your state."
            )}
          </div>
          <button className="btn btn-primary" onClick={onStartJourney}>
            {isEligible && !formData.hasEpic ? 'Start Registration Guide' : 'Start Voting Guide'} <ArrowRight size={18} />
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button className="btn btn-outline" onClick={() => setIsSubmitted(false)}>
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SmartDashboard;
