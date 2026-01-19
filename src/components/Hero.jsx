/**
 * Герой-секция главной страницы
 */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 50%);
  z-index: -1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #94a3b8;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled(motion.a)`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Hero = () => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.4 }
    }
  };

  return (
    <HeroSection>
      <HeroBackground />
      <HeroContent>
        <HeroTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Защитите свой проект от <span>читеров</span>
        </HeroTitle>
        
        <HeroSubtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Мощная система по поиску читов и архивов с читами и стороних ПО
        </HeroSubtitle>
        
        <HeroButtons
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
        >
          <PrimaryButton
            href="https://cheat-checker.vercel.app/cheatcheck.zip"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span >Скачать</span>
          </PrimaryButton>
          <SecondaryButton
            href="/documentation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Узнать больше
          </SecondaryButton>
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;