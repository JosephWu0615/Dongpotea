import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { learningSections } from '../data/learning';
import { LearningCard } from '../components/learning/LearningCard/LearningCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
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
  max-width: 600px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
`;

const IntroSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.gray[50]} 0%, ${theme.colors.white} 100%);
  border-radius: 12px;
  padding: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
  text-align: center;
`;

const IntroTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const IntroText = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 800px;
  margin: 0 auto;
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[8]};
`;

const FeatureItem = styled.div`
  text-align: center;
  padding: ${theme.spacing[4]};
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: ${theme.spacing[3]};
`;

const FeatureTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const FeatureDescription = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const LearningPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);

  const features = [
    {
      icon: '📚',
      title: language === 'en' ? 'Comprehensive Guides' : '全面指南',
      titleEn: 'Comprehensive Guides',
      titleZh: '全面指南',
      description: language === 'en' 
        ? 'From basic tea knowledge to advanced brewing techniques'
        : '從基本茶葉知識到高級沖泡技巧',
      descriptionEn: 'From basic tea knowledge to advanced brewing techniques',
      descriptionZh: '從基本茶葉知識到高級沖泡技巧'
    },
    {
      icon: '🔬',
      title: language === 'en' ? 'Scientific Approach' : '科學方法',
      titleEn: 'Scientific Approach',
      titleZh: '科學方法',
      description: language === 'en' 
        ? 'Evidence-based information about tea processing and benefits'
        : '基於證據的茶葉加工和益處信息',
      descriptionEn: 'Evidence-based information about tea processing and benefits',
      descriptionZh: '基於證據的茶葉加工和益處信息'
    },
    {
      icon: '🌱',
      title: language === 'en' ? 'Traditional Wisdom' : '傳統智慧',
      titleEn: 'Traditional Wisdom',
      titleZh: '傳統智慧',
      description: language === 'en' 
        ? 'Ancient tea culture knowledge passed down through generations'
        : '世代相傳的古老茶文化知識',
      descriptionEn: 'Ancient tea culture knowledge passed down through generations',
      descriptionZh: '世代相傳的古老茶文化知識'
    },
    {
      icon: '🎯',
      title: language === 'en' ? 'Practical Skills' : '實用技能',
      titleEn: 'Practical Skills',
      titleZh: '實用技能',
      description: language === 'en' 
        ? 'Step-by-step instructions you can apply immediately'
        : '可立即應用的分步說明',
      descriptionEn: 'Step-by-step instructions you can apply immediately',
      descriptionZh: '可立即應用的分步說明'
    }
  ];

  return (
    <Container>
      <Header>
        <HeaderTitle>
          {language === 'en' ? 'Tea Learning Center' : '茶葉學習中心'}
        </HeaderTitle>
        <HeaderSubtitle>
          {language === 'en' 
            ? 'Master the art and science of tea with our comprehensive educational resources'
            : '通過我們全面的教育資源掌握茶的藝術和科學'
          }
        </HeaderSubtitle>
      </Header>

      <IntroSection>
        <IntroTitle>
          {language === 'en' ? 'Why Learn About Tea?' : '為什麼要學習茶？'}
        </IntroTitle>
        <IntroText>
          {language === 'en' 
            ? 'Tea is more than just a beverage—it\'s a window into centuries of culture, tradition, and craftsmanship. Our learning center provides you with the knowledge to fully appreciate and enjoy the world of fine tea, from understanding the different varieties to mastering proper brewing techniques.'
            : '茶不僅僅是一種飲料——它是了解數百年文化、傳統和工藝的窗口。我們的學習中心為您提供充分欣賞和享受精品茶世界的知識，從了解不同品種到掌握正確的沖泡技巧。'
          }
        </IntroText>
        
        <FeaturesList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>
                {language === 'en' ? feature.titleEn : feature.titleZh}
              </FeatureTitle>
              <FeatureDescription>
                {language === 'en' ? feature.descriptionEn : feature.descriptionZh}
              </FeatureDescription>
            </FeatureItem>
          ))}
        </FeaturesList>
      </IntroSection>

      <Grid>
        {learningSections.map((section) => (
          <LearningCard
            key={section.id}
            section={section}
            language={language}
          />
        ))}
      </Grid>
    </Container>
  );
};