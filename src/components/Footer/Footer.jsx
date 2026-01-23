import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  // Handle scroll to show/hide scroll top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Handle all error links
  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate('/Error');
  };

  // Footer navigation links
  const footerLinks = {
    'Quick Links': [
      { name: 'About Us', url: '/Error' },
      { name: 'Services', url: '/Error' },
      { name: 'FAQ', url: '/Error' },
      { name: 'Contact', url: '/Error' },
      { name: 'Careers', url: '/Error' },
      { name: 'Blog', url: '/Error' }
    ],
    'Payment Methods': [
      { name: 'UPI Payments', url: '/Error' },
      { name: 'Credit Cards', url: '/Error' },
      { name: 'Debit Cards', url: '/Error' },
      { name: 'Wallet', url: '/Error' },
      { name: 'Net Banking', url: '/Error' },
      { name: 'QR Payments', url: '/Error' }
    ],
    'Legal': [
      { name: 'Terms of Service', url: '/Error' },
      { name: 'Privacy Policy', url: '/Error' },
      { name: 'Cookie Policy', url: '/Error' },
      { name: 'Disclaimer', url: '/Error' },
      { name: 'Refund Policy', url: '/Error' },
      { name: 'Security', url: '/Error' }
    ],
    'Support': [
      { name: 'Help Center', url: '/Error' },
      { name: 'Community', url: '/Error' },
      { name: 'Status', url: '/Error' },
      { name: 'Report Issue', url: '/Error' },
      { name: 'Developer API', url: '/Error' },
      { name: 'Merchant Support', url: '/Error' }
    ]
  };

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: '/Error' },
    { name: 'Twitter', icon: '🐦', url: '/Error' },
    { name: 'Instagram', icon: '📸', url: '/Error' },
    { name: 'LinkedIn', icon: '💼', url: '/Error' },
    { name: 'YouTube', icon: '📺', url: '/Error' }
  ];

  // Contact info
  const contactInfo = [
    { icon: '📍', text: 'QuickPay HQ, Financial District, Mumbai' },
    { icon: '📞', text: '+91 22 6128 5000' },
    { icon: '✉️', text: 'support@quickpay.com' },
    { icon: '🕒', text: '24/7 Customer Support' }
  ];

  // Trust badges
  const trustBadges = [
    { icon: '🔒', title: 'PCI DSS', text: 'Compliant' },
    { icon: '🏛️', title: 'RBI', text: 'Certified' },
    { icon: '✅', title: 'ISO 27001', text: 'Certified' },
    { icon: '🛡️', title: '256-bit', text: 'Encryption' }
  ];

  // App store badges
  const appStores = [
    { 
      name: 'Google Play', 
      icon: '📱',
      subtitle: 'GET IT ON',
      url: '/Error'
    },
    { 
      name: 'App Store', 
      icon: '📱',
      subtitle: 'Download on the',
      url: '/Error'
    }
  ];

  return (
    <footer className={`${styles.footerWrap} fade-in`}>
      {/* Scroll to Top Button */}
      <button 
        className={`${styles.scrollTopButton} ${showScrollTop ? styles.show : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className={styles.scrollTopIcon}>↑</span>
      </button>

      <div className={styles.footerContainer}>
        {/* Main Footer Content - 5 columns like reference */}
        <div className={styles.footerMain}>
          {/* Column 1: Brand & Description */}
          <div className={styles.brandColumn}>
            <div className={styles.logoContainer}>
              <div className={styles.footerLogo}>
                <div className={styles.logoIcon}>
                  <div className={styles.logoCircle}></div>
                  <div className={styles.logoWave}></div>
                </div>
                <h3 className={styles.logoTitle}>QUICKPAY</h3>
              </div>
            </div>
            
            <p className={styles.brandDescription}>
              India's fastest and most secure digital payment platform. 
              Send, receive, and manage money instantly with bank-level security.
            </p>
            
            <button 
              className={styles.aboutButton}
              onClick={handleErrorLink}
            >
              About Our Mission <span className={styles.arrowIcon}>→</span>
            </button>

            {/* Social Media */}
            <div className={styles.socialMedia}>
              <h4 className={styles.socialTitle}>Connect With Us</h4>
              <div className={styles.socialIcons}>
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    className={styles.socialIcon}
                    onClick={handleErrorLink}
                    aria-label={social.name}
                  >
                    <span className={styles.iconEmoji}>{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {footerLinks['Quick Links'].map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <button 
                    className={styles.footerLink}
                    onClick={handleErrorLink}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Payment Methods */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Payment Methods</h4>
            <ul className={styles.linksList}>
              {footerLinks['Payment Methods'].map((link, index) => (
                <li key={index} className={styles.linkItem}>
                  <button 
                    className={styles.footerLink}
                    onClick={handleErrorLink}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Headquarters</h4>
            <ul className={styles.contactList}>
              {contactInfo.map((item, index) => (
                <li key={index} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <span className={styles.contactText}>{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Trust Badges */}
            <div className={styles.trustSection}>
              <h4 className={styles.trustTitle}>Certified & Secure</h4>
              <div className={styles.trustBadges}>
                {trustBadges.map((badge, index) => (
                  <div key={index} className={styles.trustBadge}>
                    <span className={styles.badgeIcon}>{badge.icon}</span>
                    <div className={styles.badgeContent}>
                      <div className={styles.badgeTitle}>{badge.title}</div>
                      <div className={styles.badgeText}>{badge.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 5: App Download & Newsletter */}
          <div className={styles.appColumn}>
            <h4 className={styles.columnTitle}>Get The App</h4>
            
            {/* App Download Buttons */}
            <div className={styles.appDownloads}>
              {appStores.map((store, index) => (
                <button
                  key={index}
                  className={styles.appButton}
                  onClick={() => navigate(store.url)}
                >
                  <span className={styles.appIcon}>{store.icon}</span>
                  <div className={styles.appContent}>
                    <div className={styles.appSubtitle}>{store.subtitle}</div>
                    <div className={styles.appName}>{store.name}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className={styles.newsletterSection}>
              <h4 className={styles.newsletterTitle}>Stay Updated</h4>
              <p className={styles.newsletterText}>
                Subscribe for latest updates and offers
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="Enter your email"
                  aria-label="Email for newsletter subscription"
                />
                <button 
                  className={styles.newsletterButton}
                  onClick={handleErrorLink}
                >
                  Subscribe
                </button>
              </div>
            </div>

            {/* Accepted Payments */}
            <div className={styles.paymentIcons}>
              <h5 className={styles.paymentTitle}>We Accept</h5>
              <div className={styles.paymentMethodsGrid}>
                <span className={styles.paymentIcon}>💳</span>
                <span className={styles.paymentIcon}>🏦</span>
                <span className={styles.paymentIcon}>📱</span>
                <span className={styles.paymentIcon}>💎</span>
                <span className={styles.paymentIcon}>🔷</span>
                <span className={styles.paymentIcon}>🏧</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <hr className={styles.divider} />
          
          <div className={styles.bottomContent}>
            {/* Copyright */}
            <div className={styles.copyrightSection}>
              <span className={styles.copyrightIcon}>©</span>
              <span className={styles.copyrightText}>
                {currentYear} QuickPay Technologies Pvt Ltd. All rights reserved.
              </span>
            </div>

            {/* Legal Links */}
            <div className={styles.legalLinks}>
              {footerLinks['Legal'].map((link, index) => (
                <button
                  key={index}
                  className={styles.legalLink}
                  onClick={handleErrorLink}
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Payment Security Info */}
            <div className={styles.securityInfo}>
              <span className={styles.securityIcon}>🔐</span>
              <span className={styles.securityText}>
                100% Secure Payments | Bank Grade Security
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;