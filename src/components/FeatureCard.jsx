/**
 * Карточка фичи/возможности
 */
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: ${({ $color }) => $color};
    transform: translateY(-5px);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${({ $color }) => $color};
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ $color }) => $color};
`;

const Description = styled.p`
  color: #94a3b8;
  line-height: 1.6;
  flex-grow: 1;
`;

const FeatureCard = ({ title, description, icon, color = '#3b82f6' }) => {
  return (
    <Card
      $color={color}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Icon $color={color}>{icon}</Icon>
      <Title $color={color}>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;