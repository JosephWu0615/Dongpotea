import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { learningSections, LearningContent } from '../data/learning';
import ReactMarkdown from 'react-markdown';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
`;

const Breadcrumb = styled.nav`
  margin-bottom: ${theme.spacing[8]};
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  list-style: none;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const BreadcrumbItem = styled.li`
  &:not(:last-child)::after {
    content: '/';
    margin-left: ${theme.spacing[2]};
    color: ${theme.colors.gray[400]};
  }
`;

const BreadcrumbLink = styled(Link)`
  color: ${theme.colors.primary};
  
  &:hover {
    text-decoration: underline;
  }
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
`;

const HeaderIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing[4]};
`;

const HeaderTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const HeaderDescription = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing[6]};
`;

const ContentCard = styled(Link)`
  display: block;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  border: 1px solid ${theme.colors.gray[200]};
  padding: ${theme.spacing[6]};
  text-decoration: none;
  color: inherit;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: ${theme.colors.primary};
  }
`;

const ContentTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const ContentMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.xs};
`;

const DifficultyBadge = styled.span<{ $difficulty: string }>`
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

const ReadingTime = styled.span`
  color: ${theme.colors.gray[500]};
`;

const ContentPreview = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  
  h1, h2, h3, h4, h5, h6 {
    display: none;
  }
  
  p:first-of-type {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  p:not(:first-of-type) {
    display: none;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
`;

const EmptyStateTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const EmptyStateText = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
`;

export const LearningSectionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useAppSelector((state) => state.ui);

  const section = learningSections.find(s => s.slug === slug);

  if (!section) {
    return (
      <Container>
        <EmptyState>
          <EmptyStateTitle>
            {language === 'en' ? 'Section Not Found' : '找不到章節'}
          </EmptyStateTitle>
          <EmptyStateText>
            {language === 'en' 
              ? 'The learning section you\'re looking for doesn\'t exist.'
              : '您要查找的學習章節不存在。'
            }
          </EmptyStateText>
        </EmptyState>
      </Container>
    );
  }

  const difficultyText = {
    beginner: language === 'en' ? 'Beginner' : '初學者',
    intermediate: language === 'en' ? 'Intermediate' : '中級',
    advanced: language === 'en' ? 'Advanced' : '高級'
  };

  return (
    <Container>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/learning">
              {language === 'en' ? 'Learning Center' : '學習中心'}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {language === 'en' ? section.title : section.titleChinese}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Header>
        <HeaderIcon>{section.icon}</HeaderIcon>
        <HeaderTitle>
          {language === 'en' ? section.title : section.titleChinese}
        </HeaderTitle>
        <HeaderDescription>
          {language === 'en' ? section.description : section.descriptionChinese}
        </HeaderDescription>
      </Header>

      <ContentGrid>
        {section.content.map((content: LearningContent) => (
          <ContentCard key={content.id} to={`/learning/${section.slug}/${content.slug}`}>
            <ContentMeta>
              <DifficultyBadge $difficulty={content.difficulty}>
                {difficultyText[content.difficulty]}
              </DifficultyBadge>
              <ReadingTime>
                {content.readingTime} {language === 'en' ? 'min read' : '分鐘閱讀'}
              </ReadingTime>
            </ContentMeta>
            <ContentTitle>
              {language === 'en' ? content.title : content.titleChinese}
            </ContentTitle>
            <ContentPreview>
              <ReactMarkdown>
                {language === 'en' ? content.content : content.contentChinese}
              </ReactMarkdown>
            </ContentPreview>
          </ContentCard>
        ))}
      </ContentGrid>
    </Container>
  );
};