import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { SubscriptionBenefit } from '../../../data/subscriptions';

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

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing[8]};
`;

const BenefitCard = styled.div`
  text-align: center;
  padding: ${theme.spacing[8]};
  background-color: ${theme.colors.white};
  border-radius: 12px;
  border: 1px solid ${theme.colors.gray[200]};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: ${theme.colors.primary};
  }
`;

const BenefitIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing[4]};
`;

const BenefitTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const BenefitDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

interface BenefitsSectionProps {
  benefits: SubscriptionBenefit[];
  language: 'en' | 'zh-TW';
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits, language }) => {
  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          {language === 'en' ? 'Why Choose Our Tea Subscription?' : '為什麼選擇我們的茶葉訂閱？'}
        </SectionTitle>
        <SectionDescription>
          {language === 'en' 
            ? 'Join thousands of tea lovers who have transformed their daily tea ritual with our carefully curated subscription service.'
            : '加入數千名茶愛好者，他們通過我們精心策劃的訂閱服務改變了日常茶飲儀式。'
          }
        </SectionDescription>
      </SectionHeader>

      <BenefitsGrid>
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id}>
            <BenefitIcon>{benefit.icon}</BenefitIcon>
            <BenefitTitle>
              {language === 'en' ? benefit.title : benefit.titleChinese}
            </BenefitTitle>
            <BenefitDescription>
              {language === 'en' ? benefit.description : benefit.descriptionChinese}
            </BenefitDescription>
          </BenefitCard>
        ))}
      </BenefitsGrid>
    </Section>
  );
};