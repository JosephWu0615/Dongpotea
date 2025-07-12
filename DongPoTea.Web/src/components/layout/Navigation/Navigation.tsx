import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../hooks/redux';
import { theme } from '../../../assets/styles/theme';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[8]};

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.normal};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};
  position: relative;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const ShopDropdown = styled.div`
  position: relative;
`;

const ShopButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.normal};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.primary};
  }

  svg {
    width: 16px;
    height: 16px;
    transition: transform ${theme.animation.duration.fast} ${theme.animation.easing.out};
  }

  &[aria-expanded="true"] svg {
    transform: rotate(180deg);
  }
`;

const DropdownMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: ${theme.spacing[2]};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.lg};
  border-radius: 4px;
  padding: ${theme.spacing[2]} 0;
  min-width: 200px;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.base};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[100]};
    color: ${theme.colors.primary};
  }
`;

export const Navigation: React.FC = () => {
  const [isShopOpen, setIsShopOpen] = useState(false);
  const { language } = useAppSelector((state) => state.ui);

  return (
    <Nav>
      <ShopDropdown
        onMouseEnter={() => setIsShopOpen(true)}
        onMouseLeave={() => setIsShopOpen(false)}
      >
        <ShopButton aria-expanded={isShopOpen}>
          {language === 'en' ? 'Shop' : '商店'}
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </ShopButton>
        
        <DropdownMenu $isOpen={isShopOpen}>
          <DropdownLink to="/shop">
            {language === 'en' ? 'All Products' : '所有產品'}
          </DropdownLink>
          <DropdownLink to="/shop/teabag">
            {language === 'en' ? 'Teabag' : '茶包'}
          </DropdownLink>
          <DropdownLink to="/shop/loose-tea">
            {language === 'en' ? 'Loose Tea' : '散茶'}
          </DropdownLink>
        </DropdownMenu>
      </ShopDropdown>
      
      <NavLink to="/tea-processing">
        {language === 'en' ? 'Tea Processing' : '茶葉加工'}
      </NavLink>
      
      <NavLink to="/farmers">
        {language === 'en' ? 'Our Farmers' : '我們的農民'}
      </NavLink>
      
      <NavLink to="/gifts">
        {language === 'en' ? 'Gifts' : '禮品'}
      </NavLink>
      
      <NavLink to="/subscription">
        {language === 'en' ? 'Subscribe' : '訂閱'}
      </NavLink>
      
      <NavLink to="/blog">
        {language === 'en' ? 'Blog' : '部落格'}
      </NavLink>
      
      <NavLink to="/learning">
        {language === 'en' ? 'Learn' : '學習'}
      </NavLink>
      
      <NavLink to="/quiz">
        {language === 'en' ? 'Quiz' : '測驗'}
      </NavLink>
    </Nav>
  );
};