import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { toggleCart } from '../../../store/localCartSlice';
import { toggleMobileMenu, setLanguage } from '../../../store/uiSlice';
import { theme } from '../../../assets/styles/theme';

interface HeaderContainerProps {
  $transparent?: boolean;
  $scrolled: boolean;
}

const HeaderContainer = styled.header<HeaderContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${theme.colors.white};
  transition: all ${theme.animation.duration.normal} ${theme.animation.easing.out};
  z-index: ${theme.zIndex.sticky};

  ${({ $transparent, $scrolled }) =>
    $transparent && !$scrolled &&
    css`
      background-color: transparent;
      color: ${theme.colors.white};
    `}

  ${({ $scrolled }) =>
    $scrolled &&
    css`
      box-shadow: ${theme.shadows.base};
    `}
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Logo = styled(Link)`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  letter-spacing: 0.05em;
  text-transform: uppercase;
  
  &:hover {
    color: inherit;
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing[4]};
  }
`;

const LanguageToggle = styled.button`
  font-size: ${theme.typography.fontSize.sm};
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  border: 1px solid currentColor;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-color: ${theme.colors.primary};
  }
`;

const CartButton = styled.button`
  position: relative;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

interface HeaderProps {
  transparent?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const dispatch = useAppDispatch();
  const { itemCount } = useAppSelector((state) => state.localCart);
  const { language } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    dispatch(setLanguage(language === 'en' ? 'zh-TW' : 'en'));
  };

  return (
    <HeaderContainer $transparent={transparent} $scrolled={scrolled}>
      <div className="container">
        <HeaderContent>
          <Logo to="/">Dong Po Tea</Logo>
          
          <Navigation />
          
          <HeaderActions>
            <LanguageToggle onClick={handleLanguageToggle}>
              {language === 'en' ? '中文' : 'EN'}
            </LanguageToggle>
            
            <CartButton onClick={() => dispatch(toggleCart())}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && <CartCount>{itemCount}</CartCount>}
            </CartButton>
            
            <MobileMenuButton onClick={() => dispatch(toggleMobileMenu())}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </MobileMenuButton>
          </HeaderActions>
        </HeaderContent>
      </div>
    </HeaderContainer>
  );
};