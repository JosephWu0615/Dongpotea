import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { 
  giftSets, 
  giftCategories, 
  giftOccasions, 
  getFeaturedGiftSets,
  getBestSellerGiftSets,
  getGiftSetsByCategory,
  getGiftSetsByOccasion
} from '../data/gifts';
import { GiftSetCard } from '../components/gifts/GiftSetCard/GiftSetCard';
import { OccasionCard } from '../components/gifts/OccasionCard/OccasionCard';
import { CategoryFilter } from '../components/gifts/CategoryFilter/CategoryFilter';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
`;

const HeaderTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const HeaderSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 700px;
  margin: 0 auto ${theme.spacing[8]};
`;

const HeroBanner = styled.section`
  background: linear-gradient(
    135deg,
    rgba(168, 134, 103, 0.1) 0%,
    rgba(140, 106, 74, 0.1) 100%
  );
  border-radius: 16px;
  padding: ${theme.spacing[12]} ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[16]};
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const HeroText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[700]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto ${theme.spacing[6]};
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[8]};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[2]};
`;

const StatLabel = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing[16]};
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[10]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const SectionDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 600px;
  margin: 0 auto;
`;

const OccasionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[12]};
`;

const FilterSection = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const GiftSetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
`;

const FeaturedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const ViewAllButton = styled.button`
  display: block;
  margin: ${theme.spacing[8]} auto 0;
  padding: ${theme.spacing[3]} ${theme.spacing[8]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 2px solid ${theme.colors.primary};
  border-radius: 6px;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
  color: ${theme.colors.gray[600]};
`;

type FilterType = 'all' | 'featured' | 'best-sellers' | 'category' | 'occasion';

export const GiftCenterPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const [activeFilter, setActiveFilter] = useState<FilterType>('featured');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('');
  const [showAll, setShowAll] = useState(false);

  const getDisplayGiftSets = () => {
    let sets = giftSets;
    
    switch (activeFilter) {
      case 'featured':
        sets = getFeaturedGiftSets();
        break;
      case 'best-sellers':
        sets = getBestSellerGiftSets();
        break;
      case 'category':
        sets = selectedCategory ? getGiftSetsByCategory(selectedCategory) : giftSets;
        break;
      case 'occasion':
        sets = selectedOccasion ? getGiftSetsByOccasion(selectedOccasion) : giftSets;
        break;
      default:
        sets = giftSets;
    }

    return showAll ? sets : sets.slice(0, 6);
  };

  const displaySets = getDisplayGiftSets();
  const hasMore = getDisplayGiftSets().length < (activeFilter === 'all' ? giftSets.length : 
    activeFilter === 'featured' ? getFeaturedGiftSets().length :
    activeFilter === 'best-sellers' ? getBestSellerGiftSets().length :
    activeFilter === 'category' && selectedCategory ? getGiftSetsByCategory(selectedCategory).length :
    activeFilter === 'occasion' && selectedOccasion ? getGiftSetsByOccasion(selectedOccasion).length : 0
  ) && !showAll;

  const stats = [
    {
      number: giftSets.length,
      label: language === 'en' ? 'Curated Sets' : '精選套裝'
    },
    {
      number: giftCategories.length,
      label: language === 'en' ? 'Categories' : '分類'
    },
    {
      number: '24h',
      label: language === 'en' ? 'Fast Shipping' : '快速配送'
    },
    {
      number: '100%',
      label: language === 'en' ? 'Satisfaction' : '滿意度'
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {language === 'en' ? 'Tea Gift Center' : '茶禮中心'}
        </HeaderTitle>
        <HeaderSubtitle>
          {language === 'en' 
            ? 'Discover the perfect tea gift for every occasion. Our curated collections combine the finest Taiwanese teas with elegant packaging, creating memorable experiences for tea lovers.'
            : '為每個場合發現完美的茶禮。我們精心策劃的收藏結合了最優質的台灣茶和優雅的包裝，為愛茶人士創造難忘的體驗。'
          }
        </HeaderSubtitle>
      </Header>

      <HeroBanner>
        <HeroTitle>
          {language === 'en' ? 'The Art of Tea Gifting' : '茶禮的藝術'}
        </HeroTitle>
        <HeroText>
          {language === 'en' 
            ? 'More than just tea, our gift sets are carefully crafted experiences that celebrate Taiwan\'s rich tea culture. Each set tells a story and creates moments of connection and mindfulness.'
            : '不僅僅是茶，我們的禮品套裝是精心打造的體驗，慶祝台灣豐富的茶文化。每套都訴說著一個故事，創造聯繫和正念的時刻。'
          }
        </HeroText>
        
        <HeroStats>
          {stats.map((stat, index) => (
            <StatItem key={index}>
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </HeroStats>
      </HeroBanner>

      <Section>
        <SectionHeader>
          <SectionTitle>
            {language === 'en' ? 'Shop by Occasion' : '按場合購物'}
          </SectionTitle>
          <SectionDescription>
            {language === 'en' 
              ? 'Find the perfect gift for any celebration or milestone in life.'
              : '為生活中的任何慶祝或里程碑找到完美的禮物。'
            }
          </SectionDescription>
        </SectionHeader>

        <OccasionsGrid>
          {giftOccasions.map((occasion) => (
            <OccasionCard
              key={occasion.id}
              occasion={occasion}
              language={language}
              onClick={() => {
                setActiveFilter('occasion');
                setSelectedOccasion(occasion.id);
                setShowAll(false);
              }}
            />
          ))}
        </OccasionsGrid>
      </Section>

      <Section>
        <SectionHeader>
          <SectionTitle>
            {activeFilter === 'featured' && (language === 'en' ? 'Featured Gift Sets' : '特色禮品套裝')}
            {activeFilter === 'best-sellers' && (language === 'en' ? 'Best Selling Sets' : '熱銷套裝')}
            {activeFilter === 'category' && (language === 'en' ? 'Shop by Category' : '按分類購物')}
            {activeFilter === 'occasion' && (language === 'en' ? 'Perfect for This Occasion' : '適合此場合')}
            {activeFilter === 'all' && (language === 'en' ? 'All Gift Sets' : '所有禮品套裝')}
          </SectionTitle>
          <SectionDescription>
            {activeFilter === 'featured' && (language === 'en' 
              ? 'Our most popular and expertly curated tea gift collections.'
              : '我們最受歡迎和專業策劃的茶禮收藏。'
            )}
            {activeFilter === 'best-sellers' && (language === 'en' 
              ? 'Customer favorites that make perfect gifts every time.'
              : '客戶最愛，每次都是完美的禮物。'
            )}
            {activeFilter === 'category' && (language === 'en' 
              ? 'Explore our carefully organized gift collections.'
              : '探索我們精心組織的禮品收藏。'
            )}
            {activeFilter === 'occasion' && (language === 'en' 
              ? 'Thoughtfully selected gifts for this special moment.'
              : '為這個特殊時刻精心挑選的禮物。'
            )}
            {activeFilter === 'all' && (language === 'en' 
              ? 'Browse our complete collection of tea gift sets.'
              : '瀏覽我們完整的茶禮套裝收藏。'
            )}
          </SectionDescription>
        </SectionHeader>

        <FilterSection>
          <CategoryFilter
            categories={giftCategories}
            activeFilter={activeFilter}
            selectedCategory={selectedCategory}
            language={language}
            onFilterChange={(filter, category) => {
              setActiveFilter(filter);
              setSelectedCategory(category || '');
              setShowAll(false);
            }}
          />
        </FilterSection>

        {activeFilter === 'featured' ? (
          <FeaturedGrid>
            {displaySets.map((giftSet) => (
              <GiftSetCard
                key={giftSet.id}
                giftSet={giftSet}
                language={language}
                variant="featured"
              />
            ))}
          </FeaturedGrid>
        ) : (
          <GiftSetsGrid>
            {displaySets.map((giftSet) => (
              <GiftSetCard
                key={giftSet.id}
                giftSet={giftSet}
                language={language}
                variant="standard"
              />
            ))}
          </GiftSetsGrid>
        )}

        {displaySets.length === 0 && (
          <EmptyState>
            <p>
              {language === 'en' 
                ? 'No gift sets found for the selected filters.'
                : '未找到符合所選篩選條件的禮品套裝。'
              }
            </p>
          </EmptyState>
        )}

        {hasMore && (
          <ViewAllButton onClick={() => setShowAll(true)}>
            {language === 'en' ? 'View All Sets' : '查看所有套裝'}
          </ViewAllButton>
        )}
      </Section>
    </Container>
  );
};