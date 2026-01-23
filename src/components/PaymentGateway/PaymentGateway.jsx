import { useState, useEffect } from 'react';
import styles from './PaymentGateway.module.css';

const PaymentGateway = () => {
  const [amount, setAmount] = useState('');
  const [activeTab, setActiveTab] = useState('qr'); // 'qr', 'upi', 'card'
  
  // UPI/OTP States
  const [phone, setPhone] = useState('');
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(60);

  // Card States
  const [cardDetails, setCardDetails] = useState({
    number: '',
    holder: '',
    expiry: '',
    cvv: ''
  });

  // Processing States
  const [processing, setProcessing] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(null); // null, 'success', 'failed'
  const [error, setError] = useState('');

  // --- Common Helpers ---
  const resetForm = () => {
    setAmount('');
    setPhone('');
    setShowOTP(false);
    setOtp(['', '', '', '', '', '']);
    setCardDetails({ number: '', holder: '', expiry: '', cvv: '' });
    setProcessing(false);
    setPaymentStatus(null);
    setError('');
  };

  // Helper to allow only numbers in inputs (blocks 'e', '+', '-', etc.)
  const preventNonNumeric = (e) => {
    if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter'].includes(e.key)) return;
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  // --- Method 1: QR Logic ---
  const handleQRScanSimulation = () => {
    if (!amount || parseInt(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }
    setError('');
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      setPaymentStatus('success');
    }, 2500);
  };

  // --- Method 2: UPI/OTP Logic ---
  const handleSendOtp = () => {
    if (!amount) {
      setError('Please enter amount first');
      return;
    }
    if (phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }
    setError('');
    setProcessing(true);

    setTimeout(() => {
      setProcessing(false);
      setShowOTP(true);
      setTimer(60);
    }, 1500);
  };

  const handleOtpChange = (index, value) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    // Also block non-numeric keys for OTP
    if (['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      // Allow navigation
      if (e.key === 'Backspace' && !otp[index] && index > 0) {
        document.getElementById(`otp-${index - 1}`).focus();
      }
      return;
    }
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const verifyOtpAndPay = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp.length !== 6) {
      setError('Please enter complete 6-digit OTP');
      return;
    }
    
    setProcessing(true);
    setError('');

    setTimeout(() => {
      if (enteredOtp === '123456') {
        setProcessing(false);
        setPaymentStatus('success');
      } else {
        setProcessing(false);
        setError('Invalid OTP. Try 123456');
      }
    }, 2000);
  };

  useEffect(() => {
    if (showOTP && timer > 0) {
      const interval = setInterval(() => setTimer(p => p - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [showOTP, timer]);

  // --- Method 3: Card Logic ---
  
  // Handle Card Number Formatting
  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    // Group by 4
    const parts = [];
    for (let i = 0, len = value.length; i < len; i += 4) {
      parts.push(value.substring(i, i + 4));
    }
    if (parts.length) {
      setCardDetails(prev => ({ ...prev, number: parts.join(' ') }));
    } else {
      setCardDetails(prev => ({ ...prev, number: value }));
    }
  };

  // Handle Expiry Date (MM/YY) - Automatic Slash
  const handleExpiryChange = (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Only numbers
    
    if (value.length > 4) value = value.slice(0, 4); // Limit to 4 digits (MMYY)

    if (value.length >= 2) {
      // Insert slash after 2nd char
      value = `${value.slice(0, 2)}/${value.slice(2)}`;
    }

    setCardDetails(prev => ({ ...prev, expiry: value }));
  };

  // General Card Change (CVV, Holder)
  const handleCardGenericChange = (e) => {
    const { name, value } = e.target;
    setCardDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleCardPay = () => {
    if (!amount) return setError('Please enter an amount first');
    
    // Strict Validation
    if (cardDetails.number.replace(/\s/g, '').length < 16) {
      return setError('Please enter a valid 16-digit Card Number');
    }
    if (cardDetails.expiry.length !== 5) { // 5 chars: MM/YY
      return setError('Please enter a valid Expiry Date (MM/YY)');
    }
    if (cardDetails.cvv.length < 3) {
      return setError('Please enter a valid CVV');
    }
    if (!cardDetails.holder.trim()) {
      return setError('Please enter Card Holder Name');
    }
    
    setError('');
    setProcessing(true);
    
    setTimeout(() => {
      setProcessing(false);
      setPaymentStatus('success');
    }, 3000);
  };

  // --- Render Content ---
  const renderTabContent = () => {
    switch (activeTab) {
      case 'qr':
        return (
          <div className={`${styles.tabContent} fade-in`}>
            <div className={styles.qrContainer}>
              <div className={styles.qrFrame}>
                <div className={styles.qrCode}>
                   <div className={styles.qrPattern}></div>
                </div>
                {amount ? (
                  <div className={styles.qrOverlay}>
                    <span className={styles.qrOverlayText}>₹ {amount}</span>
                  </div>
                ) : (
                  <div className={styles.qrBlur}>
                    <span>Enter Amount to Generate QR</span>
                  </div>
                )}
              </div>
              <p className={styles.tabInstruction}>
                Scan this code with GPay, PhonePe, or Paytm
              </p>
              <button 
                className={styles.primaryAction} 
                onClick={handleQRScanSimulation}
                disabled={processing || !amount}
              >
                {processing ? 'Processing...' : 'Simulate Scan & Pay'}
              </button>
            </div>
          </div>
        );

      case 'upi':
        return (
          <div className={`${styles.tabContent} fade-in`}>
            {!showOTP ? (
              <div className={styles.upiForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Mobile Number <span className={styles.required}>*</span>
                  </label>
                  <div className={styles.inputIconWrapper}>
                    <span className={styles.inputIcon}>📱</span>
                    <input 
                      type="text" 
                      inputMode="numeric"
                      className={styles.formInput}
                      placeholder="9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))} // Ensure pure digits
                      onKeyDown={preventNonNumeric}
                      maxLength="10"
                    />
                  </div>
                </div>
                <button 
                  className={styles.primaryAction}
                  onClick={handleSendOtp}
                  disabled={processing}
                >
                  {processing ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            ) : (
              <div className={styles.otpForm}>
                <div className={styles.otpHeader}>
                  <span>Enter OTP sent to +91 {phone}</span>
                  <button onClick={() => setShowOTP(false)} className={styles.editPhone}>Edit</button>
                </div>
                <div className={styles.otpInputs}>
                  {otp.map((digit, i) => (
                    <input
                      key={i}
                      id={`otp-${i}`}
                      type="text"
                      inputMode="numeric"
                      className={styles.otpInput}
                      value={digit}
                      maxLength="1"
                      onChange={(e) => handleOtpChange(i, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(i, e)}
                    />
                  ))}
                </div>
                <div className={styles.timerWrapper}>
                   Resend in {timer}s
                </div>
                <button 
                  className={styles.primaryAction}
                  onClick={verifyOtpAndPay}
                  disabled={processing}
                >
                  {processing ? 'Verifying...' : 'Verify & Pay'}
                </button>
              </div>
            )}
          </div>
        );

      case 'card':
        return (
          <div className={`${styles.tabContent} fade-in`}>
            <div className={styles.cardForm}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Card Number <span className={styles.required}>*</span>
                </label>
                <div className={styles.inputIconWrapper}>
                   <span className={styles.inputIcon}>💳</span>
                   <input 
                    type="text" 
                    name="number"
                    inputMode="numeric"
                    className={styles.formInput}
                    placeholder="0000 0000 0000 0000"
                    value={cardDetails.number}
                    onChange={handleCardNumberChange}
                    onKeyDown={preventNonNumeric}
                    maxLength="19"
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Expiry (MM/YY) <span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="text" 
                    name="expiry"
                    inputMode="numeric"
                    className={styles.formInput}
                    placeholder="MM/YY"
                    value={cardDetails.expiry}
                    onChange={handleExpiryChange}
                    onKeyDown={preventNonNumeric}
                    maxLength="5"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    CVV <span className={styles.required}>*</span>
                  </label>
                  <input 
                    type="password" 
                    name="cvv"
                    inputMode="numeric"
                    className={styles.formInput}
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails(prev => ({...prev, cvv: e.target.value.replace(/\D/g, '')}))}
                    onKeyDown={preventNonNumeric}
                    maxLength="3"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Card Holder Name <span className={styles.required}>*</span>
                </label>
                <input 
                  type="text" 
                  name="holder"
                  className={styles.formInput}
                  placeholder="JOHN DOE"
                  value={cardDetails.holder}
                  onChange={handleCardGenericChange}
                  // No numeric restriction here, allow alphabets
                />
              </div>

              <button 
                className={styles.primaryAction}
                onClick={handleCardPay}
                disabled={processing}
              >
                {processing ? 'Processing...' : `Pay ₹ ${amount || '0'}`}
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.paymentGateway}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>Secure Checkout</h2>
          <p className={styles.subtitle}>Complete your transaction safely</p>
        </div>

        <div className={styles.layout}>
          
          {/* LEFT: Controls */}
          <div className={styles.controlsPanel}>
            
            {/* 1. Global Amount Input */}
            <div className={styles.amountSection}>
              <label className={styles.amountLabel}>
                Enter Amount <span className={styles.required}>*</span>
              </label>
              <div className={styles.amountWrapper}>
                <span className={styles.currencySymbol}>₹</span>
                <input 
                  type="text" // Using text to better control filtering
                  inputMode="numeric"
                  className={styles.amountInput}
                  placeholder="0"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))} // Filter non-digits
                  onKeyDown={preventNonNumeric} // Block non-numeric keys
                />
              </div>
            </div>

            {/* 2. Payment Tabs */}
            <div className={styles.tabsContainer}>
              <button 
                className={`${styles.tab} ${activeTab === 'qr' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('qr')}
              >
                <span className={styles.tabIcon}>📷</span>
                QR Code
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'upi' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('upi')}
              >
                 <span className={styles.tabIcon}>⚡</span>
                 UPI / OTP
              </button>
              <button 
                className={`${styles.tab} ${activeTab === 'card' ? styles.activeTab : ''}`}
                onClick={() => setActiveTab('card')}
              >
                 <span className={styles.tabIcon}>💳</span>
                 Card
              </button>
            </div>

            {/* 3. Dynamic Tab Content */}
            <div className={styles.contentArea}>
              {error && <div className={styles.errorMessage}>{error}</div>}
              {renderTabContent()}
            </div>
          </div>

          {/* RIGHT: Summary */}
          <div className={styles.summaryPanel}>
            <div className={styles.summaryCard}>
              <h3 className={styles.summaryTitle}>Order Summary</h3>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>₹ {amount || '0'}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Platform Fee</span>
                <span className={styles.freeText}>Free</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.totalRow}>
                <span>Total Payable</span>
                <span>₹ {amount || '0'}</span>
              </div>
              
              <div className={styles.securityBadge}>
                <span className={styles.lockIcon}>🔒</span>
                <div>
                  <div className={styles.secTitle}>100% Secure</div>
                  <div className={styles.secDesc}>256-bit Encryption</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Success Modal Overlay */}
        {paymentStatus === 'success' && (
          <div className={styles.modalOverlay}>
            <div className={`${styles.modal} fade-in`}>
              <div className={styles.successIcon}>✅</div>
              <h3>Payment Successful!</h3>
              <p>Transaction ID: QP{Date.now().toString().slice(-8)}</p>
              <p className={styles.successAmount}>₹ {amount}</p>
              <button className={styles.closeBtn} onClick={resetForm}>
                Make Another Payment
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default PaymentGateway;