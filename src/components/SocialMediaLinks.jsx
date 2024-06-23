// src/components/SocialMediaLinks.js
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  
`;

const SocialLink = styled.a`
  margin: 0 10px;
  color: lightgrey;
  font-size: 1.5em;
  transition: color 0.3s;
  

  &:hover {
    color: #d3ac2b;
  }

`;

const SocialMediaLinks = () => {
  return (
    <SocialContainer>
      <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </SocialLink>
      <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLink>
      <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
      <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </SocialLink>
    </SocialContainer>
  );
};

export default SocialMediaLinks;
