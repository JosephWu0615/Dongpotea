import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../assets/styles/theme';
import { BlogPost } from '../../../data/blog';

const CardContainer = styled(Link)`
  display: block;
  background-color: ${theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: ${theme.spacing[6]};
`;

const CardCategory = styled.span`
  display: inline-block;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-radius: 12px;
  margin-bottom: ${theme.spacing[3]};
`;

const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  line-height: ${theme.typography.lineHeight.tight};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[900]};
`;

const CardExcerpt = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[4]};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const CardAuthor = styled.span`
  font-weight: ${theme.typography.fontWeight.medium};
`;

const CardDate = styled.span``;

const CardReadTime = styled.span`
  &:before {
    content: '•';
    margin: 0 ${theme.spacing[2]};
  }
`;

interface BlogCardProps {
  post: BlogPost;
  language: 'en' | 'zh-TW';
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, language }) => {
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

  return (
    <CardContainer to={`/blog/post/${post.slug}`}>
      <CardImage 
        src={post.featuredImage} 
        alt={language === 'en' ? post.title : post.titleChinese}
        loading="lazy"
      />
      <CardContent>
        <CardCategory>
          {language === 'en' ? post.category.name : post.category.nameChinese}
        </CardCategory>
        <CardTitle>
          {language === 'en' ? post.title : post.titleChinese}
        </CardTitle>
        <CardExcerpt>
          {language === 'en' ? post.excerpt : post.excerptChinese}
        </CardExcerpt>
        <CardMeta>
          <div>
            <CardAuthor>
              {language === 'en' ? post.author : post.authorChinese}
            </CardAuthor>
            <CardDate>{formatDate(post.publishDate)}</CardDate>
          </div>
          <CardReadTime>
            {post.readingTime} {language === 'en' ? 'min read' : '分鐘閱讀'}
          </CardReadTime>
        </CardMeta>
      </CardContent>
    </CardContainer>
  );
};