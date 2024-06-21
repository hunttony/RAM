import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import phone from '../content/images/24-hours-support.gif';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: lightgrey;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
`;

const LogoTxt = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2.0em;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 1px 2px rgba(211, 172, 43, 1);
  cursor: pointer;
`;

const PhoneNumber = styled.h1`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 2.8em;
  font-weight: 600;
  margin: 0;
  text-shadow: 2px 1px 2px rgba(211, 172, 43, 1);
  cursor: pointer;
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

  const scrollToSection = () => {
    // Implement scroll to section logic here
    console.log('Scrolling to section');
  };

  return (
    <HeaderContainer>
      <LogoTxt>Top-Law.com</LogoTxt>
      <img 
        className="image247" 
        src={phone} 
        style={{
          width: '50px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0px 0px -5px rgba(255, 255, 255, 1)'
        }} 
        alt="Phone" 
      />
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
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MobileMenuItem whileTap={{ scale: 0.95 }}>Home</MobileMenuItem>
            <MobileMenuItem whileTap={{ scale: 0.95 }}>The Team</MobileMenuItem>
            <MobileMenuItem whileTap={{ scale: 0.95 }}>Reviews</MobileMenuItem>
            <MobileMenuItem onClick={() => toggleDropdown('practice')}>
              Personal Injury Areas of Practice
              <AnimatePresence>
                {activeDropdown === 'practice' && (
                  <DropDownMenu
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DropDownItem onClick={scrollToSection}>18 Wheeler Truck Accident Attorneys</DropDownItem>
                    <DropDownItem onClick={scrollToSection}>Drunk Driver Accident Attorneys</DropDownItem>
                    <DropDownItem>Car Accident Attorneys</DropDownItem>
                    <DropDownItem>Dog Bite Attorneys</DropDownItem>
                    <DropDownItem>Motorcycle Accident Attorneys</DropDownItem>
                    <DropDownItem>Premises Liability Attorneys</DropDownItem>
                    <DropDownItem>Spinal Cord & Back Injuries</DropDownItem>
                    <DropDownItem>Wrongful Death Attorneys</DropDownItem>
                  </DropDownMenu>
                )}
              </AnimatePresence>
            </MobileMenuItem>
            <MobileMenuItem whileTap={{ scale: 0.95 }}>Help & Information</MobileMenuItem>
            <MobileMenuItem onClick={() => toggleDropdown('case')}>
              Case Review
              <AnimatePresence>
                {activeDropdown === 'case' && (
                  <DropDownMenu
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <DropDownItem>Get Your Case Review</DropDownItem>
                    <DropDownItem>Why Hire a Personal Injury Attorney?</DropDownItem>
                  </DropDownMenu>
                )}
              </AnimatePresence>
            </MobileMenuItem>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header;
