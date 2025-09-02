import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import './money.css';

function Money() {
  const [step, setStep] = useState(1);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [formData, setFormData] = useState({
    senderName: '',
    senderAccount: '',
    recipientName: '',
    recipientAccount: '',
    bank: '',
    amount: '',
    description: '',
    upiId: ''
  });

  const formRef = useRef(null);
  const successRef = useRef(null);

  const paymentMethods = [
    { id: 'gpay', name: 'Google Pay', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Google_Pay_logo.png/800px-Google_Pay_logo.png' },
    { id: 'paytm', name: 'Paytm', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Paytm_logo.png/800px-Paytm_logo.png' },
    { id: 'phonepe', name: 'PhonePe', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/PhonePe_Logo.svg/1280px-PhonePe_Logo.svg.png' },
    { id: 'bhim', name: 'BHIM UPI', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BHIM_Logo.svg/1200px-BHIM_Logo.svg.png' },
    { id: 'amazonpay', name: 'Amazon Pay', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Amazon-Pay-Logo.svg/1280px-Amazon-Pay-Logo.svg.png' },
    { id: 'bank', name: 'Bank Transfer', icon: 'https://cdn-icons-png.flaticon.com/512/2554/2554837.png' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleMethodSelect = (methodId) => {
    setSelectedMethod(methodId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.to('.form-container', {
      duration: 0.5, opacity: 0, onComplete: () => {
        gsap.set('.form-container', { display: 'none' });
        gsap.set(successRef.current, { display: 'block', opacity: 0 });
        gsap.to(successRef.current, { duration: 1, opacity: 1, ease: "power2.out" });
      }
    });
  };

  const resetForm = () => {
    gsap.to(successRef.current, {
      duration: 0.5, opacity: 0, onComplete: () => {
        gsap.set(successRef.current, { display: 'none' });
        gsap.set('.form-container', { display: 'flex', opacity: 0 });
        gsap.to('.form-container', { duration: 1, opacity: 1, ease: "power2.out" });
        setStep(1);
        setSelectedMethod('');
        setFormData({
          senderName: '',
          senderAccount: '',
          recipientName: '',
          recipientAccount: '',
          bank: '',
          amount: '',
          description: '',
          upiId: ''
        });
      }
    });
  };

  return (
    <div className="money-app">
      <header className="header">
        <div className="logo">
          <i className="fas fa-money-bill-wave"></i>
          <span>UPI Money Transfer</span>
        </div>
      </header>

      <div className="main-container">
        <div className="form-container" ref={formRef}>
          <div className="progress-container">
            <div className="step-indicator">
              <div className={`step-number ${step >= 1 ? 'active' : ''}`}>1</div>
              <div className="step-label">Payment Method</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-indicator">
              <div className={`step-number ${step >= 2 ? 'active' : ''}`}>2</div>
              <div className="step-label">Transfer Details</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="transfer-form">
            {step === 1 && (
              <div className="form-step">
                <h2>Select Payment Method</h2>
                <p className="step-description">Choose how you want to send money</p>

                <div className="payment-methods-grid">
                  {paymentMethods.map(method => (
                    <div
                      key={method.id}
                      className={`payment-method ${selectedMethod === method.id ? 'selected' : ''}`}
                      onClick={() => handleMethodSelect(method.id)}
                    >
                      <div className="method-icon">
                        <img src={method.icon} alt={method.name} />
                      </div>
                      <span className="method-name">{method.name}</span>
                    </div>
                  ))}
                </div>

                {selectedMethod && (
                  <div className="input-group">
                    <input
                      type="text"
                      name="upiId"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      placeholder="Enter UPI ID or Phone Number"
                      required
                    />
                    <label>UPI ID / Phone Number</label>
                  </div>
                )}

                <button
                  type="button"
                  className="btn-next"
                  onClick={nextStep}
                  disabled={!selectedMethod}
                >
                  Continue <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="form-step">
                <h2>Transfer Details</h2>
                <div className="selected-method-display">
                  <span>Paying with: </span>
                  <div className="selected-method">
                    <img
                      src={paymentMethods.find(m => m.id === selectedMethod)?.icon}
                      alt={selectedMethod}
                    />
                    <span>{paymentMethods.find(m => m.id === selectedMethod)?.name}</span>
                  </div>
                </div>

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
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                  />
                  <label>Amount (₹)</label>
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
                  <p><strong>Payment Method:</strong> {paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
                  <p><strong>Recipient:</strong> {formData.recipientName}</p>
                  <p><strong>Amount:</strong> ₹{formData.amount}</p>
                  {formData.description && <p><strong>Description:</strong> {formData.description}</p>}
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

        <div className="success-message" ref={successRef} style={{ display: 'none' }}>
          <div className="success-icon">
            <i className="fas fa-check-circle"></i>
          </div>
          <h2>Transfer Successful!</h2>
          <p>Your money transfer has been processed successfully.</p>
          <div className="success-details">
            <p><strong>Transaction ID:</strong> UPI{Math.floor(Math.random() * 1000000)}</p>
            <p><strong>Amount:</strong> ₹{formData.amount}</p>
            <p><strong>Recipient:</strong> {formData.recipientName}</p>
            <p><strong>Method:</strong> {paymentMethods.find(m => m.id === selectedMethod)?.name}</p>
          </div>
          <button className="btn-new-transfer" onClick={resetForm}>
            <i className="fas fa-plus"></i> New Transfer
          </button>
        </div>
      </div>

      <div className="floating-elements">
        <div className="floating-icon icon-1">
          <i className="fas fa-rupee-sign"></i>
        </div>
        <div className="floating-icon icon-2">
          <i className="fas fa-mobile-alt"></i>
        </div>
        <div className="floating-icon icon-3">
          <i className="fas fa-qrcode"></i>
        </div>
      </div>
    </div>
  );
}

export default Money;