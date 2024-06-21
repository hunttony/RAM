
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const AnimatedH2 = styled(motion.h2)`
  font-size: 1.6em;
  display: inline-block;
  color: lightgrey;
`;

const Letter = styled(motion.span)`
  display: inline-block;
  color: #282c34;
  white-space: pre; /* Preserve spaces */
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const letterVariants = {
  hidden: { opacity: .5, y: 0 },
  visible: {
    opacity: 1,
    y: [0, -10, 0], // jump effect
    color: ['red', 'red', 'gold'], // color change effect
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity, // Loop the animation
      repeatType: 'mirror', // Play animation forward and backward
    },
  },
};

const AnimatedText = ({ text }) => {
  return (
    <AnimatedH2
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {text.split('').map((char, index) => (
        <Letter key={index} variants={letterVariants}>
          {char}
        </Letter>
      ))}
    </AnimatedH2>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AnimatedText;
