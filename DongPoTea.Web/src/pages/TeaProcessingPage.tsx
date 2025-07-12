import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing[12]} ${theme.spacing[4]};
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[16]};
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.light};
  margin-bottom: ${theme.spacing[6]};
`;

const PageIntro = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[700]};
  line-height: ${theme.typography.lineHeight.relaxed};
  max-width: 800px;
  margin: 0 auto;
`;

const ProcessSection = styled.section`
  margin-bottom: ${theme.spacing[20]};
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing[16]};
  align-items: center;
  margin-bottom: ${theme.spacing[16]};

  &:nth-child(even) {
    direction: rtl;
    
    > * {
      direction: ltr;
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
    
    &:nth-child(even) {
      direction: ltr;
    }
  }
`;

const ProcessImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
`;

const ProcessContent = styled.div``;

const ProcessTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[6]};
`;

const ProcessDescription = styled.p`
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing[4]};
`;

const ProcessHighlight = styled.div`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[6]};
  margin-top: ${theme.spacing[6]};
  border-radius: 8px;
  border-left: 4px solid ${theme.colors.primary};
`;

const HighlightTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[3]};
`;

const HighlightText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
`;

export const TeaProcessingPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);

  const processes = [
    {
      title: language === 'en' ? 'Plucking' : '採摘',
      description: language === 'en'
        ? 'The journey begins with the careful selection and plucking of tea leaves. Only the youngest and most tender leaves are chosen, typically the top two leaves and a bud. This delicate process is often done by hand to ensure the highest quality.'
        : '旅程始於精心挑選和採摘茶葉。只選擇最嫩的葉子，通常是頂部的兩片葉子和一個芽。這個精細的過程通常由手工完成，以確保最高品質。',
      highlight: {
        title: language === 'en' ? 'Best Time' : '最佳時機',
        text: language === 'en'
          ? 'Early morning harvest when dew has evaporated but before the sun is too strong'
          : '清晨露水蒸發後但太陽還不太強烈時採收',
      },
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&w=800',
    },
    {
      title: language === 'en' ? 'Withering' : '萎凋',
      description: language === 'en'
        ? 'Fresh tea leaves are spread out and allowed to wither naturally. This process reduces moisture content and makes the leaves more pliable for the next steps. The duration and conditions of withering significantly affect the tea\'s final character.'
        : '新鮮茶葉被攤開並自然萎凋。這個過程減少水分含量，使葉子更柔韌，為下一步做準備。萎凋的時間和條件對茶的最終特性有重大影響。',
      highlight: {
        title: language === 'en' ? 'Duration' : '持續時間',
        text: language === 'en'
          ? '12-20 hours depending on tea type and weather conditions'
          : '12-20小時，取決於茶葉類型和天氣條件',
      },
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&w=800',
    },
    {
      title: language === 'en' ? 'Fixation' : '殺青',
      description: language === 'en'
        ? 'Also known as "kill-green," this crucial step halts oxidation by applying heat. Different methods like pan-firing, steaming, or baking are used depending on the desired tea type. This process locks in the tea\'s color and fresh characteristics.'
        : '也稱為「殺青」，這個關鍵步驟通過加熱來停止氧化。根據所需的茶葉類型，使用不同的方法，如炒制、蒸制或烘烤。這個過程鎖定了茶的顏色和新鮮特性。',
      highlight: {
        title: language === 'en' ? 'Temperature' : '溫度',
        text: language === 'en'
          ? '260-280°C for pan-firing, precise control is essential'
          : '炒制溫度260-280°C，精確控制至關重要',
      },
      image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&w=800',
    },
    {
      title: language === 'en' ? 'Rolling' : '揉捻',
      description: language === 'en'
        ? 'The leaves are rolled to break down cell walls and release essential oils. This shaping process also determines the tea\'s appearance - from tightly rolled pellets to long twisted leaves. The pressure and duration affect flavor intensity.'
        : '茶葉被揉捻以破壞細胞壁並釋放精油。這個塑形過程也決定了茶的外觀——從緊密捲成的顆粒到長扭曲的葉子。壓力和持續時間影響風味強度。',
      highlight: {
        title: language === 'en' ? 'Technique' : '技術',
        text: language === 'en'
          ? 'Traditional hand rolling vs. modern machine rolling'
          : '傳統手工揉捻與現代機器揉捻',
      },
      image: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&w=800',
    },
    {
      title: language === 'en' ? 'Drying & Roasting' : '乾燥與烘焙',
      description: language === 'en'
        ? 'The final step reduces moisture to about 3-5% for storage stability. Additional roasting may be applied to develop deeper flavors and aromas. Master tea makers carefully control temperature and timing to achieve the desired profile.'
        : '最後一步將水分降至約3-5%以確保儲存穩定性。可能會進行額外的烘焙以發展更深層的風味和香氣。製茶大師仔細控制溫度和時間以達到所需的風味。',
      highlight: {
        title: language === 'en' ? 'Final Touch' : '最後修飾',
        text: language === 'en'
          ? 'Light, medium, or dark roast creates distinct flavor profiles'
          : '輕度、中度或深度烘焙創造出獨特的風味特徵',
      },
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=800',
    },
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>
          {language === 'en' ? 'The Art of Tea Processing' : '茶葉加工的藝術'}
        </PageTitle>
        <PageIntro>
          {language === 'en'
            ? 'From leaf to cup, every step in tea processing is a delicate balance of tradition and precision. Our master tea makers transform fresh leaves into the aromatic teas you enjoy, preserving centuries of Taiwanese tea-making wisdom.'
            : '從葉子到杯子，茶葉加工的每一步都是傳統與精確的微妙平衡。我們的製茶大師將新鮮的葉子轉化為您享用的芳香茶葉，保存了幾個世紀的台灣製茶智慧。'}
        </PageIntro>
      </PageHeader>

      <ProcessSection>
        {processes.map((process, index) => (
          <ProcessGrid key={index}>
            <ProcessImage src={process.image} alt={process.title} loading="lazy" />
            <ProcessContent>
              <ProcessTitle>{process.title}</ProcessTitle>
              <ProcessDescription>{process.description}</ProcessDescription>
              <ProcessHighlight>
                <HighlightTitle>{process.highlight.title}</HighlightTitle>
                <HighlightText>{process.highlight.text}</HighlightText>
              </ProcessHighlight>
            </ProcessContent>
          </ProcessGrid>
        ))}
      </ProcessSection>
    </PageContainer>
  );
};