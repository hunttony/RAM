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
          <NavLink onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
            Services
            <AnimatePresence>
              {activeMenu === 'services' && (
                <DropDownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <DropDownItem onClick={() => scrollToSection('watch-live')}>Watch Live</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('past-sermons')}>Past Sermons</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('baptism')}>Baptism</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('ministries')}>Ministries</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('testimony')}>Share Your Testimony</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('inspiration')}>Inspiration</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('give')}>Give</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('community')}>Community</DropDownItem>
                </DropDownMenu>
              )}
            </AnimatePresence>
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('about')}>
            About Us
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('events')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('events')}>
            Events
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('contact')} onMouseLeave={handleMouseLeave} onClick={() => scrollToSection('contact')}>
            Contact
          </NavLink>
          <NavLink onMouseEnter={() => handleMouseEnter('more')} onMouseLeave={handleMouseLeave}>
            More
            <AnimatePresence>
              {activeMenu === 'more' && (
                <DropDownMenu
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={menuVariants}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <DropDownItem onClick={() => scrollToSection('volunteer')}>Volunteer</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('donate')}>Donate</DropDownItem>
                  <DropDownItem onClick={() => scrollToSection('resources')}>Resources</DropDownItem>
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
