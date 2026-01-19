/**
 * Футер приложения
 */
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: rgba(15, 23, 42, 0.95);
  padding: 4rem 2rem 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const FooterLink = styled(Link)`
  color: #cbd5e1;
  text-decoration: none;
  margin-bottom: 0.75rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    padding-left: 5px;
  }
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Checker</FooterTitle>
          <p style={{ color: '#94a3b8', lineHeight: '1.6' }}>
            Мощная система проверки читов для современных видеоигр. 
            Обеспечиваем быструю и удобную проверку во всех играх.
          </p>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Навигация</FooterTitle>
          <FooterLink to="/">Главная</FooterLink>
          <FooterLink to="/documentation">Документация</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Ресурсы</FooterTitle>
          <FooterLink to="/documentation#installation">Документация</FooterLink>
          <FooterLink to="/documentation#faq">FAQ</FooterLink>
          <FooterLink to="/documentation#integration">Интеграция</FooterLink>
        </FooterSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} Checker. Все права защищены.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;