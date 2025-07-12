import React from 'react';
import styled from 'styled-components';
import { Link, useParams, Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { getPostBySlug, getRelatedPosts } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard/BlogCard';
import Markdown from 'react-markdown';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
  min-height: 60vh;
`;

const Breadcrumb = styled.nav`
  margin-bottom: ${theme.spacing[8]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const BreadcrumbLink = styled(Link)`
  color: ${theme.colors.gray[600]};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ArticleHeader = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
`;

const ArticleCategory = styled(Link)`
  display: inline-block;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 20px;
  margin-bottom: ${theme.spacing[6]};
  text-decoration: none;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

const ArticleTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['5xl']};
  font-weight: ${theme.typography.fontWeight.light};
  line-height: ${theme.typography.lineHeight.tight};
  margin-bottom: ${theme.spacing[6]};
  color: ${theme.colors.gray[900]};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const ArticleMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
    gap: ${theme.spacing[2]};
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const AuthorAvatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: ${theme.colors.gray[300]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const ArticleExcerpt = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturedImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin: ${theme.spacing[12]} auto;
  display: block;

  @media (max-width: ${theme.breakpoints.md}) {
    height: 250px;
  }
`;

const ArticleContent = styled.article`
  max-width: 800px;
  margin: 0 auto ${theme.spacing[20]};
  line-height: ${theme.typography.lineHeight.relaxed};

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.typography.fontFamily.serif};
    font-weight: ${theme.typography.fontWeight.normal};
    line-height: ${theme.typography.lineHeight.tight};
    margin: ${theme.spacing[8]} 0 ${theme.spacing[4]};
    color: ${theme.colors.gray[900]};
  }

  h1 {
    font-size: ${theme.typography.fontSize['3xl']};
    border-bottom: 2px solid ${theme.colors.gray[200]};
    padding-bottom: ${theme.spacing[3]};
  }

  h2 {
    font-size: ${theme.typography.fontSize['2xl']};
  }

  h3 {
    font-size: ${theme.typography.fontSize.xl};
  }

  h4 {
    font-size: ${theme.typography.fontSize.lg};
  }

  p {
    margin-bottom: ${theme.spacing[6]};
    color: ${theme.colors.gray[700]};
  }

  ul, ol {
    margin-bottom: ${theme.spacing[6]};
    padding-left: ${theme.spacing[8]};
  }

  li {
    margin-bottom: ${theme.spacing[2]};
    color: ${theme.colors.gray[700]};
  }

  strong {
    font-weight: ${theme.typography.fontWeight.bold};
    color: ${theme.colors.gray[900]};
  }

  em {
    font-style: italic;
  }

  blockquote {
    border-left: 4px solid ${theme.colors.primary};
    padding-left: ${theme.spacing[6]};
    margin: ${theme.spacing[8]} 0;
    font-style: italic;
    color: ${theme.colors.gray[600]};
  }

  code {
    background-color: ${theme.colors.gray[100]};
    padding: ${theme.spacing[1]} ${theme.spacing[2]};
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 0.9em;
  }

  pre {
    background-color: ${theme.colors.gray[900]};
    color: ${theme.colors.white};
    padding: ${theme.spacing[6]};
    border-radius: 8px;
    overflow-x: auto;
    margin: ${theme.spacing[8]} 0;

    code {
      background: none;
      padding: 0;
      color: inherit;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: ${theme.spacing[8]} 0;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: underline;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }
`;

const TagsSection = styled.div`
  max-width: 800px;
  margin: 0 auto ${theme.spacing[12]};
`;

const TagsTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[700]};
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
`;

const Tag = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  border-radius: 12px;
`;

const RelatedSection = styled.section`
  border-top: 1px solid ${theme.colors.gray[200]};
  padding-top: ${theme.spacing[12]};
`;

const RelatedTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[6]};
`;

const ShareButtons = styled.div`
  max-width: 800px;
  margin: 0 auto ${theme.spacing[8]};
  padding: ${theme.spacing[6]} 0;
  border-top: 1px solid ${theme.colors.gray[200]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const ShareTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[700]};
`;

const ShareButtonsList = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
`;

const ShareButton = styled.button`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1px solid ${theme.colors.gray[300]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  border-radius: 4px;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useAppSelector((state) => state.ui);

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    if (language === 'en') {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else {
      return date.toLocaleDateString('zh-TW', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = language === 'en' ? post.title : post.titleChinese;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
  };

  return (
    <PageContainer>
        <Breadcrumb>
          <BreadcrumbLink to="/">
            {language === 'en' ? 'Home' : '首頁'}
          </BreadcrumbLink>
          {' / '}
          <BreadcrumbLink to="/blog">
            {language === 'en' ? 'Blog' : '部落格'}
          </BreadcrumbLink>
          {' / '}
          <BreadcrumbLink to={`/blog/category/${post.category.slug}`}>
            {language === 'en' ? post.category.name : post.category.nameChinese}
          </BreadcrumbLink>
          {' / '}
          <span>{language === 'en' ? post.title : post.titleChinese}</span>
        </Breadcrumb>

        <ArticleHeader>
          <ArticleCategory to={`/blog/category/${post.category.slug}`}>
            {language === 'en' ? post.category.name : post.category.nameChinese}
          </ArticleCategory>
          
          <ArticleTitle>
            {language === 'en' ? post.title : post.titleChinese}
          </ArticleTitle>

          <ArticleMeta>
            <AuthorInfo>
              <AuthorAvatar>
                {(language === 'en' ? post.author : post.authorChinese).charAt(0)}
              </AuthorAvatar>
              <span>{language === 'en' ? post.author : post.authorChinese}</span>
            </AuthorInfo>
            <span>•</span>
            <span>{formatDate(post.publishDate)}</span>
            <span>•</span>
            <span>{post.readingTime} {language === 'en' ? 'min read' : '分鐘閱讀'}</span>
          </ArticleMeta>

          <ArticleExcerpt>
            {language === 'en' ? post.excerpt : post.excerptChinese}
          </ArticleExcerpt>
        </ArticleHeader>

        <FeaturedImage 
          src={post.featuredImage} 
          alt={language === 'en' ? post.title : post.titleChinese}
        />

        <ArticleContent>
          <Markdown>
            {language === 'en' ? post.content : post.contentChinese}
          </Markdown>
        </ArticleContent>

        <TagsSection>
          <TagsTitle>
            {language === 'en' ? 'Tags:' : '標籤：'}
          </TagsTitle>
          <TagsList>
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsList>
        </TagsSection>

        <ShareButtons>
          <ShareTitle>
            {language === 'en' ? 'Share this article:' : '分享此文章：'}
          </ShareTitle>
          <ShareButtonsList>
            <ShareButton onClick={() => handleShare('facebook')}>
              Facebook
            </ShareButton>
            <ShareButton onClick={() => handleShare('twitter')}>
              Twitter
            </ShareButton>
            <ShareButton onClick={() => handleShare('linkedin')}>
              LinkedIn
            </ShareButton>
            <ShareButton onClick={() => handleShare('copy')}>
              {language === 'en' ? 'Copy Link' : '複製連結'}
            </ShareButton>
          </ShareButtonsList>
        </ShareButtons>

        {relatedPosts.length > 0 && (
          <RelatedSection>
            <RelatedTitle>
              {language === 'en' ? 'Related Articles' : '相關文章'}
            </RelatedTitle>
            <RelatedGrid>
              {relatedPosts.map((relatedPost) => (
                <BlogCard 
                  key={relatedPost.id} 
                  post={relatedPost} 
                  language={language} 
                />
              ))}
            </RelatedGrid>
          </RelatedSection>
        )}
    </PageContainer>
  );
};