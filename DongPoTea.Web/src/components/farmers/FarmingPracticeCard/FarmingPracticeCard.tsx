import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { FarmingPractice } from '../../../data/farmers';

const CardContainer = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  padding: ${theme.spacing[8]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.gray[200]};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing[4]};
`;

const Title = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const Description = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[6]};
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const BenefitItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};

  &::before {
    content: '✓';
    color: ${theme.colors.success};
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

interface FarmingPracticeCardProps {
  practice: FarmingPractice;
  language: 'en' | 'zh-TW';
}

export const FarmingPracticeCard: React.FC<FarmingPracticeCardProps> = ({ practice, language }) => {
  const benefits = language === 'en' ? practice.benefits : practice.benefitsChinese;

  return (
    <CardContainer>
      <IconContainer>{practice.icon}</IconContainer>
      <Title>
        {language === 'en' ? practice.title : practice.titleChinese}
      </Title>
      <Description>
        {language === 'en' ? practice.description : practice.descriptionChinese}
      </Description>
      <BenefitsList>
        {benefits.map((benefit, index) => (
          <BenefitItem key={index}>{benefit}</BenefitItem>
        ))}
      </BenefitsList>
    </CardContainer>
  );
};