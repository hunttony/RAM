import { useState, useEffect, useRef } from 'react';
import styles from '../styles/DrunkDriverAccidents.module.css';

const DrunkDriverAccidents = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const heroRef = useRef(null);

  const handleScroll = () => {
    if (heroRef.current) {
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;
      if (heroBottom < viewportHeight) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <div ref={heroRef} className={styles.heroInfo}>
          <h1>Drunk Driver Accident Attorneys</h1>
          <p>
            If you or a loved one has been injured by a drunk driver, our team of experienced attorneys is here to help. Drunk driving accidents can cause severe injuries and even fatalities. We specialize in handling these cases, ensuring you get the representation and compensation you deserve.
          </p>
          {/* Form inside the hero section */}
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Describe your case" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className={styles.section}>
          <h2>Why You Need a Drunk Driver Accident Attorney</h2>
          <p>
            Drunk driving is a serious offense that often leads to catastrophic injuries. Our attorneys understand the complexities of these cases and have the experience to hold the responsible parties accountable. We work tirelessly to protect your rights and secure the compensation you need for medical bills, lost wages, and other damages.
          </p>
        </div>
        <div className={styles.section}>
          <h2>Our Approach</h2>
          <p>
            Our legal team conducts a thorough investigation of the accident, gathering crucial evidence, consulting with experts, and building a strong case on your behalf. We handle all aspects of your claim, from negotiating with insurance companies to representing you in court if necessary.
          </p>
          <ul>
            <li>Free initial consultation to evaluate your case</li>
            <li>No fees unless we win your case</li>
            <li>Personalized legal strategy tailored to your situation</li>
          </ul>
        </div>
      </div>
      {/* Floating button */}
      <button
        className={`${styles.floatingButton} ${isButtonVisible ? styles.visible : ''}`}
        onClick={scrollToForm}
      >
        Fill Out the Form
      </button>
    </div>
  );
};

export default DrunkDriverAccidents;
