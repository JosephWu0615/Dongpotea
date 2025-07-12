import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../assets/styles/theme';
import { LearningSection } from '../../../data/learning';

const CardContainer = styled(Link)`
  display: block;
  background-color: ${theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  text-decoration: none;
  color: inherit;
  border: 1px solid ${theme.colors.gray[200]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }
`;

const CardHeader = styled.div`
  padding: ${theme.spacing[6]};
  text-align: center;
  background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  color: ${theme.colors.white};
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing[3]};
`;

const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[2]};
`;

const CardContent = styled.div`
  padding: ${theme.spacing[6]};
`;

const CardDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[4]};
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const CardCount = styled.span`
  font-weight: ${theme.typography.fontWeight.medium};
`;

const CardDifficulty = styled.span<{ $difficulty: string }>`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: 12px;
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: ${({ $difficulty }) => {
    switch ($difficulty) {
      case 'beginner': return theme.colors.success;
      case 'intermediate': return theme.colors.warning;
      case 'advanced': return theme.colors.error;
      default: return theme.colors.gray[100];
    }
  }};
  color: ${({ $difficulty }) => {
    switch ($difficulty) {
      case 'beginner': return theme.colors.white;
      case 'intermediate': return theme.colors.white;
      case 'advanced': return theme.colors.white;
      default: return theme.colors.gray[700];
    }
  }};
`;

interface LearningCardProps {
  section: LearningSection;
  language: 'en' | 'zh-TW';
}

export const LearningCard: React.FC<LearningCardProps> = ({ section, language }) => {
  const difficultyText = {
    beginner: language === 'en' ? 'Beginner' : '初學者',
    intermediate: language === 'en' ? 'Intermediate' : '中級',
    advanced: language === 'en' ? 'Advanced' : '高級'
  };

  const averageDifficulty = section.content.reduce((acc, content) => {
    const difficultyScores = { beginner: 1, intermediate: 2, advanced: 3 };
    return acc + difficultyScores[content.difficulty];
  }, 0) / section.content.length;

  const sectionDifficulty = averageDifficulty <= 1.5 ? 'beginner' : 
                           averageDifficulty <= 2.5 ? 'intermediate' : 'advanced';

  return (
    <CardContainer to={`/learning/${section.slug}`}>
      <CardHeader>
        <CardIcon>{section.icon}</CardIcon>
        <CardTitle>
          {language === 'en' ? section.title : section.titleChinese}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>
          {language === 'en' ? section.description : section.descriptionChinese}
        </CardDescription>
        <CardMeta>
          <CardCount>
            {section.content.length} {language === 'en' ? 'articles' : '篇文章'}
          </CardCount>
          <CardDifficulty $difficulty={sectionDifficulty}>
            {difficultyText[sectionDifficulty]}
          </CardDifficulty>
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
};