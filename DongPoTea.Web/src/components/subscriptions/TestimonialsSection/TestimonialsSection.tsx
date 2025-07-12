import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { SubscriptionTestimonial } from '../../../data/subscriptions';

const Section = styled.section`
  margin-bottom: ${theme.spacing[16]};
  background: linear-gradient(
    135deg,
    rgba(168, 134, 103, 0.05) 0%,
    rgba(140, 106, 74, 0.05) 100%
  );
  border-radius: 16px;
  padding: ${theme.spacing[12]} ${theme.spacing[8]};
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
`;

const TestimonialCard = styled.div`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[8]};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.gray[200]};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const TestimonialHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[4]};
  margin-bottom: ${theme.spacing[4]};
`;

const CustomerImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${theme.colors.gray[200]};
`;

const CustomerInfo = styled.div`
  flex: 1;
`;

const CustomerName = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[1]};
`;

const CustomerLocation = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[1]};
`;

const SubscriptionInfo = styled.p`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const RatingContainer = styled.div`
  display: flex;
  gap: ${theme.spacing[1]};
  margin-bottom: ${theme.spacing[4]};
`;

const Star = styled.span<{ $filled: boolean }>`
  color: ${({ $filled }) => $filled ? theme.colors.warning : theme.colors.gray[300]};
  font-size: ${theme.typography.fontSize.base};
`;

const TestimonialQuote = styled.blockquote`
  font-style: italic;
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  margin: 0;
  position: relative;

  &::before {
    content: '"';
    font-size: 3rem;
    color: ${theme.colors.primary};
    position: absolute;
    top: -10px;
    left: -20px;
    line-height: 1;
  }

  &::after {
    content: '"';
    font-size: 3rem;
    color: ${theme.colors.primary};
    position: absolute;
    bottom: -30px;
    right: -10px;
    line-height: 1;
  }
`;

const SubscriptionLength = styled.div`
  margin-top: ${theme.spacing[4]};
  padding-top: ${theme.spacing[4]};
  border-top: 1px solid ${theme.colors.gray[200]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  text-align: center;
`;

interface TestimonialsSectionProps {
  testimonials: SubscriptionTestimonial[];
  language: 'en' | 'zh-TW';
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials, language }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} $filled={index < rating}>
        ★
      </Star>
    ));
  };

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          {language === 'en' ? 'What Our Subscribers Say' : '訂閱者怎麼說'}
        </SectionTitle>
        <SectionDescription>
          {language === 'en' 
            ? 'Real stories from tea lovers who have discovered their perfect cup through our subscription service.'
            : '來自通過我們的訂閱服務發現完美茶杯的茶愛好者的真實故事。'
          }
        </SectionDescription>
      </SectionHeader>

      <TestimonialsGrid>
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id}>
            <TestimonialHeader>
              <CustomerImage 
                src={testimonial.image} 
                alt={language === 'en' ? testimonial.name : testimonial.nameChinese}
              />
              <CustomerInfo>
                <CustomerName>
                  {language === 'en' ? testimonial.name : testimonial.nameChinese}
                </CustomerName>
                <CustomerLocation>
                  {language === 'en' ? testimonial.location : testimonial.locationChinese}
                </CustomerLocation>
                <SubscriptionInfo>
                  {testimonial.plan} {language === 'en' ? 'Subscriber' : '訂閱者'}
                </SubscriptionInfo>
              </CustomerInfo>
            </TestimonialHeader>

            <RatingContainer>
              {renderStars(testimonial.rating)}
            </RatingContainer>

            <TestimonialQuote>
              {language === 'en' ? testimonial.quote : testimonial.quoteChinese}
            </TestimonialQuote>

            <SubscriptionLength>
              {language === 'en' ? 'Subscriber for' : '訂閱'} {' '}
              {language === 'en' ? testimonial.subscriptionLength : testimonial.subscriptionLengthChinese}
            </SubscriptionLength>
          </TestimonialCard>
        ))}
      </TestimonialsGrid>
    </Section>
  );
};