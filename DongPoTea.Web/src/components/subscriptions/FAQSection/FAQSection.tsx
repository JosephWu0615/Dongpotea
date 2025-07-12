import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';

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

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 8px;
  margin-bottom: ${theme.spacing[3]};
  overflow: hidden;
`;

const FAQQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  padding: ${theme.spacing[5]} ${theme.spacing[6]};
  text-align: left;
  background-color: ${({ $isOpen }) => $isOpen ? theme.colors.gray[50] : theme.colors.white};
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing[4]};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;

const QuestionText = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin: 0;
  flex: 1;
`;

const ExpandIcon = styled.span<{ $isOpen: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.primary};
  font-weight: bold;
  transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};
  transition: transform ${theme.animation.duration.fast} ${theme.animation.easing.out};
`;

const FAQAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${({ $isOpen }) => $isOpen ? '300px' : '0'};
  overflow: hidden;
  transition: max-height ${theme.animation.duration.normal} ${theme.animation.easing.out};
`;

const AnswerContent = styled.div`
  padding: 0 ${theme.spacing[6]} ${theme.spacing[5]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const ContactCTA = styled.div`
  text-align: center;
  margin-top: ${theme.spacing[10]};
  padding: ${theme.spacing[8]};
  background-color: ${theme.colors.gray[50]};
  border-radius: 12px;
`;

const CTATitle = styled.h3`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[3]};
`;

const CTAText = styled.p`
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[4]};
`;

const CTAButton = styled.button`
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  border-radius: 6px;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

interface FAQSectionProps {
  language: 'en' | 'zh-TW';
}

export const FAQSection: React.FC<FAQSectionProps> = ({ language }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqs = [
    {
      question: language === 'en' ? 'How does the subscription work?' : '訂閱如何運作？',
      answer: language === 'en' 
        ? 'Choose your preferred plan and frequency. We\'ll curate and ship premium Taiwanese teas to your door based on your selected schedule. You can modify, pause, or cancel your subscription anytime through your account dashboard.'
        : '選擇您喜歡的計劃和頻率。我們將根據您選擇的時間表策劃並將優質台灣茶運送到您家門口。您可以隨時通過帳戶儀表板修改、暫停或取消訂閱。'
    },
    {
      question: language === 'en' ? 'Can I customize my tea selections?' : '我可以自定義茶葉選擇嗎？',
      answer: language === 'en' 
        ? 'Yes! Most plans offer customization options. You can set preferences for tea types, caffeine levels, and flavor profiles. Our tea experts will curate selections based on your preferences while still introducing you to new discoveries.'
        : '是的！大多數計劃都提供自定義選項。您可以設置茶類型、咖啡因水平和風味特徵的偏好。我們的茶專家將根據您的偏好策劃選擇，同時仍然為您介紹新的發現。'
    },
    {
      question: language === 'en' ? 'What if I don\'t like a tea I receive?' : '如果我不喜歡收到的茶怎麼辦？',
      answer: language === 'en' 
        ? 'We offer a satisfaction guarantee! If you\'re not happy with any tea in your shipment, contact us within 30 days and we\'ll send a replacement or credit your account. We also use your feedback to improve future selections.'
        : '我們提供滿意度保證！如果您對貨品中的任何茶葉不滿意，請在30天內聯繫我們，我們將發送替換品或為您的帳戶充值。我們還會使用您的反饋來改善未來的選擇。'
    },
    {
      question: language === 'en' ? 'How much tea will I receive?' : '我將收到多少茶？',
      answer: language === 'en' 
        ? 'Quantities vary by plan. The Tea Explorer includes 150g total (3 varieties × 50g), Tea Connoisseur includes 200g (4 × 50g), Seasonal Harvest includes 300g (5 × 60g), and Wellness Journey includes 180g (3 × 60g).'
        : '數量因計劃而異。茶葉探索者包含總計150克（3種品種×50克），茶葉鑑賞家包含200克（4×50克），季節收成包含300克（5×60克），健康之旅包含180克（3×60克）。'
    },
    {
      question: language === 'en' ? 'Do you ship internationally?' : '您們國際配送嗎？',
      answer: language === 'en' 
        ? 'Yes! We ship worldwide with free shipping included in all subscription plans. Delivery times vary by location: 3-5 days within Taiwan, 7-10 days to Asia, 10-14 days to North America and Europe, and 14-21 days to other regions.'
        : '是的！我們全球配送，所有訂閱計劃都包含免運費。配送時間因地點而異：台灣內3-5天，亞洲7-10天，北美和歐洲10-14天，其他地區14-21天。'
    },
    {
      question: language === 'en' ? 'Can I give a subscription as a gift?' : '我可以將訂閱作為禮物嗎？',
      answer: language === 'en' 
        ? 'Absolutely! All our plans can be purchased as gifts. You can choose the duration (3, 6, or 12 months), include a personalized message, and we\'ll send a beautiful gift notification to the recipient. The gift recipient can modify preferences as needed.'
        : '當然可以！我們所有的計劃都可以作為禮物購買。您可以選擇持續時間（3、6或12個月），包含個人化消息，我們將向收件人發送美麗的禮品通知。禮品收件人可以根據需要修改偏好。'
    },
    {
      question: language === 'en' ? 'How do I cancel or pause my subscription?' : '如何取消或暫停我的訂閱？',
      answer: language === 'en' 
        ? 'You can easily manage your subscription through your online account. Cancel anytime with no fees or penalties. You can also pause your subscription for up to 3 months if you\'re traveling or need a break. Changes take effect with your next scheduled shipment.'
        : '您可以通過線上帳戶輕鬆管理您的訂閱。隨時取消，無費用或罰金。如果您正在旅行或需要休息，您也可以暫停訂閱長達3個月。更改將在您的下一次預定貨品時生效。'
    }
  ];

  return (
    <Section>
      <SectionHeader>
        <SectionTitle>
          {language === 'en' ? 'Frequently Asked Questions' : '常見問題'}
        </SectionTitle>
        <SectionDescription>
          {language === 'en' 
            ? 'Everything you need to know about our tea subscription service.'
            : '關於我們茶葉訂閱服務您需要知道的一切。'
          }
        </SectionDescription>
      </SectionHeader>

      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion 
              $isOpen={openItems.has(index)}
              onClick={() => toggleItem(index)}
            >
              <QuestionText>{faq.question}</QuestionText>
              <ExpandIcon $isOpen={openItems.has(index)}>+</ExpandIcon>
            </FAQQuestion>
            <FAQAnswer $isOpen={openItems.has(index)}>
              <AnswerContent>{faq.answer}</AnswerContent>
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQContainer>

      <ContactCTA>
        <CTATitle>
          {language === 'en' ? 'Still have questions?' : '還有問題嗎？'}
        </CTATitle>
        <CTAText>
          {language === 'en' 
            ? 'Our tea experts are here to help you find the perfect subscription.'
            : '我們的茶專家在這裡幫助您找到完美的訂閱。'
          }
        </CTAText>
        <CTAButton>
          {language === 'en' ? 'Contact Us' : '聯繫我們'}
        </CTAButton>
      </ContactCTA>
    </Section>
  );
};