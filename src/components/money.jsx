import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import './money.css';

function Money() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    senderName: '',
    senderAccount: '',
    recipientName: '',
    recipientAccount: '',
    bank: '',
    amount: '',
    description: ''
  });

  const formRef = useRef(null);
  const successRef = useRef(null);



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to('.form-container', { duration: 0.5, opacity: 0, onComplete: () => {
      gsap.set('.form-container', { display: 'none' });
      gsap.set(successRef.current, { display: 'block', opacity: 0 });
      gsap.to(successRef.current, { duration: 1, opacity: 1, ease: "power2.out" });
    }});
  };

  const resetForm = () => {
    gsap.to(successRef.current, { duration: 0.5, opacity: 0, onComplete: () => {
      gsap.set(successRef.current, { display: 'none' });
      gsap.set('.form-container', { display: 'flex', opacity: 0 });
      gsap.to('.form-container', { duration: 1, opacity: 1, ease: "power2.out" });
      setStep(1);
      setFormData({
        senderName: '',
        senderAccount: '',
        recipientName: '',
        recipientAccount: '',
        bank: '',
        amount: '',
        description: ''
      });
    }});
  };

  return (
    <div className="money-app">
      <header className="header">
        <div className="logo">
          <i className="fas fa-money-bill-wave"></i>
          <span>MoneyTransfer</span>
        </div>
      </header>

      <div className="main-container">
        <div className="form-container" ref={formRef}>
          <div className="progress-container">
            <div className="step-indicator">
              <div className={`step-number ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className="step-label">Sender Info</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-indicator">
              <div className={`step-number ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className="step-label">Recipient Info</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-indicator">
              <div className={`step-number ${step >= 3 ? 'active' : ''}`}>3</div>
              <div className="step-label">Confirmation</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="transfer-form">
            {step === 1 && (
              <div className="form-step">
                <h2>Sender Information</h2>
                <div className="input-group">
                  <input
                    type="text"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Your Full Name</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="senderAccount"
                    value={formData.senderAccount}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Your Account Number</label>
                </div>
                <button type="button" className="btn-next" onClick={nextStep}>
                  Continue <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Recipient Information</h2>
                <div className="input-group">
                  <input
                    type="text"
                    name="recipientName"
                    value={formData.recipientName}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Recipient Full Name</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="recipientAccount"
                    value={formData.recipientAccount}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Recipient Account Number</label>
                </div>
                <div className="input-group">
                  <select 
                    name="bank" 
                    value={formData.bank} 
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Bank</option>
                    <option value="Chase Bank">Chase Bank</option>
                    <option value="Bank of America">Bank of America</option>
                    <option value="Wells Fargo">Wells Fargo</option>
                    <option value="Citibank">Citibank</option>
                  </select>
                  <label>Bank Name</label>
                </div>
                <div className="button-group">
                  <button type="button" className="btn-prev" onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i> Back
                  </button>
                  <button type="button" className="btn-next" onClick={nextStep}>
                    Continue <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="form-step">
                <h2>Transfer Details</h2>
                <div className="input-group">
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Amount ($)</label>
                </div>
                <div className="input-group">
                  <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                  />
                  <label>Description (Optional)</label>
                </div>
                <div className="summary">
                  <h3>Transaction Summary</h3>
                  <p><strong>From:</strong> {formData.senderName} ({formData.senderAccount})</p>
                  <p><strong>To:</strong> {formData.recipientName} ({formData.recipientAccount})</p>
                  <p><strong>Bank:</strong> {formData.bank}</p>
                  <p><strong>Amount:</strong> ${formData.amount}</p>
                </div>
                <div className="button-group">
                  <button type="button" className="btn-prev" onClick={prevStep}>
                    <i className="fas fa-arrow-left"></i> Back
                  </button>
                  <button type="submit" className="btn-submit">
                    Send Money <i className="fas fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="success-message" ref={successRef} style={{display: 'none'}}>
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Transfer Successful!</h2>
          <p>Your money transfer has been processed successfully.</p>
          <div className="success-details">
            <p><strong>Transaction ID:</strong> TXN{Math.floor(Math.random() * 1000000)}</p>
            <p><strong>Amount:</strong> ${formData.amount}</p>
            <p><strong>Recipient:</strong> {formData.recipientName}</p>
          </div>
          <button className="btn-new-transfer" onClick={resetForm}>
            <i className="fas fa-plus"></i> New Transfer
          </button>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-icon icon-1">
          <i className="fas fa-dollar-sign"></i>
        </div>
        <div className="floating-icon icon-2">
          <i className="fas fa-coins"></i>
        </div>
        <div className="floating-icon icon-3">
          <i className="fas fa-chart-line"></i>
        </div>
      </div>
    </div>
  );
}

export default Money;