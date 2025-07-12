import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { blogPosts, blogCategories, getFeaturedPosts, getPostsByCategory, BlogPost } from '../data/blog';
import { BlogCard } from '../components/blog/BlogCard/BlogCard';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: ${theme.spacing[20]} 0;
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.light};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
`;

const PageSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing[12]};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturedSection = styled.section`
  margin-bottom: ${theme.spacing[20]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FeaturedPost = styled(Link)`
  position: relative;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  color: ${theme.colors.white};
  text-decoration: none;

  &:first-child {
    grid-row: span 2;
    height: auto;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-row: span 1;
      height: 400px;
    }
  }
`;

const FeaturedImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.animation.duration.slow} ${theme.animation.easing.out};
`;

const FeaturedOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: ${theme.spacing[8]};
`;

const FeaturedTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[2]};
  line-height: ${theme.typography.lineHeight.tight};
`;

const FeaturedExcerpt = styled.p`
  font-size: ${theme.typography.fontSize.base};
  opacity: 0.9;
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[2]};
`;

const FeaturedMeta = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.8;
  display: flex;
  gap: ${theme.spacing[4]};
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[12]};
`;

const CategoryButton = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border: 1px solid ${({ $active }) => $active ? theme.colors.black : theme.colors.gray[300]};
  background-color: ${({ $active }) => $active ? theme.colors.black : theme.colors.white};
  color: ${({ $active }) => $active ? theme.colors.white : theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  border-radius: 20px;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    border-color: ${theme.colors.black};
    color: ${theme.colors.black};
    background-color: ${theme.colors.gray[50]};
  }

  &:hover${({ $active }) => $active && `
    background-color: ${theme.colors.gray[800]};
    color: ${theme.colors.white};
  `}
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const NoResults = styled.div`
  text-align: center;
  padding: ${theme.spacing[20]} 0;
`;

const NoResultsText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[6]};
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

export const BlogPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const { language } = useAppSelector((state) => state.ui);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category || null);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setFilteredPosts(getPostsByCategory(category));
    } else if (selectedCategory) {
      setFilteredPosts(getPostsByCategory(selectedCategory));
    } else {
      setFilteredPosts(blogPosts);
    }
  }, [category, selectedCategory]);

  const featuredPosts = getFeaturedPosts();

  const handleCategoryFilter = (categorySlug: string | null) => {
    setSelectedCategory(categorySlug);
    if (categorySlug) {
      setFilteredPosts(getPostsByCategory(categorySlug));
    } else {
      setFilteredPosts(blogPosts);
    }
  };

  const getCurrentCategoryName = () => {
    if (!selectedCategory) return null;
    const categoryObj = blogCategories.find(cat => cat.slug === selectedCategory);
    return categoryObj ? (language === 'en' ? categoryObj.name : categoryObj.nameChinese) : null;
  };

  return (
    <PageContainer>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbLink to="/">
            {language === 'en' ? 'Home' : '首頁'}
          </BreadcrumbLink>
          {' / '}
          {getCurrentCategoryName() ? (
            <>
              <BreadcrumbLink to="/blog">
                {language === 'en' ? 'Blog' : '部落格'}
              </BreadcrumbLink>
              {' / '}
              <span>{getCurrentCategoryName()}</span>
            </>
          ) : (
            <span>{language === 'en' ? 'Blog' : '部落格'}</span>
          )}
        </Breadcrumb>

        <PageTitle>
          {getCurrentCategoryName() || (language === 'en' ? 'Tea Knowledge & Stories' : '茶葉知識與故事')}
        </PageTitle>
        <PageSubtitle>
          {selectedCategory 
            ? (language === 'en' 
                ? `Explore articles about ${getCurrentCategoryName()?.toLowerCase()}`
                : `探索關於${getCurrentCategoryName()}的文章`)
            : (language === 'en'
                ? 'Discover the world of Taiwanese tea through our educational articles, brewing guides, and farmer stories'
                : '通過我們的教育文章、沖泡指南和茶農故事探索台灣茶的世界')
          }
        </PageSubtitle>

        {/* Featured Posts Section - Only show on main blog page */}
        {!selectedCategory && featuredPosts.length > 0 && (
          <FeaturedSection>
            <SectionTitle>
              {language === 'en' ? 'Featured Articles' : '精選文章'}
            </SectionTitle>
            <FeaturedGrid>
              {featuredPosts.slice(0, 3).map((post, index) => (
                <FeaturedPost key={post.id} to={`/blog/post/${post.slug}`}>
                  <FeaturedImage 
                    src={post.featuredImage} 
                    alt={language === 'en' ? post.title : post.titleChinese}
                  />
                  <FeaturedOverlay>
                    <FeaturedTitle>
                      {language === 'en' ? post.title : post.titleChinese}
                    </FeaturedTitle>
                    <FeaturedExcerpt>
                      {language === 'en' ? post.excerpt : post.excerptChinese}
                    </FeaturedExcerpt>
                    <FeaturedMeta>
                      <span>{post.readingTime} min read</span>
                      <span>•</span>
                      <span>{language === 'en' ? post.category.name : post.category.nameChinese}</span>
                    </FeaturedMeta>
                  </FeaturedOverlay>
                </FeaturedPost>
              ))}
            </FeaturedGrid>
          </FeaturedSection>
        )}

        {/* Category Filter */}
        <CategoryFilter>
          <CategoryButton 
            $active={!selectedCategory}
            onClick={() => handleCategoryFilter(null)}
          >
            {language === 'en' ? 'All Articles' : '所有文章'}
          </CategoryButton>
          {blogCategories.map((cat) => (
            <CategoryButton
              key={cat.id}
              $active={selectedCategory === cat.slug}
              onClick={() => handleCategoryFilter(cat.slug)}
            >
              {language === 'en' ? cat.name : cat.nameChinese}
            </CategoryButton>
          ))}
        </CategoryFilter>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <PostsGrid>
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} language={language} />
            ))}
          </PostsGrid>
        ) : (
          <NoResults>
            <NoResultsText>
              {language === 'en' 
                ? 'No articles found in this category.' 
                : '在此類別中未找到文章。'}
            </NoResultsText>
          </NoResults>
        )}
      </div>
    </PageContainer>
  );
};