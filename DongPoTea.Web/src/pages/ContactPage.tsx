import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';

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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[16]};
  margin-bottom: ${theme.spacing[20]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[6]};
`;

const InfoSection = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const InfoLabel = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[800]};
`;

const InfoText = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[2]};
`;

const ContactForm = styled.form`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[8]};
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing[6]};
`;

const Label = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[2]};
  color: ${theme.colors.gray[700]};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  font-size: ${theme.typography.fontSize.base};
  transition: border-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[800]};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const BusinessHours = styled.div`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[8]};
  border-radius: 8px;
  text-align: center;
`;

const HoursTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[4]};
`;

const HoursText = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[2]};
`;

const SuccessMessage = styled.div`
  background-color: ${theme.colors.success || '#10B981'};
  color: white;
  padding: ${theme.spacing[4]};
  border-radius: 4px;
  margin-bottom: ${theme.spacing[6]};
  text-align: center;
`;

export const ContactPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowSuccess(true);
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <PageContainer>
      <div className="container">
        <PageTitle>
          {language === 'en' ? 'Contact Us' : '聯絡我們'}
        </PageTitle>

        <ContactGrid>
          <ContactInfo>
            <SectionTitle>
              {language === 'en' ? 'Get in Touch' : '與我們聯繫'}
            </SectionTitle>
            
            <InfoSection>
              <InfoLabel>
                {language === 'en' ? 'Address' : '地址'}
              </InfoLabel>
              <InfoText>
                {language === 'en'
                  ? '123 Tea Garden Street\nNantou County, Taiwan 54001'
                  : '台灣南投縣茶園街123號\n54001'}
              </InfoText>
            </InfoSection>

            <InfoSection>
              <InfoLabel>
                {language === 'en' ? 'Phone' : '電話'}
              </InfoLabel>
              <InfoText>+886 49 123 4567</InfoText>
            </InfoSection>

            <InfoSection>
              <InfoLabel>
                {language === 'en' ? 'Email' : '電子郵件'}
              </InfoLabel>
              <InfoText>info@dongpotea.com</InfoText>
              <InfoText>orders@dongpotea.com</InfoText>
            </InfoSection>

            <InfoSection>
              <InfoLabel>
                {language === 'en' ? 'Customer Service' : '客戶服務'}
              </InfoLabel>
              <InfoText>
                {language === 'en'
                  ? 'Our customer service team is available to help you with any questions about our teas, brewing instructions, or orders.'
                  : '我們的客戶服務團隊隨時為您解答有關我們的茶葉、沖泡說明或訂單的任何問題。'}
              </InfoText>
            </InfoSection>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <SectionTitle>
              {language === 'en' ? 'Send us a Message' : '發送訊息'}
            </SectionTitle>

            {showSuccess && (
              <SuccessMessage>
                {language === 'en'
                  ? 'Thank you! Your message has been sent successfully.'
                  : '謝謝！您的訊息已成功發送。'}
              </SuccessMessage>
            )}

            <FormGroup>
              <Label htmlFor="name">
                {language === 'en' ? 'Name *' : '姓名 *'}
              </Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={language === 'en' ? 'Your full name' : '您的全名'}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">
                {language === 'en' ? 'Email *' : '電子郵件 *'}
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={language === 'en' ? 'your.email@example.com' : 'your.email@example.com'}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">
                {language === 'en' ? 'Subject' : '主題'}
              </Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder={language === 'en' ? 'What is this regarding?' : '這是關於什麼的？'}
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">
                {language === 'en' ? 'Message *' : '訊息 *'}
              </Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder={language === 'en' 
                  ? 'Please tell us how we can help you...'
                  : '請告訴我們如何為您提供幫助...'}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? (language === 'en' ? 'Sending...' : '發送中...')
                : (language === 'en' ? 'Send Message' : '發送訊息')}
            </SubmitButton>
          </ContactForm>
        </ContactGrid>

        <BusinessHours>
          <HoursTitle>
            {language === 'en' ? 'Business Hours' : '營業時間'}
          </HoursTitle>
          <HoursText>
            <strong>
              {language === 'en' ? 'Monday - Friday:' : '週一至週五：'}
            </strong>{' '}
            9:00 AM - 6:00 PM (Taiwan Time)
          </HoursText>
          <HoursText>
            <strong>
              {language === 'en' ? 'Saturday:' : '週六：'}
            </strong>{' '}
            10:00 AM - 4:00 PM (Taiwan Time)
          </HoursText>
          <HoursText>
            <strong>
              {language === 'en' ? 'Sunday:' : '週日：'}
            </strong>{' '}
            {language === 'en' ? 'Closed' : '休息'}
          </HoursText>
          <HoursText style={{ marginTop: theme.spacing[4], fontSize: theme.typography.fontSize.sm }}>
            {language === 'en'
              ? 'We typically respond to all inquiries within 24 hours during business days.'
              : '我們通常會在工作日24小時內回覆所有詢問。'}
          </HoursText>
        </BusinessHours>
      </div>
    </PageContainer>
  );
};