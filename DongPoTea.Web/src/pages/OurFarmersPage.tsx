import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { farmers, farmingPractices, getFeatureFarmers } from '../data/farmers';
import { FarmerCard } from '../components/farmers/FarmerCard/FarmerCard';
import { FarmingPracticeCard } from '../components/farmers/FarmingPracticeCard/FarmingPracticeCard';

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
  max-width: 800px;
  margin: 0 auto ${theme.spacing[8]};
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[12]};
`;

const StatItem = styled.div`
  text-align: center;
  padding: ${theme.spacing[6]};
  background: linear-gradient(135deg, ${theme.colors.gray[50]} 0%, ${theme.colors.white} 100%);
  border-radius: 12px;
  border: 1px solid ${theme.colors.gray[200]};
`;

const StatNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing[2]};
`;

const StatLabel = styled.div`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Section = styled.section`
  margin-bottom: ${theme.spacing[16]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
`;

const SectionDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${theme.spacing[10]};
`;

const FeaturedFarmersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const AllFarmersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[6]};
`;

const PracticesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
`;

const HeroSection = styled.section`
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
  font-size: ${theme.typography.fontSize['3xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
`;

const HeroText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[700]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 700px;
  margin: 0 auto;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[8]};
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: 20px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;

  ${({ $active }) => $active ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
  ` : `
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[300]};

    &:hover {
      background-color: ${theme.colors.gray[50]};
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const OurFarmersPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const [activeFilter, setActiveFilter] = React.useState<'all' | 'featured'>('featured');

  const featuredFarmers = getFeatureFarmers();
  const displayFarmers = activeFilter === 'featured' ? featuredFarmers : farmers;

  const stats = [
    {
      number: farmers.length,
      label: language === 'en' ? 'Partner Farmers' : '合作農民'
    },
    {
      number: farmers.reduce((sum, farmer) => sum + farmer.experience, 0),
      label: language === 'en' ? 'Years Combined Experience' : '總計年資'
    },
    {
      number: Math.round(farmers.reduce((sum, farmer) => sum + farmer.farmSize, 0)),
      label: language === 'en' ? 'Hectares of Tea Gardens' : '公頃茶園'
    },
    {
      number: farmers.filter(f => f.elevation > 1000).length,
      label: language === 'en' ? 'High Altitude Farms' : '高海拔農場'
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {language === 'en' ? 'Our Tea Farmers' : '我們的茶農'}
        </HeaderTitle>
        <HeaderSubtitle>
          {language === 'en' 
            ? 'Meet the dedicated artisans who bring you exceptional Taiwanese tea. Each farmer represents generations of wisdom, passion, and commitment to quality.'
            : '認識為您帶來優質台灣茶的專業工匠。每位農民都代表著世代傳承的智慧、熱情和對品質的承諾。'
          }
        </HeaderSubtitle>
      </Header>

      <StatsContainer>
        {stats.map((stat, index) => (
          <StatItem key={index}>
            <StatNumber>{stat.number}+</StatNumber>
            <StatLabel>{stat.label}</StatLabel>
          </StatItem>
        ))}
      </StatsContainer>

      <HeroSection>
        <HeroTitle>
          {language === 'en' ? 'From Mountain to Cup' : '從山到杯'}
        </HeroTitle>
        <HeroText>
          {language === 'en' 
            ? 'Every cup of our tea tells a story - of mist-covered mountains, patient cultivation, and the skilled hands that transform leaves into liquid poetry. Our partner farmers are not just suppliers; they are custodians of Taiwan\'s rich tea heritage and innovators shaping its future.'
            : '我們的每一杯茶都訴說著一個故事——霧氣繚繞的山峰、耐心的栽培，以及將葉子轉化為液體詩歌的巧手。我們的合作農民不僅是供應商；他們是台灣豐富茶葉傳統的守護者和塑造未來的創新者。'
          }
        </HeroText>
      </HeroSection>

      <Section>
        <SectionTitle>
          {language === 'en' ? 'Featured Tea Masters' : '特色茶師'}
        </SectionTitle>
        <SectionDescription>
          {language === 'en' 
            ? 'Discover the stories behind our most exceptional farmers, whose dedication and expertise have earned them recognition throughout Taiwan and beyond.'
            : '發現我們最優秀農民背後的故事，他們的奉獻和專業在台灣和海外都獲得了認可。'
          }
        </SectionDescription>

        <FilterContainer>
          <FilterButton 
            $active={activeFilter === 'featured'}
            onClick={() => setActiveFilter('featured')}
          >
            {language === 'en' ? 'Featured Masters' : '特色大師'}
          </FilterButton>
          <FilterButton 
            $active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            {language === 'en' ? 'All Farmers' : '所有農民'}
          </FilterButton>
        </FilterContainer>

        {activeFilter === 'featured' ? (
          <FeaturedFarmersGrid>
            {displayFarmers.map((farmer) => (
              <FarmerCard
                key={farmer.id}
                farmer={farmer}
                language={language}
                variant="featured"
              />
            ))}
          </FeaturedFarmersGrid>
        ) : (
          <AllFarmersGrid>
            {displayFarmers.map((farmer) => (
              <FarmerCard
                key={farmer.id}
                farmer={farmer}
                language={language}
                variant="compact"
              />
            ))}
          </AllFarmersGrid>
        )}
      </Section>

      <Section>
        <SectionTitle>
          {language === 'en' ? 'Our Farming Philosophy' : '我們的農業理念'}
        </SectionTitle>
        <SectionDescription>
          {language === 'en' 
            ? 'Our farmers share a commitment to sustainable, traditional practices that respect both the environment and the ancient art of tea cultivation.'
            : '我們的農民共同致力於永續的傳統實踐，既尊重環境，也尊重古老的茶葉栽培藝術。'
          }
        </SectionDescription>

        <PracticesGrid>
          {farmingPractices.map((practice) => (
            <FarmingPracticeCard
              key={practice.id}
              practice={practice}
              language={language}
            />
          ))}
        </PracticesGrid>
      </Section>
    </Container>
  );
};