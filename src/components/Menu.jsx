import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Menu.css';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.8);
  z-index: 2000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.li`
  position: relative;
  margin: 0 10px;
  cursor: pointer;
  color: lightgrey;
  font-weight: 600;

  &:hover {
    color: #d3ac2b;
  }
`;

const DropDownMenu = styled(motion.ul)`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  list-style: none;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  z-index: 2000;
`;

const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: lightgrey;

  &:hover {
    background-color: #d3ac2b;
    border-radius: 20px;
    color: black;
  }
`;

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const Menu = ({ scrollToSection }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div>
      <Nav>
        <NavLinks>
          <NavLink onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('home')}>
            Home
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('practice')} onMouseLeave={handleMouseLeave}>
            Personal Injury Areas of Practice
            <AnimatePresence>
              {activeMenu === 'practice' && (
                <DropDownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <DropDownItem onClick={() => scrollToSection('18-wheeler')}>18 Wheeler Truck Accident Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('drunk-driver')}>Drunk Driver Accident Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('car-accident')}>Car Accident Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('dog-bite')}>Dog Bite Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('motorcycle')}>Motorcycle Accident Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('premises-liability')}>Premises Liability Attorneys</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('spinal-cord')}>Spinal Cord & Back Injuries</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('wrongful-death')}>Wrongful Death Attorneys</DropDownItem>
                </DropDownMenu>
              )}
            </AnimatePresence>
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('team')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('team')}>
            The Team
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('reviews')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('reviews')}>
            Reviews
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('help')}>
            Help & Information
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('case')} onMouseLeave={handleMouseLeave}>
            Case Review
            <AnimatePresence>
              {activeMenu === 'case' && (
                <DropDownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <DropDownItem onClick={() => scrollToSection('case-review')}>Get Your Case Review</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('hire-attorney')}>Why Hire a Personal Injury Attorney?</DropDownItem>
                </DropDownMenu>
              )}
            </AnimatePresence>
          </NavLink>
        </NavLinks>
      </Nav>
    </div>
  );
};

Menu.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default Menu;
