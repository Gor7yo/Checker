/**
 * Навигационная панель приложения
 */
import '../App.css'
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 1.8rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(15, 23, 42, 0.95);
    padding: 2rem;
    gap: 1.5rem;
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.light};
  text-decoration: none;
  font-weight: 500;
  transition: ${({ theme }) => theme.animations.transition};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: rgba(37, 99, 235, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 70%;
    height: 5px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={navVariants}
      transition={{ duration: 0.5 }}
    >
      <Nav style={{
        background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.9)',
        boxShadow: isScrolled ? '0 4px 6px rgba(0,0,0,0.1)' : 'none'
      }}>
        <NavContainer>
          <Logo to="/">
            <img className='logo' src="https://cheat-checker.vercel.app/logo.png" alt="logo" />
            Checker
          </Logo>

          <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>

          <NavLinks $isOpen={isMenuOpen}>
            <NavLink 
              to="/" 
              $active={location.pathname === '/'}
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/documentation" 
              $active={location.pathname === '/documentation'}
              onClick={() => setIsMenuOpen(false)}
            >
              Документация
            </NavLink>
          </NavLinks>
        </NavContainer>
      </Nav>
    </motion.div>
  );
};

export default Navbar;