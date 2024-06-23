import { useState, useEffect, useRef } from 'react';
import styles from '../styles/VolunteerOpportunities.module.css';

const VolunteerOpportunities = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const heroRef = useRef(null);
  const formRef = useRef(null);

  const handleScroll = () => {
    if (heroRef.current) {
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      setIsButtonVisible(heroBottom < viewportHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div ref={heroRef} className={styles.heroInfo}>
          <div className={styles.section}>
            <h1>Volunteer Opportunities</h1>
            <p>
              Join us in making a difference in our community! Our church offers a variety of volunteer opportunities for members to get involved. Whether you're looking to help with community outreach, assist in church events, or support our ministries, there's a place for you.
            </p>
            {/* Form inside the hero section */}
            <form ref={formRef}>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Tell us about your interests" required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
        <div className={styles.section}>
          <h2>Why Volunteer with Us?</h2>
          <p>
            Volunteering is a rewarding experience that allows you to give back to the community, build relationships, and grow in your faith. Our church values the contributions of every volunteer and provides opportunities for you to use your talents and skills in meaningful ways.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Our Approach</h2>
          <p>
            We believe in a hands-on approach to serving our community. Our volunteer programs are designed to meet various needs and provide support where it's most needed. From organizing events to participating in outreach programs, you'll find fulfilling ways to contribute.
          </p>
          <ul>
            <li>Initial meeting to discuss your interests and availability</li>
            <li>Training and support provided</li>
            <li>Flexible scheduling to fit your lifestyle</li>
          </ul>
        </div>
      </div>
      {/* Floating button */}
      <button
        className={`${styles.floatingButton} ${isButtonVisible ? styles.visible : ''}`}
        onClick={scrollToForm}
      >
        Sign Up to Volunteer
      </button>
    </div>
  );
};

export default VolunteerOpportunities;
