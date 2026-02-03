import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TeamSection.module.css';

// Import images
import img1 from '../../assets/TeamSection/1.webp';
import img2 from '../../assets/TeamSection/2.webp';
import img3 from '../../assets/TeamSection/3.webp';
import img4 from '../../assets/TeamSection/4.webp';

const TeamSection = () => {
  const navigate = useNavigate();

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    navigate('/Error');
  };

  const teamMembers = [
    {
      id: 1,
      name: "Arjun Mehta",
      role: "CEO & Founder",
      image: img1,
      bio: "Visionary leader with 15+ years in Fintech. Formerly at Stripe and Google Pay.",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      role: "Chief Technology Officer",
      image: img2,
      bio: "Blockchain expert and architect of our secure core banking infrastructure.",
    },
    {
      id: 3,
      name: "David Chen",
      role: "Head of Product",
      image: img3,
      bio: "Obsessed with UX/UI. crafting seamless payment experiences for millions.",
    },
    {
      id: 4,
      name: "Priya Sharma",
      role: "VP of Engineering",
      image: img4,
      bio: "Scaling systems to handle 10k+ transactions per second with zero downtime.",
    }
  ];

  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerContent}>
          <h4 className={styles.subTitle}>THE MINDS BEHIND QUICKPAY</h4>
          <h2 className={styles.title}>
            Meet Our <span className={styles.gradientText}>Visionaries</span>
          </h2>
          <p className={styles.description}>
            Building the future of digital finance with passion, innovation, and security at the core.
          </p>
        </div>

        {/* Team Grid */}
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={member.image} alt={member.name} className={styles.image} />
                
                {/* Social Overlay (Visible on Hover) */}
                <div className={styles.socialOverlay}>
                  <button 
                    className={styles.socialLink} 
                    onClick={handleLinkClick}
                    aria-label="Visit LinkedIn Profile"
                  >
                    Linked<span>in</span>
                  </button>
                </div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{member.name}</h3>
                <span className={styles.role}>{member.role}</span>
                <p className={styles.bio}>{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;