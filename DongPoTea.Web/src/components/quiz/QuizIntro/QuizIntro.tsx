import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

const Container = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: ${theme.spacing[8]} 0;
`;

const Icon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing[6]};
`;

const Title = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[8]};
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[10]};
  text-align: left;
`;

const FeatureItem = styled.div`
  padding: ${theme.spacing[4]};
  background-color: ${theme.colors.gray[50]};
  border-radius: 8px;
`;

const FeatureIcon = styled.div`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing[2]};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[1]};
`;

const FeatureDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const StartButton = styled.button`
  padding: ${theme.spacing[4]} ${theme.spacing[8]};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: ${theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  box-shadow: 0 4px 12px rgba(168, 134, 103, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(168, 134, 103, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

const TimeEstimate = styled.div`
  margin-top: ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
`;

interface QuizIntroProps {
  onStart: () => void;
  language: 'en' | 'zh-TW';
}

export const QuizIntro: React.FC<QuizIntroProps> = ({ onStart, language }) => {
  const features = [
    {
      icon: '🎯',
      title: language === 'en' ? 'Personalized Matching' : '個人化匹配',
      description: language === 'en' 
        ? 'Get recommendations based on your unique taste preferences'
        : '根據您獨特的口味偏好獲得推薦'
    },
    {
      icon: '🌱',
      title: language === 'en' ? 'Expert Knowledge' : '專業知識',
      description: language === 'en' 
        ? 'Benefit from our tea masters\' decades of experience'
        : '受益於我們茶師數十年的經驗'
    },
    {
      icon: '📊',
      title: language === 'en' ? 'Detailed Analysis' : '詳細分析',
      description: language === 'en' 
        ? 'Understand your flavor profile and tea preferences'
        : '了解您的風味特徵和茶葉偏好'
    }
  ];

  return (
    <Container>
      <Icon>🔍</Icon>
      <Title>
        {language === 'en' ? 'Tea Finder Quiz' : '茶葉尋找器測驗'}
      </Title>
      <Description>
        {language === 'en' 
          ? 'Discover your perfect tea match with our personalized recommendation quiz. Answer a few questions about your preferences, and we\'ll suggest the ideal Taiwanese teas for your taste.'
          : '通過我們的個人化推薦測驗發現您的完美茶葉匹配。回答一些關於您偏好的問題，我們將為您的口味推薦理想的台灣茶。'
        }
      </Description>

      <FeaturesList>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesList>

      <StartButton onClick={onStart}>
        {language === 'en' ? 'Start Quiz' : '開始測驗'}
      </StartButton>
      
      <TimeEstimate>
        {language === 'en' ? 'Takes about 3-5 minutes' : '大約需要 3-5 分鐘'}
      </TimeEstimate>
    </Container>
  );
};