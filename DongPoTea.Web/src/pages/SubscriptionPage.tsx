import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { 
  subscriptionPlans, 
  subscriptionBenefits, 
  subscriptionTestimonials,
  getPopularPlans 
} from '../data/subscriptions';
import { SubscriptionCard } from '../components/subscriptions/SubscriptionCard/SubscriptionCard';
import { BenefitsSection } from '../components/subscriptions/BenefitsSection/BenefitsSection';
import { TestimonialsSection } from '../components/subscriptions/TestimonialsSection/TestimonialsSection';
import { FAQSection } from '../components/subscriptions/FAQSection/FAQSection';

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

const HeroOfferText = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-weight: ${theme.typography.fontWeight.medium};
  font-size: ${theme.typography.fontSize.base};
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

const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const PopularPlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[3]};
  margin-bottom: ${theme.spacing[8]};
  flex-wrap: wrap;
`;

const FilterTab = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  border-radius: 25px;
  font-size: ${theme.typography.fontSize.base};
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
      color: ${theme.colors.primary};
    }
  `}
`;

const ComparisonCTA = styled.div`
  text-align: center;
  margin-top: ${theme.spacing[10]};
`;

const ComparisonButton = styled.button`
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

const TrustSignals = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[6]};
  margin: ${theme.spacing[12]} 0;
  padding: ${theme.spacing[8]};
  background-color: ${theme.colors.gray[50]};
  border-radius: 12px;
`;

const TrustSignal = styled.div`
  text-align: center;
`;

const TrustIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${theme.spacing[3]};
`;

const TrustTitle = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const TrustDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

type FilterType = 'all' | 'popular' | 'monthly' | 'trial';

export const SubscriptionPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const [activeFilter, setActiveFilter] = useState<FilterType>('popular');

  const getDisplayPlans = () => {
    switch (activeFilter) {
      case 'popular':
        return getPopularPlans();
      case 'monthly':
        return subscriptionPlans.filter(plan => plan.frequency === 'monthly');
      case 'trial':
        return subscriptionPlans.filter(plan => plan.trialAvailable);
      default:
        return subscriptionPlans;
    }
  };

  const displayPlans = getDisplayPlans();

  const trustSignals = [
    {
      icon: '🚚',
      title: language === 'en' ? 'Free Shipping' : '免運費',
      description: language === 'en' ? 'Worldwide delivery included' : '包含全球配送'
    },
    {
      icon: '🔄',
      title: language === 'en' ? 'No Commitment' : '無承諾',
      description: language === 'en' ? 'Cancel anytime, no fees' : '隨時取消，無費用'
    },
    {
      icon: '🎁',
      title: language === 'en' ? 'Gift Options' : '禮品選項',
      description: language === 'en' ? 'Perfect for tea lovers' : '茶愛好者的完美選擇'
    },
    {
      icon: '⭐',
      title: language === 'en' ? '5-Star Rated' : '五星評級',
      description: language === 'en' ? '4.9/5 customer satisfaction' : '4.9/5客戶滿意度'
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {language === 'en' ? 'Tea Subscription Service' : '茶葉訂閱服務'}
        </HeaderTitle>
        <HeaderSubtitle>
          {language === 'en' 
            ? 'Discover exceptional Taiwanese teas delivered to your door. Curated by experts, sourced directly from farmers, and tailored to your taste preferences.'
            : '發現送到您門口的優質台灣茶。由專家策劃，直接來自農民，並根據您的口味偏好量身定制。'
          }
        </HeaderSubtitle>
      </Header>

      <HeroBanner>
        <HeroTitle>
          {language === 'en' ? 'Start Your Tea Journey Today' : '今天開始您的茶之旅'}
        </HeroTitle>
        <HeroText>
          {language === 'en' 
            ? 'Join thousands of tea enthusiasts who discover new flavors every month. From beginner-friendly selections to rare connoisseur varieties.'
            : '加入每月發現新風味的數千茶愛好者。從初學者友善的選擇到稀有鑑賞家品種。'
          }
        </HeroText>
        <HeroOfferText>
          <span>🎉</span>
          <span>
            {language === 'en' ? 'New subscribers save 25% on first box' : '新訂閱者首箱節省25%'}
          </span>
        </HeroOfferText>
      </HeroBanner>

      <Section>
        <SectionHeader>
          <SectionTitle>
            {language === 'en' ? 'Choose Your Perfect Plan' : '選擇您的完美計劃'}
          </SectionTitle>
          <SectionDescription>
            {language === 'en' 
              ? 'Each plan is thoughtfully designed for different tea preferences and experience levels. All plans include free shipping and can be customized to your taste.'
              : '每個計劃都是針對不同的茶偏好和經驗水平精心設計的。所有計劃都包含免運費，並可根據您的口味定制。'
            }
          </SectionDescription>
        </SectionHeader>

        <FilterTabs>
          <FilterTab 
            $active={activeFilter === 'popular'}
            onClick={() => setActiveFilter('popular')}
          >
            {language === 'en' ? 'Most Popular' : '最受歡迎'}
          </FilterTab>
          <FilterTab 
            $active={activeFilter === 'all'}
            onClick={() => setActiveFilter('all')}
          >
            {language === 'en' ? 'All Plans' : '所有計劃'}
          </FilterTab>
          <FilterTab 
            $active={activeFilter === 'monthly'}
            onClick={() => setActiveFilter('monthly')}
          >
            {language === 'en' ? 'Monthly' : '每月'}
          </FilterTab>
          <FilterTab 
            $active={activeFilter === 'trial'}
            onClick={() => setActiveFilter('trial')}
          >
            {language === 'en' ? 'Trial Available' : '可試用'}
          </FilterTab>
        </FilterTabs>

        {activeFilter === 'popular' ? (
          <PopularPlansContainer>
            {displayPlans.map((plan) => (
              <SubscriptionCard
                key={plan.id}
                plan={plan}
                language={language}
                variant="featured"
              />
            ))}
          </PopularPlansContainer>
        ) : (
          <PlansContainer>
            {displayPlans.map((plan) => (
              <SubscriptionCard
                key={plan.id}
                plan={plan}
                language={language}
                variant="standard"
              />
            ))}
          </PlansContainer>
        )}

        <ComparisonCTA>
          <ComparisonButton>
            {language === 'en' ? 'Compare All Plans' : '比較所有計劃'}
          </ComparisonButton>
        </ComparisonCTA>
      </Section>

      <TrustSignals>
        {trustSignals.map((signal, index) => (
          <TrustSignal key={index}>
            <TrustIcon>{signal.icon}</TrustIcon>
            <TrustTitle>{signal.title}</TrustTitle>
            <TrustDescription>{signal.description}</TrustDescription>
          </TrustSignal>
        ))}
      </TrustSignals>

      <BenefitsSection benefits={subscriptionBenefits} language={language} />

      <TestimonialsSection testimonials={subscriptionTestimonials} language={language} />

      <FAQSection language={language} />
    </Container>
  );
};