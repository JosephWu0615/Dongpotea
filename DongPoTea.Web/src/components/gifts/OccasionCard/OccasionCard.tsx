import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { GiftOccasion } from '../../../data/gifts';

const CardContainer = styled.button<{ $color: string }>`
  background: linear-gradient(135deg, ${({ $color }) => $color}20 0%, ${({ $color }) => $color}10 100%);
  border: 2px solid ${({ $color }) => $color}40;
  border-radius: 12px;
  padding: ${theme.spacing[8]};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  width: 100%;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ $color }) => $color};
    background: linear-gradient(135deg, ${({ $color }) => $color}30 0%, ${({ $color }) => $color}15 100%);
    box-shadow: 0 8px 24px ${({ $color }) => $color}20;
  }
`;

const IconContainer = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing[4]};
`;

const OccasionName = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const OccasionDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[4]};
`;

const RecommendationCount = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[2]} ${theme.spacing[3]};
  background-color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

interface OccasionCardProps {
  occasion: GiftOccasion;
  language: 'en' | 'zh-TW';
  onClick: () => void;
}

export const OccasionCard: React.FC<OccasionCardProps> = ({ occasion, language, onClick }) => {
  return (
    <CardContainer $color={occasion.color} onClick={onClick}>
      <IconContainer>{occasion.icon}</IconContainer>
      <OccasionName>
        {language === 'en' ? occasion.name : occasion.nameChinese}
      </OccasionName>
      <OccasionDescription>
        {language === 'en' ? occasion.description : occasion.descriptionChinese}
      </OccasionDescription>
      <RecommendationCount>
        <span>🎁</span>
        <span>
          {occasion.recommendations.length} {language === 'en' ? 'gift sets' : '禮品套裝'}
        </span>
      </RecommendationCount>
    </CardContainer>
  );
};