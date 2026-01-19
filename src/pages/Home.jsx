import { FaShieldHalved } from "react-icons/fa6";
import { FaSteam, FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
/**
 * Главная страница приложения с игровыми карточками
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

const GamesSection = styled.div`
  margin: 6rem 0;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const GameCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  position: relative;

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ $color }) => $color};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const GameImage = styled.div`
  height: 200px;
  width: 100%;
  background: ${({ $bgColor }) => $bgColor};
  background-image: ${({ $imageUrl }) => $imageUrl ? `url(${$imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent);
  }
`;

const GameLogo = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const PlatformIcons = styled.div`
  position: absolute;
  bottom: 15px;
  left: 20px;
  display: flex;
  gap: 0.5rem;
  z-index: 1;
`;

const PlatformIcon = styled.div`
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.8rem;
  backdrop-filter: blur(5px);
`;

const GameContent = styled.div`
  padding: 1.5rem;
`;

const GameTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ $color }) => $color};
`;

const GameDescription = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.95rem;
`;

const GameFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

const GameFeature = styled.li`
  color: #cbd5e1;
  padding: 0.3rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
    font-size: 0.8rem;
  }
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

  const games = [
    {
      id: 'cs2',
      title: 'Counter-Strike 2',
      color: '#f39c12',
      logo: 'CS2',
      description: 'Полная защита для соревновательных матчей. Высокая точность обнаружения читов.',
      features: [
        'Детекция Wallhack и Aimbot',
        'Анализ траектории выстрелов',
        'Обнаружение триггер-ботов',
        'Защита от считывания памяти'
      ],
      imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/csgo/images/csgo_react/social/cs2.jpg',
      platforms: ['pc'],
      popularity: '98% охват'
    },
    {
      id: 'dota2',
      title: 'Dota 2',
      color: '#e74c3c',
      logo: 'DOTA 2',
      description: 'Обноружение читов в популярной MOBA-игре. Детектим скрипты и макросы.',
      features: [
        'Обнаружение скриптов',
        'Обнаружение макросов',
        'Поиск инжекторов',
        'Мониторинг сети'
      ],
      imageUrl: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg',
      platforms: ['pc'],
      popularity: '95% охват'
    },
    {
      id: 'apex',
      title: 'Apex Legends',
      color: '#9b59b6',
      logo: 'APEX',
      description: 'Обноружение быстрых королевских битв. Обнаружение читов в реальном времени.',
      features: [
        'Фаст чек аимбота',
        'Обнаружение ESP',
        'Защита от ускорения',
        'Анализ статистики'
      ],
      imageUrl: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172470/1eab2d507fbc0cfbfac0a4e2da51edc19703f4e4/capsule_616x353.jpg?t=1762457261',
      platforms: ['pc', 'ps', 'xbox'],
      popularity: '96% охват'
    },
    {
      id: 'rust',
      title: 'Rust',
      color: '#2ecc71',
      logo: 'RUST',
      description: 'Комплексное обнаружение читов в Rust.',
      features: [
        'Поиск ESP',
        'Обнаружение автодобычи',
        'Контроль скорости',
        'Обноружение анти-рейд ботов'
      ],
      imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252490/header.jpg',
      platforms: ['pc'],
      popularity: '94% охват'
    },
    {
      id: 'valorant',
      title: 'VALORANT',
      color: '#ff4757',
      logo: 'VALORANT',
      description: 'Обнаружение читов в тактических шутерах. Интеграция с античитом Riot Vanguard.',
      features: [
        'Детекция читов',
        'Анализ поведения',
        'Защита драйверов',
        'Системные проверки'
      ],
      imageUrl: 'https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg',
      platforms: ['pc'],
      popularity: '97% охват'
    },
    {
      id: 'overwatch2',
      title: 'Overwatch 2',
      color: '#1e90ff',
      logo: 'OW2',
      description: 'Обнаружение читов в командных сражениях. Обнаружение читов в PvP режимах.',
      features: [
        'Анти-скриптинг',
        'Обнаружение ботов',
        'Анализ аим-паттернов',
        'Серверная валидация'
      ],
      imageUrl: 'https://cdn.cloudflare.steamstatic.com/steam/apps/2357570/header.jpg',
      platforms: ['pc', 'ps', 'xbox'],
      popularity: '93% охват'
    }
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'pc': return <FaWindows />;
      case 'ps': return <FaPlaystation />;
      case 'xbox': return <FaXbox />;
      default: return <FaSteam />;
    }
  };

  return (
    <Container>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
        overlayText="Cheat Checker"
        gameTitle="ваш игровой проект"
      />
      
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
        <GamesSection>
          <AnimatedSection>
            <Title>Поддерживаемые игры</Title>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#94a3b8', maxWidth: '800px', margin: '0 auto' }}>
              Наша система работает с самыми популярными онлайн-играми
            </p>
          </AnimatedSection>
          
          <GamesGrid>
            {games.map((game, index) => (
              <AnimatedSection key={game.id} delay={index}>
                <GameCard
                  $color={game.color}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GameImage $color={game.color} $imageUrl={game.imageUrl}>
                    <GameLogo>{game.logo}</GameLogo>
                    <PlatformIcons>
                      {game.platforms.map((platform, idx) => (
                        <PlatformIcon key={idx}>
                          {getPlatformIcon(platform)}
                        </PlatformIcon>
                      ))}
                    </PlatformIcons>
                  </GameImage>
                  <GameContent>
                    <GameTitle $color={game.color}>{game.title}</GameTitle>
                    <GameDescription>{game.description}</GameDescription>
                    <GameFeatures>
                      {game.features.map((feature, idx) => (
                        <GameFeature key={idx}>{feature}</GameFeature>
                      ))}
                    </GameFeatures>
                    <div style={{ 
                      marginTop: '1rem', 
                      fontSize: '0.8rem', 
                      color: game.color,
                      fontWeight: '500',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: game.color,
                        animation: 'pulse 2s infinite'
                      }} />
                      {game.popularity} эффективности
                    </div>
                  </GameContent>
                </GameCard>
              </AnimatedSection>
            ))}
          </GamesGrid>
        </GamesSection>
      </Section>

      <Section>
        <AnimatedSection>
          <Title>Наша статистика</Title>
        </AnimatedSection>
        
        <StatsContainer>
          {[
            { value: "99.8%", label: "Эффективность" },
            { value: "24/7", label: "Поддержка" },
            { value: "100K+", label: "Проверено игроков" },
            { value: "50+", label: "Игр поддерживается" },
            { value: "0.1%", label: "Ложных срабатываний" }
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