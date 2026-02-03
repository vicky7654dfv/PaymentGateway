import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

// SVG Icons Components
const Icons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.svgIcon}>
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  ),
  X: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.svgIcon}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  WhatsApp: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.svgIcon}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={styles.svgIcon}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  )
};

const Footer = () => {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');

  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      // Show button only if scrolled past 80% of the viewport height (Hero Section)
      const heroThreshold = window.innerHeight * 0.8;
      setShowScrollTop(window.scrollY > heroThreshold);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Newsletter Subscription Logic
  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Simulate API call
    console.log("Subscribing email:", email);
    alert("Thank you for subscribing!");
    setEmail(''); // Clear input on success
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleErrorLink = (e) => {
    e.preventDefault();
    navigate('/Error');
  };

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

  // Social Media Links with Component references
  const socialLinks = [
    { name: 'Facebook', Icon: Icons.Facebook, url: '/Error' },
    { name: 'Instagram', Icon: Icons.Instagram, url: '/Error' },
    { name: 'Twitter (X)', Icon: Icons.X, url: '/Error' },
    { name: 'WhatsApp', Icon: Icons.WhatsApp, url: '/Error' },
    { name: 'LinkedIn', Icon: Icons.LinkedIn, url: '/Error' }
  ];

  const contactInfo = [
    { icon: '📍', text: 'QuickPay HQ, Financial District, Mumbai' },
    { icon: '📞', text: '+91 22 6128 5000' },
    { icon: '✉️', text: 'support@quickpay.com' },
    { icon: '🕒', text: '24/7 Customer Support' }
  ];

  const trustBadges = [
    { icon: '🔒', title: 'PCI DSS', text: 'Compliant' },
    { icon: '🏛️', title: 'RBI', text: 'Certified' },
    { icon: '✅', title: 'ISO 27001', text: 'Certified' },
    { icon: '🛡️', title: '256-bit', text: 'Encryption' }
  ];

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
      <button 
        className={`${styles.scrollTopButton} ${showScrollTop ? styles.show : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className={styles.scrollTopIcon}>↑</span>
      </button>

      <div className={styles.footerContainer}>
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
                    <social.Icon />
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
              <form className={styles.newsletterForm} onSubmit={handleSubscribe}>
                <input
                  type="email"
                  className={styles.newsletterInput}
                  placeholder="Enter your email"
                  aria-label="Email for newsletter subscription"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit"
                  className={styles.newsletterButton}
                >
                  Subscribe
                </button>
              </form>
            </div>

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

        <div className={styles.footerBottom}>
          <hr className={styles.divider} />
          
          <div className={styles.bottomContent}>
            <div className={styles.copyrightSection}>
              <span className={styles.copyrightIcon}>©</span>
              <span className={styles.copyrightText}>
                {currentYear} QuickPay Technologies Pvt Ltd. All rights reserved.
              </span>
            </div>

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