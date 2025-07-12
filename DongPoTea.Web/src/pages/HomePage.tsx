import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { CategoryCard } from '../components/home/CategoryCard/CategoryCard';
import { ProductGrid } from '../components/products/ProductGrid/ProductGrid';
import { theme } from '../assets/styles/theme';
import { products, productImages } from '../data/products';

// Category Cards Section
const CategorySection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[20]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[4]};
  }
`;

// Why Taiwanese Tea Section
const WhySection = styled.section`
  padding: ${theme.spacing[20]} 0;
  background-color: ${theme.colors.gray[50]};
`;

const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[8]};
  margin-top: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }
`;

const WhyCard = styled.div`
  text-align: center;
`;

const WhyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: ${theme.spacing[6]};
`;

const WhyTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[4]};
`;

const WhyDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

// Tea Culture Section
const CultureSection = styled.section`
  padding: ${theme.spacing[20]} 0;
  text-align: center;
`;

const CultureContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CultureText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing[6]};
`;

// Three Key Points Section
const KeyPointsSection = styled.section`
  padding: ${theme.spacing[20]} 0;
  background-color: ${theme.colors.gray[50]};
`;

const KeyPointsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${theme.spacing[6]};
  margin-top: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[4]};
  }
`;

const KeyPointCard = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;
`;

const KeyPointImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const KeyPointOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing[6]};
  color: ${theme.colors.white};
  text-align: center;
`;

const KeyPointTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[3]};
`;

const KeyPointDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  opacity: 0.9;
`;

// Products Section
const ProductsSection = styled.section`
  padding: ${theme.spacing[20]} 0;
`;

// Common Section Title
const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.light};
  text-align: center;
  margin-bottom: ${theme.spacing[4]};
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing[12]};
`;

export const HomePage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);

  const categories = [
    {
      title: 'Tea Bags',
      titleChinese: '茶包',
      image: productImages.teaBagsCategory,
      link: '/shop/teabag',
    },
    {
      title: 'Loose Tea',
      titleChinese: '散茶',
      image: productImages.looseTeaCategory,
      link: '/shop/loose-tea',
    },
  ];

  const whyTaiwanese = [
    {
      title: language === 'en' ? 'Origin of Premium Tea' : '優質茶葉的起源',
      description: language === 'en'
        ? 'Since 1865, Taiwan is known for clean earth, hills, mountains, and warm moist climate'
        : '自1865年以來，台灣以其潔淨的土地、丘陵、山脈和溫暖潮濕的氣候而聞名',
      image: productImages.taiwanLandscape,
    },
    {
      title: language === 'en' ? 'Unique Tea Tree Species' : '獨特的茶樹品種',
      description: language === 'en'
        ? 'Over 20 Taiwan-originated tea tree species'
        : '超過20種台灣原生茶樹品種',
      image: productImages.teaVarieties,
    },
    {
      title: language === 'en' ? 'Top-tier Craftsmanship' : '頂級工藝',
      description: language === 'en'
        ? 'Sophisticated tea processing creates variety of tastes'
        : '精緻的茶葉加工創造了多樣的口味',
      image: productImages.teaCraftsmanship,
    },
  ];

  const keyPoints = [
    {
      title: language === 'en' ? 'Aromas' : '香氣',
      description: language === 'en'
        ? 'Complexity of floral, fruity, honey fragrances'
        : '花香、果香、蜜香的複雜性',
      image: productImages.aromasBanner,
    },
    {
      title: language === 'en' ? 'Texture' : '質地',
      description: language === 'en'
        ? 'Transition from refreshing to smooth and silky'
        : '從清爽過渡到順滑絲滑',
      image: productImages.textureBanner,
    },
    {
      title: language === 'en' ? 'Aftertaste' : '餘韻',
      description: language === 'en'
        ? 'Long-lasting sweet afterglow with lingering tea aromas'
        : '持久的甜美餘韻與揮之不去的茶香',
      image: productImages.aftertasteBanner,
    },
  ];

  // Use centralized products data

  return (
    <>
      {/* Category Cards */}
      <CategorySection>
        {categories.map((category) => (
          <CategoryCard
            key={category.link}
            title={category.title}
            titleChinese={category.titleChinese}
            image={category.image}
            link={category.link}
            language={language}
          />
        ))}
      </CategorySection>

      {/* Why Taiwanese Tea */}
      <WhySection>
        <div className="container">
          <SectionTitle>
            {language === 'en' ? 'Why Taiwanese Tea?' : '為什麼選擇台灣茶？'}
          </SectionTitle>
          <WhyGrid>
            {whyTaiwanese.map((item, index) => (
              <WhyCard key={index}>
                <WhyImage src={item.image} alt={item.title} loading="lazy" />
                <WhyTitle>{item.title}</WhyTitle>
                <WhyDescription>{item.description}</WhyDescription>
              </WhyCard>
            ))}
          </WhyGrid>
        </div>
      </WhySection>

      {/* Tea Culture */}
      <CultureSection>
        <div className="container">
          <CultureContent>
            <SectionTitle>
              {language === 'en' ? 'Tea Culture' : '茶文化'}
            </SectionTitle>
            <CultureText>
              {language === 'en'
                ? 'For over 1000 years, tea has been deeply rooted in Asian lifestyle. The art of tea processing, with careful control of fixation, fermentation, and roasting, creates the diverse flavors we cherish today.'
                : '一千多年來，茶已深深紮根於亞洲人的生活方式中。茶葉加工的藝術，通過仔細控制殺青、發酵和烘焙，創造了我們今天所珍視的多樣化風味。'}
            </CultureText>
            <CultureText>
              {language === 'en'
                ? 'Our brand is inspired by Su Dong Po, an 11th-century Chinese artist and poet who celebrated the beauty and philosophy of tea. Like his poetry, each cup of tea tells a story of tradition, craftsmanship, and natural harmony.'
                : '我們的品牌靈感來自蘇東坡，一位11世紀的中國藝術家和詩人，他頌揚茶的美麗和哲學。就像他的詩歌一樣，每一杯茶都訴說著傳統、工藝和自然和諧的故事。'}
            </CultureText>
          </CultureContent>
        </div>
      </CultureSection>

      {/* Three Key Points */}
      <KeyPointsSection>
        <div className="container">
          <SectionTitle>
            {language === 'en' ? 'Three Key Points of Tea Tasting' : '品茶三要點'}
          </SectionTitle>
          <KeyPointsGrid>
            {keyPoints.map((point, index) => (
              <KeyPointCard key={index}>
                <KeyPointImage src={point.image} alt={point.title} loading="lazy" />
                <KeyPointOverlay>
                  <KeyPointTitle>{point.title}</KeyPointTitle>
                  <KeyPointDescription>{point.description}</KeyPointDescription>
                </KeyPointOverlay>
              </KeyPointCard>
            ))}
          </KeyPointsGrid>
        </div>
      </KeyPointsSection>

      {/* Products */}
      <ProductsSection>
        <div className="container">
          <SectionTitle>
            {language === 'en' ? 'Our Products' : '我們的產品'}
          </SectionTitle>
          <SectionSubtitle>
            {language === 'en' 
              ? 'Discover our carefully curated selection of premium Taiwanese teas'
              : '探索我們精心挑選的優質台灣茶'}
          </SectionSubtitle>
          <ProductGrid products={products} />
        </div>
      </ProductsSection>
    </>
  );
};