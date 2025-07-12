import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../../assets/styles/theme';

const CardContainer = styled(Link)`
  position: relative;
  display: block;
  height: 400px;
  overflow: hidden;
  background-color: ${theme.colors.gray[100]};
  transition: transform ${theme.animation.duration.normal} ${theme.animation.easing.out};

  &:hover {
    transform: scale(1.02);
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    height: 300px;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.animation.duration.slow} ${theme.animation.easing.out};
`;

const CardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h2`
  color: ${theme.colors.white};
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.light};
  letter-spacing: 2px;
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize['2xl']};
  }
`;

interface CategoryCardProps {
  title: string;
  titleChinese: string;
  image: string;
  link: string;
  language: 'en' | 'zh-TW';
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  titleChinese,
  image,
  link,
  language,
}) => {
  return (
    <CardContainer to={link}>
      <CardImage 
        src={image} 
        alt={language === 'en' ? title : titleChinese}
        loading="eager" // Category cards should load immediately
      />
      <CardOverlay>
        <CardTitle>{language === 'en' ? title : titleChinese}</CardTitle>
      </CardOverlay>
    </CardContainer>
  );
};