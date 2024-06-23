
import '../styles/Hero.css';
import image1 from '../content/images/Untitled design (9).png';
import ClientIntakeForm from '../components/ClientIntakeForm';
import 'animate.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-info-left">
        <img className="hero-img" src={image1} type="image/jpg" alt="Attorney" />
      </div>
      
      <div className="hero-info">
        <div className="hero-info-right">
          {/* Apply the Animate.css class for sliding in from the right */}
          <ClientIntakeForm className="animate__animated animate__slideInRight" />
        </div> 
      </div>
    </section>
  );
};

export default Hero;
