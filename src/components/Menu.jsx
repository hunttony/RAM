import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Menu.css';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(51, 58, 74, 1);
  padding: 5px;

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
    text-decoration: none;
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
  background-color: rgba(41, 48, 64, 0.9);
  border-radius: 5px;
  z-index: 100;
`;

const DropDownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color: lightgrey;

  &:hover {
    text-decoration: none;
    background-color: #d3ac2b;
    border-radius: 20px;
    color: black;
  }
`;

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 }
};

const Menu = () => {
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
          <NavLink onMouseEnter={() => handleMouseEnter('home')} onMouseLeave={handleMouseLeave}>
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
                  transition={{ duration: 0.5, ease: "easeInOut" }}
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
              )}
            </AnimatePresence>
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('team')} onMouseLeave={handleMouseLeave}>
            The Team
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('reviews')} onMouseLeave={handleMouseLeave}>
            Reviews
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('help')} onMouseLeave={handleMouseLeave}>
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
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <DropDownItem>Get Your Case Review</DropDownItem>
                  <DropDownItem>Why Hire a Personal Injury Attorney?</DropDownItem>
                </DropDownMenu>
              )}
            </AnimatePresence>
          </NavLink>
        </NavLinks>
      </Nav>
    </div>
  );
};

export default Menu;
