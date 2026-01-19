/**
 * Герой-секция главной страницы с фоновым изображением
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
  z-index: -1;
  
  /* Градиент поверх изображения для лучшей читаемости текста */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(15, 23, 42, 0.9) 0%,
      rgba(15, 23, 42, 0.7) 50%,
      rgba(15, 23, 42, 0.5) 100%
    );
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => props.$imageUrl ? `url(${props.$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.4;
  filter: blur(1px);
  
  /* Анимация медленного увеличения */
  animation: zoomBackground 20s ease-in-out infinite alternate;
  
  @keyframes zoomBackground {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.05);
    }
  }
`;

const OverlayText = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  color: rgba(255, 255, 255, 0.1);
  font-size: 8rem;
  font-weight: 900;
  font-family: ${({ theme }) => theme.fonts.mono};
  z-index: 0;
  user-select: none;
  pointer-events: none;
  
  @media (max-width: 768px) {
    font-size: 4rem;
    bottom: 1rem;
    left: 1rem;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  text-align: center;
  z-index: 1;
  position: relative;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  span {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #e2e8f0;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  z-index: 2;
  position: relative;
`;

const PrimaryButton = styled(motion.a)`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    
    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

const SecondaryButton = styled(motion.a)`
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

const Hero = ({ 
  backgroundImage = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  overlayText = 'Cheat Checker',
  gameTitle = 'вашего проекта'
}) => {
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.2 }
    }
  };

  const buttonsVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.4 }
    }
  };

  return (
    <HeroSection>
      <HeroBackground>
        <BackgroundImage $imageUrl={backgroundImage} />
        <OverlayText>
          {overlayText}
        </OverlayText>
      </HeroBackground>
      
      <HeroContent>
        <HeroTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Защитите {gameTitle} от <span>читеров</span>
        </HeroTitle>
        
        <HeroSubtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          Мощная система по поиску читов и архивов с читами и сторонним ПО
        </HeroSubtitle>
        
        <HeroButtons
          variants={buttonsVariants}
          initial="hidden"
          animate="visible"
        >
          <PrimaryButton
            href="https://cheat-checker.vercel.app/cheatcheck.zip"
            download="CheatChecker.zip"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Скачать</span>
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