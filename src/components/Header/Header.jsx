import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <header className={`${styles.header} fade-in`}>
      <div className={styles.container}>
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
        {/* We add the 'navActive' class if isMenuOpen is true */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.navList}>
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