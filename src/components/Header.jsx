// src/components/Header.js
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from '../content/images/GF.png'; // Place your logo in the src/components directory
import SocialMediaLinks from '../components/SocialMediaLinks';
import phone from '../content/images/phone.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(41, 48, 64, 1);
  color: lightgrey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  
`;

const LogoTxt = styled.h1`
  font-size: 36px;
  font-weight: 400;
  margin: 0;
  text-shadow: 3px 3px 4px rgba(211, 172, 43, 1);
`; 

const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.li`
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuToggle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
`;

const Line = styled(motion.span)`
  height: 2px;
  
  background: white;
  border-radius: 10px;
`;

const MobileMenu = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0;
  background-color: #282c34;
  position: absolute;
  top: 60px;
  right: 20px;
  border-radius: 10px;
  overflow: hidden;
  z-index: 100;

  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuItem = styled(motion.li)`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #3a3f47;
  }
`;

const DropDownMenu = styled.ul`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: rgba(41, 48, 64, 1);
  border-radius: 5px;
  z-index: 100;
  
`;

const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: lightgrey;
  z-index: 100;

  &:hover {    
    text-decoration: none;
    background-color: #d3ac2b;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <LogoTxt>
       Gotabat Foryu <img src={phone} style={{ width: '5%', height: 'auto' }} alt="Phone" /> (555) 4-LAWYER!</LogoTxt>
      
      <Nav>       
      <SocialMediaLinks /> 
        <Hamburger onClick={toggleMenu}>
          <MenuToggle initial={false} animate={isOpen ? 'open' : 'closed'}>
            <Line variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }} />
            <Line variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }} />
            <Line variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }} />
          </MenuToggle>
        </Hamburger>
      </Nav>
      <MobileMenu initial={false} animate={isOpen ? 'open' : 'closed'}>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>Home</MobileMenuItem>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>About</MobileMenuItem>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>Contact</MobileMenuItem>
        <MobileMenuItem>
            Personal injury Areas of Practice
            <DropDownMenu>
              <DropDownItem>18 Wheeler Truck Accident Attorneys</DropDownItem>
              <DropDownItem>Drunk Driver Accident Attorneys</DropDownItem>
              <DropDownItem>Car Accident Attorneys</DropDownItem>
              <DropDownItem>Dog Bite Attorneys</DropDownItem>
              <DropDownItem>Motorcycle Accident Attorneys</DropDownItem>
              <DropDownItem>Premises Liability Attorneys</DropDownItem>
              <DropDownItem>Spinal Cord & Back Injuries </DropDownItem>
              <DropDownItem>Wrongful Death Attorneys</DropDownItem>
            </DropDownMenu>
          </MobileMenuItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
