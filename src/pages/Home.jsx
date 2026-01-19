import { FaShieldHalved } from "react-icons/fa6";/**
 * Главная страница приложения
 */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import { GrSecure, GrValidate } from "react-icons/gr";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiSpyLine } from "react-icons/ri";
import { IoAnalytics } from "react-icons/io5";

const Container = styled.div`
  min-height: 100vh;
  padding-top: 80px;
`;

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }
`;

const Home = () => {
  const features = [
    {
      title: "Проверка читов",
      description: "Обнаружение и поиск всех популярных читов с использованием машинного обучения",
      icon: <FaShieldHalved />,
      color: "#3b82f6"
    },
    {
      title: "Защита памяти",
      description: "Мониторинг и защита игрового процесса от внешнего вмешательства",
      icon: <GrSecure />,
      color: "#8b5cf6"
    },
    {
      title: "Поведенческий анализ",
      description: "Анализ игроков в реальном времени для выявления подозрительных действий",
      icon: <MdOutlineAnalytics />,
      color: "#10b981"
    },
    {
      title: "Серверная валидация",
      description: "Двойная проверка данных на стороне сервера для предотвращения обмана",
      icon: <GrValidate />,
      color: "#f59e0b"
    },
    {
      title: "Стелс-режим",
      description: "Невидимая работа чекера для предотвращения обнаружения и обхода",
      icon: <RiSpyLine />,
      color: "#ec4899"
    },
    {
      title: "Статистика и отчеты",
      description: "Подробные отчеты и аналитика для администраторов серверов",
      icon: <IoAnalytics />,
      color: "#06b6d4"
    }
  ];

  return (
    <Container>
      <Hero />
      
      <Section>
        <AnimatedSection>
          <Title>Почему выбирают нас?</Title>
        </AnimatedSection>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index}>
              <FeatureCard {...feature} />
            </AnimatedSection>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <AnimatedSection>
          <Title>Наша статистика</Title>
        </AnimatedSection>
        
        <StatsContainer>
          {[
            { value: "99.8%", label: "Эффективность" },
            { value: "24/7", label: "Поддержка" },
            { value: "10ms", label: "Задержка" },
            { value: "100K+", label: "Проверенно игроков" },
          ].map((stat, index) => (
            <AnimatedSection key={index} delay={index}>
              <StatCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            </AnimatedSection>
          ))}
        </StatsContainer>
      </Section>

      <Section style={{ textAlign: 'center' }}>
        <AnimatedSection>
          <Title>Начните проверку прямо сейчас!</Title>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#94a3b8' }}>
            Присоединяйтесь к тысячам довольных администраторов, которые ведут проверку прямо сейчас
          </p>
          <CTAButton
            href="/documentation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Посмотреть документацию
          </CTAButton>
        </AnimatedSection>
      </Section>
    </Container>
  );
};

export default Home;