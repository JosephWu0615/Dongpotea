import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { learningSections } from '../data/learning';
import ReactMarkdown from 'react-markdown';

const Container = styled.div`
  max-width: 800px;
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
  margin-bottom: ${theme.spacing[12]};
`;

const HeaderMeta = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.sm};
`;

const DifficultyBadge = styled.span<{ $difficulty: string }>`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
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

const HeaderTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  line-height: ${theme.typography.lineHeight.tight};
  margin-bottom: ${theme.spacing[6]};
`;

const ContentImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${theme.spacing[8]};
`;

const Article = styled.article`
  line-height: ${theme.typography.lineHeight.relaxed};

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.serif};
    color: ${theme.colors.gray[900]};
    margin-top: ${theme.spacing[8]};
    margin-bottom: ${theme.spacing[4]};
    line-height: ${theme.typography.lineHeight.tight};
  }

  h1 {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  h2 {
    font-size: ${theme.typography.fontSize.xl};
  }

  h3 {
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.gray[700]};
  }

  ul, ol {
    margin-bottom: ${theme.spacing[4]};
    padding-left: ${theme.spacing[6]};
  }

  li {
    margin-bottom: ${theme.spacing[2]};
    color: ${theme.colors.gray[700]};
  }

  strong {
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.gray[900]};
  }

  code {
    background-color: ${theme.colors.gray[100]};
    padding: 2px 4px;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${theme.colors.gray[100]};
    padding: ${theme.spacing[4]};
    border-radius: 8px;
    overflow-x: auto;
    margin-bottom: ${theme.spacing[4]};
  }

  blockquote {
    border-left: 4px solid ${theme.colors.primary};
    padding-left: ${theme.spacing[4]};
    margin: ${theme.spacing[6]} 0;
    font-style: italic;
    color: ${theme.colors.gray[600]};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: ${theme.spacing[4]};
  }

  th, td {
    padding: ${theme.spacing[3]};
    text-align: left;
    border-bottom: 1px solid ${theme.colors.gray[200]};
  }

  th {
    font-weight: ${theme.typography.fontWeight.semibold};
    background-color: ${theme.colors.gray[50]};
  }
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing[12]};
  padding-top: ${theme.spacing[8]};
  border-top: 1px solid ${theme.colors.gray[200]};
  gap: ${theme.spacing[4]};
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 6px;
  text-decoration: none;
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[50]};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
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

export const LearningContentPage: React.FC = () => {
  const { sectionSlug, contentSlug } = useParams<{ sectionSlug: string; contentSlug: string }>();
  const { language } = useAppSelector((state) => state.ui);

  const section = learningSections.find(s => s.slug === sectionSlug);
  const content = section?.content.find(c => c.slug === contentSlug);

  if (!section || !content) {
    return (
      <Container>
        <EmptyState>
          <EmptyStateTitle>
            {language === 'en' ? 'Content Not Found' : '找不到內容'}
          </EmptyStateTitle>
          <EmptyStateText>
            {language === 'en' 
              ? 'The learning content you\'re looking for doesn\'t exist.'
              : '您要查找的學習內容不存在。'
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

  const currentIndex = section.content.findIndex(c => c.slug === contentSlug);
  const previousContent = currentIndex > 0 ? section.content[currentIndex - 1] : null;
  const nextContent = currentIndex < section.content.length - 1 ? section.content[currentIndex + 1] : null;

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
            <BreadcrumbLink to={`/learning/${section.slug}`}>
              {language === 'en' ? section.title : section.titleChinese}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {language === 'en' ? content.title : content.titleChinese}
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <Header>
        <HeaderMeta>
          <DifficultyBadge $difficulty={content.difficulty}>
            {difficultyText[content.difficulty]}
          </DifficultyBadge>
          <ReadingTime>
            {content.readingTime} {language === 'en' ? 'min read' : '分鐘閱讀'}
          </ReadingTime>
        </HeaderMeta>
        <HeaderTitle>
          {language === 'en' ? content.title : content.titleChinese}
        </HeaderTitle>
        {content.image && (
          <ContentImage 
            src={content.image} 
            alt={language === 'en' ? content.title : content.titleChinese}
          />
        )}
      </Header>

      <Article>
        <ReactMarkdown>
          {language === 'en' ? content.content : content.contentChinese}
        </ReactMarkdown>
      </Article>

      <Navigation>
        {previousContent ? (
          <NavButton to={`/learning/${section.slug}/${previousContent.slug}`}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <div>
              <div style={{ fontSize: '12px', color: theme.colors.gray[500] }}>
                {language === 'en' ? 'Previous' : '上一篇'}
              </div>
              <div>
                {language === 'en' ? previousContent.title : previousContent.titleChinese}
              </div>
            </div>
          </NavButton>
        ) : <div />}
        
        {nextContent ? (
          <NavButton to={`/learning/${section.slug}/${nextContent.slug}`}>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '12px', color: theme.colors.gray[500] }}>
                {language === 'en' ? 'Next' : '下一篇'}
              </div>
              <div>
                {language === 'en' ? nextContent.title : nextContent.titleChinese}
              </div>
            </div>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </NavButton>
        ) : <div />}
      </Navigation>
    </Container>
  );
};