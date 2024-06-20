import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
//import Logo from '../content/images/GF.png'; // Place your logo in the src/components directory

import phone from '../content/images/phone.png'

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  
  padding: 10px 20px;
  background-color: rgba(41, 48, 64, 1);
  color: lightgrey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  
`;

const LogoTxt = styled.h1`
  display: flex;
  padding: 5px;
  justify-content: center; 
  font-size: 2.0em;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 1px 2px rgba(211, 172, 43, 1);


  &:hover {
      cursor: pointer;
    }

  &:img {
      width: 50%;
      height: auto;
    }

    &:div {
      display: flex;
      align-items: center;
    }
`;
const PhoneNumber = styled.h1`
  display: flex;
  padding: 5px;
  justify-content: center; 
  font-size: 2.0em;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 1px 2px rgba(211, 172, 43, 1);


  &:hover {
      cursor: pointer;
    }

  &:img {
      width: 50%;
      height: auto;
    }

    &:div {
      display: flex;
      align-items: center;
    }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
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

const DropDownMenu = styled(motion.ul)`
  list-style: none;
  flex-direction: column;
  padding: 0;
  background-color: rgba(41, 48, 64, 1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 100;
`;

const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: lightgrey;
  z-index: 100;

  &:hover {
    background-color: #d3ac2b;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <HeaderContainer>
      <div></div>
      <LogoTxt>
      Attorney Site Design
        
      </LogoTxt>
      <img src={phone} style={{ width: '50px', height: '60px' }} alt="Phone" /> 
      <PhoneNumber>(346) 316-6075!</PhoneNumber>
      <Nav>
        <Hamburger onClick={toggleMenu}>
          <MenuToggle initial={false} animate={isOpen ? 'open' : 'closed'}>
            <Line
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 },
              }}
              transition={{ duration: 0.3 }}
            />
            <Line
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.3 }}
            />
            <Line
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              transition={{ duration: 0.3 }}
            />
          </MenuToggle>
        </Hamburger>
      </Nav>
      <MobileMenu
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        isOpen={isOpen}
      >
        <MobileMenuItem whileTap={{ scale: 0.95 }}>Home</MobileMenuItem>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>The Team</MobileMenuItem>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>Reviews</MobileMenuItem>
        <MobileMenuItem onClick={() => toggleDropdown('practice')}>
          Personal Injury Areas of Practice
          <DropDownMenu
            initial={{ height: 0 }}
            animate={{ height: activeDropdown === 'practice' ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <DropDownItem>18 Wheeler Truck Accident Attorneys</DropDownItem>
            <DropDownItem>Drunk Driver Accident Attorneys</DropDownItem>
            <DropDownItem>Car Accident Attorneys</DropDownItem>
            <DropDownItem>Dog Bite Attorneys</DropDownItem>
            <DropDownItem>Motorcycle Accident Attorneys</DropDownItem>
            <DropDownItem>Premises Liability Attorneys</DropDownItem>
            <DropDownItem>Spinal Cord & Back Injuries</DropDownItem>
            <DropDownItem>Wrongful Death Attorneys</DropDownItem>
          </DropDownMenu>
        </MobileMenuItem>
        <MobileMenuItem whileTap={{ scale: 0.95 }}>Help & Information</MobileMenuItem>
        <MobileMenuItem onClick={() => toggleDropdown('case')}>
          Case Review
          <DropDownMenu
            initial={{ height: 0 }}
            animate={{ height: activeDropdown === 'case' ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            <DropDownItem>Get Your Case Review</DropDownItem>
            <DropDownItem>Why Hire a Personal Injury Attorney?</DropDownItem>
          </DropDownMenu>
        </MobileMenuItem>
      </MobileMenu>
    </HeaderContainer>
  );
};

export default Header;
