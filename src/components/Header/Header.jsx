import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null); // Reference to the navigation container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open AND click is NOT inside the navRef element
      if (isMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Unbind the event listener on cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]); // Only re-run if isMenuOpen changes

  return (
    <header className={`${styles.header} fade-in`}>
      {/* We attach the ref here to include both the logo/buttons and the dropdown menu */}
      <div className={styles.container} ref={navRef}>
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo} onClick={closeMenu}>
            <div className={styles.logoIcon}>
              <div className={styles.logoCircle}></div>
              <div className={styles.logoWave}></div>
            </div>
            <span className={styles.logoText}>QUICKPAY</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
            {/* About */}
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navIcon}>📱</span>
                <span className={styles.navText}>About</span>
              </Link>
            </li>

            {/* Services */}
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navIcon}>⚡</span>
                <span className={styles.navText}>Services</span>
              </Link>
            </li>

            {/* Contact */}
            <li className={styles.navItem}>
              <Link 
                to="/Error" 
                className={styles.navLink}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation('/Error');
                }}
              >
                <span className={styles.navIcon}>📞</span>
                <span className={styles.navText}>Contact</span>
              </Link>
            </li>

            {/* Sign Up */}
            <li className={styles.navItem}>
              <button 
                className={styles.signupButton}
                onClick={() => handleNavigation('/Error')}
              >
                <span className={styles.buttonIcon}>🚀</span>
                <span className={styles.buttonText}>Sign Up</span>
              </button>
            </li>

            {/* Login */}
            <li className={styles.navItem}>
              <button 
                className={styles.loginButton}
                onClick={() => handleNavigation('/Error')}
              >
                <span className={styles.buttonIcon}>🔐</span>
                <span className={styles.buttonText}>Login</span>
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
          aria-label="Menu"
          onClick={toggleMenu}
        >
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
          <span className={styles.menuBar}></span>
        </button>
      </div>
    </header>
  );
};

export default Header;