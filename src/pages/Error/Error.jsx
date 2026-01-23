import { useNavigate } from 'react-router-dom';
import styles from './Error.module.css';

const Error = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className={`${styles.errorPage} fade-in`}>
      <div className={styles.container}>
        {/* Error Icon */}
        <div className={styles.errorIcon}>⚠️</div>

        {/* Error Title */}
        <h1 className={styles.errorTitle}>Oops! Something went wrong</h1>

        {/* Error Description */}
        <p className={styles.errorDescription}>
          The page you're looking for is temporarily unavailable or doesn't exist.
          Please try again or return to the homepage.
        </p>

        {/* Action Buttons Container */}
        <div className={styles.actionButtons}>
          {/* Back Button */}
          <button 
            className={`${styles.errorButton} ${styles.backButton}`}
            onClick={handleGoBack}
          >
            <span className={styles.buttonIcon}>←</span>
            <span className={styles.buttonText}>Go Back</span>
          </button>

          {/* Home Button */}
          <button 
            className={`${styles.errorButton} ${styles.homeButton}`}
            onClick={handleGoHome}
          >
            <span className={styles.buttonIcon}>🏠</span>
            <span className={styles.buttonText}>Return to Home</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;