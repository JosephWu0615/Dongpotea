import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { SubscriptionPlan } from '../../../data/subscriptions';

const CardContainer = styled.div<{ $variant: 'standard' | 'featured'; $popular: boolean }>`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  border: ${({ $popular }) => $popular ? `2px solid ${theme.colors.primary}` : `1px solid ${theme.colors.gray[200]}`};
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  ${({ $variant }) => $variant === 'featured' && `
    transform: scale(1.05);
    z-index: 2;
    
    &:hover {
      transform: scale(1.05) translateY(-4px);
    }
  `}
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -1px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  padding: ${theme.spacing[2]} ${theme.spacing[6]};
  border-radius: 0 0 20px 20px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  z-index: 3;
`;

const CardHeader = styled.div<{ $popular: boolean }>`
  padding: ${theme.spacing[8]} ${theme.spacing[6]} ${theme.spacing[6]};
  text-align: center;
  background: ${({ $popular }) => $popular 
    ? `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%)`
    : theme.colors.gray[50]
  };
  color: ${({ $popular }) => $popular ? theme.colors.white : theme.colors.gray[900]};
`;

const PlanName = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[2]};
`;

const PlanDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  opacity: 0.9;
  margin-bottom: ${theme.spacing[4]};
`;

const PriceContainer = styled.div`
  margin-bottom: ${theme.spacing[2]};
`;

const PriceDisplay = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: ${theme.spacing[2]};
`;

const CurrentPrice = styled.span`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const OriginalPrice = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  text-decoration: line-through;
  opacity: 0.7;
`;

const PriceFrequency = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  opacity: 0.8;
  margin-top: ${theme.spacing[1]};
`;

const DiscountBadge = styled.div`
  display: inline-block;
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: 12px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-top: ${theme.spacing[2]};
`;

const CardContent = styled.div`
  padding: ${theme.spacing[6]};
`;

const HighlightsSection = styled.div`
  margin-bottom: ${theme.spacing[6]};
`;

const HighlightsTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const HighlightsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[2]};
`;

const HighlightItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[700]};
`;

const HighlightIcon = styled.span`
  color: ${theme.colors.success};
  font-weight: bold;
`;

const FeaturesSection = styled.div`
  margin-bottom: ${theme.spacing[6]};
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};

  &::before {
    content: '✓';
    color: ${theme.colors.success};
    font-weight: bold;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

const ActionSection = styled.div`
  border-top: 1px solid ${theme.colors.gray[200]};
  padding-top: ${theme.spacing[6]};
`;

const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  width: 100%;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: 6px;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;
  margin-bottom: ${theme.spacing[3]};

  ${({ $variant }) => $variant === 'primary' ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
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

const TrialText = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
  text-align: center;
  margin-top: ${theme.spacing[2]};
`;

const BenefitsBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
`;

const BenefitBadge = styled.span<{ $type: 'shipping' | 'trial' | 'cancel' | 'gift' }>`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border-radius: 8px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  
  ${({ $type }) => {
    switch ($type) {
      case 'shipping':
        return `
          background-color: ${theme.colors.success}20;
          color: ${theme.colors.success};
          border: 1px solid ${theme.colors.success}40;
        `;
      case 'trial':
        return `
          background-color: ${theme.colors.info}20;
          color: ${theme.colors.info};
          border: 1px solid ${theme.colors.info}40;
        `;
      case 'cancel':
        return `
          background-color: ${theme.colors.gray[100]};
          color: ${theme.colors.gray[700]};
          border: 1px solid ${theme.colors.gray[300]};
        `;
      case 'gift':
        return `
          background-color: ${theme.colors.warning}20;
          color: ${theme.colors.warning};
          border: 1px solid ${theme.colors.warning}40;
        `;
      default:
        return '';
    }
  }}
`;

interface SubscriptionCardProps {
  plan: SubscriptionPlan;
  language: 'en' | 'zh-TW';
  variant: 'standard' | 'featured';
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ plan, language, variant }) => {
  // const savings = plan.originalPrice ? plan.originalPrice - plan.price : 0;

  const highlights = [
    {
      text: `${plan.teaVarieties} ${language === 'en' ? 'tea varieties' : '茶葉品種'}`,
      icon: '🍃'
    },
    {
      text: `${plan.teaQuantity}g ${language === 'en' ? 'total' : '總計'}`,
      icon: '⚖️'
    },
    {
      text: language === 'en' ? plan.frequency : plan.frequencyChinese,
      icon: '📅'
    },
    {
      text: plan.freeShipping ? (language === 'en' ? 'Free shipping' : '免運費') : '',
      icon: '🚚'
    }
  ].filter(item => item.text);

  return (
    <CardContainer $variant={variant} $popular={plan.popular}>
      {plan.popular && (
        <PopularBadge>
          {language === 'en' ? 'Most Popular' : '最受歡迎'}
        </PopularBadge>
      )}

      <CardHeader $popular={plan.popular}>
        <PlanName>
          {language === 'en' ? plan.name : plan.nameChinese}
        </PlanName>
        <PlanDescription>
          {language === 'en' ? plan.shortDescription : plan.shortDescriptionChinese}
        </PlanDescription>
        
        <PriceContainer>
          <PriceDisplay>
            <CurrentPrice>${plan.price}</CurrentPrice>
            {plan.originalPrice && (
              <OriginalPrice>${plan.originalPrice}</OriginalPrice>
            )}
          </PriceDisplay>
          <PriceFrequency>
            {language === 'en' ? `per ${plan.frequency} delivery` : `每${plan.frequencyChinese}配送`}
          </PriceFrequency>
          {plan.newCustomerDiscount && (
            <DiscountBadge>
              {language === 'en' 
                ? `${plan.newCustomerDiscount}% off first box` 
                : `首箱${plan.newCustomerDiscount}%折扣`
              }
            </DiscountBadge>
          )}
        </PriceContainer>
      </CardHeader>

      <CardContent>
        <HighlightsSection>
          <HighlightsTitle>
            {language === 'en' ? 'What You Get' : '您將獲得'}
          </HighlightsTitle>
          <HighlightsList>
            {highlights.map((highlight, index) => (
              <HighlightItem key={index}>
                <HighlightIcon>{highlight.icon}</HighlightIcon>
                <span>{highlight.text}</span>
              </HighlightItem>
            ))}
          </HighlightsList>
        </HighlightsSection>

        <FeaturesSection>
          <FeaturesList>
            {(language === 'en' ? plan.features : plan.featuresChinese).slice(0, 4).map((feature, index) => (
              <FeatureItem key={index}>{feature}</FeatureItem>
            ))}
            {plan.features.length > 4 && (
              <FeatureItem>
                +{plan.features.length - 4} {language === 'en' ? 'more features' : '更多功能'}
              </FeatureItem>
            )}
          </FeaturesList>
        </FeaturesSection>

        <BenefitsBadges>
          {plan.freeShipping && (
            <BenefitBadge $type="shipping">
              🚚 {language === 'en' ? 'Free Shipping' : '免運費'}
            </BenefitBadge>
          )}
          {plan.trialAvailable && (
            <BenefitBadge $type="trial">
              🎯 {language === 'en' ? 'Trial Available' : '可試用'}
            </BenefitBadge>
          )}
          {plan.cancellable && (
            <BenefitBadge $type="cancel">
              🔄 {language === 'en' ? 'Cancel Anytime' : '隨時取消'}
            </BenefitBadge>
          )}
          {plan.giftable && (
            <BenefitBadge $type="gift">
              🎁 {language === 'en' ? 'Gift Option' : '禮品選項'}
            </BenefitBadge>
          )}
        </BenefitsBadges>

        <ActionSection>
          <ActionButton $variant="primary">
            {plan.trialAvailable 
              ? (language === 'en' ? 'Start Free Trial' : '開始免費試用')
              : (language === 'en' ? 'Subscribe Now' : '立即訂閱')
            }
          </ActionButton>
          <ActionButton $variant="secondary">
            {language === 'en' ? 'Learn More' : '了解更多'}
          </ActionButton>
          {plan.trialAvailable && (
            <TrialText>
              {language === 'en' 
                ? 'No commitment • Cancel anytime • Free shipping'
                : '無承諾 • 隨時取消 • 免運費'
              }
            </TrialText>
          )}
        </ActionSection>
      </CardContent>
    </CardContainer>
  );
};