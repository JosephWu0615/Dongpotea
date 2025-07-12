import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { theme } from '../../../assets/styles/theme';

const FooterContainer = styled.footer`
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.white};
  padding: ${theme.spacing[16]} 0 ${theme.spacing[8]};
  margin-top: ${theme.spacing[20]};
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[6]};
  }
`;

const FooterSection = styled.div`
  h3 {
    font-family: ${theme.typography.fontFamily.serif};
    font-size: ${theme.typography.fontSize.xl};
    font-weight: ${theme.typography.fontWeight.normal};
    margin-bottom: ${theme.spacing[4]};
  }

  p {
    color: ${theme.colors.gray[400]};
    line-height: ${theme.typography.lineHeight.relaxed};
  }
`;

const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const FooterLink = styled(Link)`
  color: ${theme.colors.gray[400]};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.white};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  margin-top: ${theme.spacing[4]};
`;

const SocialLink = styled.a`
  color: ${theme.colors.gray[400]};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.white};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const FooterBottom = styled.div`
  padding-top: ${theme.spacing[8]};
  border-top: 1px solid ${theme.colors.gray[800]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: ${theme.spacing[4]};

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: center;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.gray[400]};
  font-size: ${theme.typography.fontSize.sm};
`;

const PaymentMethods = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  align-items: center;

  img {
    height: 24px;
    opacity: 0.6;
    transition: opacity ${theme.animation.duration.fast} ${theme.animation.easing.out};

    &:hover {
      opacity: 1;
    }
  }
`;

export const Footer: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);

  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterSection>
            <h3>Dong Po Tea</h3>
            <p>
              {language === 'en'
                ? 'Experience the finest Taiwanese teas, carefully selected and crafted to bring you the authentic taste of Taiwan\'s tea culture.'
                : '體驗最優質的台灣茶，精心挑選和製作，為您帶來台灣茶文化的正宗味道。'}
            </p>
            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>{language === 'en' ? 'Quick Links' : '快速連結'}</h3>
            <FooterLinks>
              <li><FooterLink to="/shop">{language === 'en' ? 'All Products' : '所有產品'}</FooterLink></li>
              <li><FooterLink to="/shop/tea-bags">{language === 'en' ? 'Tea Bags' : '茶包'}</FooterLink></li>
              <li><FooterLink to="/shop/loose-tea">{language === 'en' ? 'Loose Tea' : '散茶'}</FooterLink></li>
              <li><FooterLink to="/about">{language === 'en' ? 'About Us' : '關於我們'}</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>{language === 'en' ? 'Customer Service' : '客戶服務'}</h3>
            <FooterLinks>
              <li><FooterLink to="/contact">{language === 'en' ? 'Contact Us' : '聯絡我們'}</FooterLink></li>
              <li><FooterLink to="/shipping">{language === 'en' ? 'Shipping Info' : '運送資訊'}</FooterLink></li>
              <li><FooterLink to="/returns">{language === 'en' ? 'Returns' : '退貨政策'}</FooterLink></li>
              <li><FooterLink to="/faq">{language === 'en' ? 'FAQ' : '常見問題'}</FooterLink></li>
            </FooterLinks>
          </FooterSection>

          <FooterSection>
            <h3>{language === 'en' ? 'Newsletter' : '電子報'}</h3>
            <p>
              {language === 'en'
                ? 'Subscribe to receive updates about new products and special offers.'
                : '訂閱以接收新產品和特別優惠的更新。'}
            </p>
          </FooterSection>
        </FooterContent>

        <FooterBottom>
          <Copyright>
            © {new Date().getFullYear()} Dong Po Tea. {language === 'en' ? 'All rights reserved.' : '版權所有。'}
          </Copyright>
          <PaymentMethods>
            <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
            <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
            <img src="https://img.icons8.com/color/48/000000/amex.png" alt="American Express" />
            <img src="https://img.icons8.com/color/48/000000/stripe.png" alt="Stripe" />
          </PaymentMethods>
        </FooterBottom>
      </div>
    </FooterContainer>
  );
};