import { useNavigate } from 'react-router-dom';
import styles from './Hero.module.css';
import bgVid from "../../assets/bgVid.mp4"

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={`${styles.hero} fade-in`}>
      {/* Background Video */}
      <div className={styles.videoContainer}>
        <div className={styles.videoOverlay}></div>
        
        <video
          src={bgVid}
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline /* Essential for mobile autoplay */
        />
        
        {/* Fallback background sits behind video */}
        <div className={styles.fallbackBackground}></div>
      </div>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <div className={styles.contentWrapper}>
          {/* Animated Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>⚡</span>
            <span className={styles.badgeText}>Secure & Instant Payments</span>
          </div>

          {/* Main Heading */}
          <h1 className={styles.mainHeading}>
            <span className={styles.headingLine1}>Seamless Digital</span>
            <span className={styles.headingLine2}>
              <span className={styles.highlight}>Payments</span> Experience
            </span>
          </h1>

          {/* Description */}
          <p className={styles.description}>
            Send, receive, and manage money instantly with our secure payment platform. 
            Experience lightning-fast transactions with bank-level security.
          </p>

          {/* Stats */}
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="500">273M+</div>
              <div className={styles.statLabel}>Users</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="99.9">97%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber} data-count="50">125+</div>
              <div className={styles.statLabel}>Banks</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryButton}
              onClick={() => navigate('/Error')}
            >
              <span className={styles.buttonIcon}>🚀</span>
              <span className={styles.buttonText}>Get Started Free</span>
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => navigate('/Error')}
            >
              <span className={styles.buttonIcon}>📱</span>
              <span className={styles.buttonText}>Download App</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className={styles.trustBadges}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🔒</div>
              <div className={styles.trustText}>256-bit Encryption</div>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🏦</div>
              <div className={styles.trustText}>RBI Certified</div>
            </div>
            <div className={styles.trustDivider}></div>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>⚡</div>
              <div className={styles.trustText}>Instant Settlements</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;