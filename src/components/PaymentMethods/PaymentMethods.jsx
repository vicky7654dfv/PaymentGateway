import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './PaymentMethods.module.css';

const PaymentMethods = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Expanded Options inspired by Super Apps (Paytm/PhonePe)
  const paymentOptions = [
    { id: 1, name: "Scan & Pay", icon: "📷" },
    { id: 2, name: "To Mobile", icon: "📱" },
    { id: 3, name: "To Self", icon: "👤" },
    { id: 4, name: "Bank Balance", icon: "🏦" },
    { id: 5, name: "Mobile Recharge", icon: "🔋" },
    { id: 6, name: "DTH", icon: "📡" },
    { id: 7, name: "Electricity", icon: "⚡" },
    { id: 8, name: "Credit Card", icon: "💳" },
    { id: 9, name: "Rent Pay", icon: "🏠" },
    { id: 10, name: "Fastag", icon: "🚗" },
  ];

  // Dummy Payment Gateway Brands for the Central Carousel
  const gateways = [
    "VISA", "MasterCard", "RuPay", "UPI", "PayPal", "Amex", "Stripe", "Razorpay"
  ];

  const recentPayees = [
    { id: 1, name: "Netflix Premium", type: "Subscription", date: "Due in 2 days" },
    { id: 2, name: "Uber Rides", type: "Travel", date: "Last paid yesterday" },
    { id: 3, name: "Zomato Orders", type: "Food & Dining", date: "Frequent" },
    { id: 4, name: "Jio Fiber", type: "Broadband", date: "Due Today" },
  ];

  return (
    <section className={styles.outerContainer} data-aos="fade-up">
      <div className={styles.innerWrapper}>
        
        {/* --- Header --- */}
        <div className={styles.header}>
          <h2 className={styles.title}>Money Transfer & Bills</h2>
          <Link to="/Error" className={styles.viewAllBtn}>View All</Link>
        </div>

        {/* --- Top Options (Horizontal Scroll) --- */}
        <div className={styles.carouselContainer}>
          {paymentOptions.map((option) => (
            <Link to="/Error" key={option.id} className={styles.cardLink}>
              <div className={styles.optionCard}>
                <div className={styles.iconCircle}>{option.icon}</div>
                <span className={styles.optionName}>{option.name}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* --- NEW: Central Gateway Marquee (Infinite Scroll) --- */}
        <div className={styles.gatewaySection}>
          <h4 className={styles.sectionLabel}>Supported Payments</h4>
          <div className={styles.marqueeWrapper}>
            <div className={styles.marqueeContent}>
              {/* Duplicated list for seamless infinite scroll */}
              {[...gateways, ...gateways, ...gateways].map((gw, index) => (
                <span key={index} className={styles.gatewayLogo}>{gw}</span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Quick Actions Grid --- */}
        <div className={styles.quickActionsSection}>
          <h3 className={styles.subTitle}>Recent Payments</h3>
          <div className={styles.gridContainer}>
            {recentPayees.map((payee) => (
              <div key={payee.id} className={styles.gridItem}>
                <div className={styles.payeeInfo}>
                  <span className={styles.payeeName}>{payee.name}</span>
                  <div className={styles.payeeMeta}>
                    <span className={styles.payeeType}>{payee.type}</span>
                    <span className={styles.payeeDate}>• {payee.date}</span>
                  </div>
                </div>
                <Link to="/Error" className={styles.payBtn}>Repeat</Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default PaymentMethods;