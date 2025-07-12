import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { productImages } from '../data/products';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: ${theme.spacing[20]} 0;
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  font-weight: ${theme.typography.fontWeight.light};
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: ${theme.spacing[20]};
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  margin: 0 auto ${theme.spacing[8]};
  display: block;
`;

const HeroText = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  max-width: 600px;
  margin: 0 auto;
`;

const StorySection = styled.section`
  margin-bottom: ${theme.spacing[20]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  text-align: center;
  margin-bottom: ${theme.spacing[8]};
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[12]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }
`;

const StoryImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const StoryText = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};

  p {
    margin-bottom: ${theme.spacing[4]};
  }
`;

const ValuesSection = styled.section`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[20]} 0;
  margin: ${theme.spacing[20]} -50vw 0;
  left: 50%;
  position: relative;
  right: 50%;
  width: 100vw;
`;

const ValuesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${theme.spacing[6]};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }
`;

const ValueCard = styled.div`
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.white};
`;

const ValueTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[3]};
`;

const ValueDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const AboutPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);

  const values = [
    {
      icon: '🌱',
      title: language === 'en' ? 'Sustainability' : '可持續性',
      description: language === 'en'
        ? 'We work directly with tea farmers to ensure fair trade and sustainable farming practices that protect our environment.'
        : '我們直接與茶農合作，確保公平貿易和可持續的農業實踐，保護我們的環境。'
    },
    {
      icon: '🎯',
      title: language === 'en' ? 'Quality' : '品質',
      description: language === 'en'
        ? 'Every tea is carefully selected, processed, and tested to meet our high standards for flavor, aroma, and purity.'
        : '每一種茶都經過精心挑選、加工和測試，以符合我們對風味、香氣和純度的高標準。'
    },
    {
      icon: '🤝',
      title: language === 'en' ? 'Community' : '社區',
      description: language === 'en'
        ? 'We support local tea farming communities and share the rich cultural heritage of Taiwanese tea with the world.'
        : '我們支持當地的茶農社區，並與世界分享台灣茶豐富的文化遺產。'
    }
  ];

  return (
    <PageContainer>
      <div className="container">
        <PageTitle>
          {language === 'en' ? 'About Dong Po Tea' : '關於東坡茶'}
        </PageTitle>

        <HeroSection>
          <HeroImage 
            src={productImages.taiwanLandscape} 
            alt={language === 'en' ? 'Taiwan tea landscape' : '台灣茶葉景觀'} 
          />
          <HeroText>
            {language === 'en'
              ? 'Founded with a passion for sharing the finest Taiwanese teas, Dong Po Tea brings centuries of tradition and craftsmanship to tea lovers worldwide.'
              : '東坡茶以分享最優質台灣茶的熱情而創立，將數百年的傳統和工藝帶給全世界的茶愛好者。'}
          </HeroText>
        </HeroSection>

        <StorySection>
          <SectionTitle>
            {language === 'en' ? 'Our Story' : '我們的故事'}
          </SectionTitle>
          <StoryGrid>
            <StoryImage 
              src={productImages.teaCraftsmanship} 
              alt={language === 'en' ? 'Tea craftsmanship' : '茶藝工藝'} 
            />
            <StoryText>
              <p>
                {language === 'en'
                  ? 'Inspired by Su Dong Po, the renowned 11th-century Chinese poet and tea enthusiast, our brand celebrates the artistry and philosophy of tea. Su Dong Po believed that tea was not just a beverage, but a bridge to mindfulness, creativity, and connection with nature.'
                  : '受到著名的11世紀中國詩人和茶愛好者蘇東坡的啟發，我們的品牌頌揚茶的藝術性和哲學。蘇東坡認為茶不僅僅是一種飲品，更是通往正念、創造力和與自然連接的橋樑。'}
              </p>
              <p>
                {language === 'en'
                  ? 'Taiwan, with its unique geography and climate, has become one of the world\'s premier tea-producing regions. Since 1865, when tea cultivation first began on the island, Taiwanese farmers have perfected their craft, creating distinctive varieties that showcase the terroir of this beautiful island.'
                  : '台灣以其獨特的地理和氣候，已成為世界主要的茶葉產區之一。自1865年島上開始種植茶葉以來，台灣農民不斷完善他們的工藝，創造出展現這個美麗島嶼風土的獨特品種。'}
              </p>
            </StoryText>
          </StoryGrid>
        </StorySection>
      </div>

      <ValuesSection>
        <ValuesContainer>
          <SectionTitle style={{ color: theme.colors.gray[800] }}>
            {language === 'en' ? 'Our Values' : '我們的價值觀'}
          </SectionTitle>
          <ValuesGrid>
            {values.map((value, index) => (
              <ValueCard key={index}>
                <ValueIcon>{value.icon}</ValueIcon>
                <ValueTitle>{value.title}</ValueTitle>
                <ValueDescription>{value.description}</ValueDescription>
              </ValueCard>
            ))}
          </ValuesGrid>
        </ValuesContainer>
      </ValuesSection>

      <div className="container">
        <StorySection>
          <SectionTitle>
            {language === 'en' ? 'Tea Processing Excellence' : '茶葉加工工藝'}
          </SectionTitle>
          <StoryGrid>
            <StoryText>
              <p>
                {language === 'en'
                  ? 'Our tea masters employ traditional techniques passed down through generations, combined with modern quality control methods. From the careful timing of harvest to the precise control of fermentation and roasting, every step is executed with meticulous attention to detail.'
                  : '我們的茶師採用世代相傳的傳統技術，結合現代品質控制方法。從精心掌握採收時機到精確控制發酵和烘焙，每一個步驟都以一絲不苟的態度執行。'}
              </p>
              <p>
                {language === 'en'
                  ? 'This dedication to excellence has earned Taiwanese teas recognition in international competitions and among discerning tea connoisseurs worldwide. We are proud to share these exceptional teas with you.'
                  : '這種對卓越的執著使台灣茶在國際比賽中獲得認可，並受到全世界挑剔茶鑑賞家的讚譽。我們很自豪能與您分享這些卓越的茶葉。'}
              </p>
            </StoryText>
            <StoryImage 
              src={productImages.teaVarieties} 
              alt={language === 'en' ? 'Tea varieties' : '茶葉品種'} 
            />
          </StoryGrid>
        </StorySection>
      </div>
    </PageContainer>
  );
};