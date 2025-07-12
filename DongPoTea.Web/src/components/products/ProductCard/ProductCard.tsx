import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addToCart } from '../../../store/localCartSlice';
import { theme } from '../../../assets/styles/theme';

const CardContainer = styled(Link)`
  position: relative;
  display: block;
  background-color: ${theme.colors.white};
  transition: all ${theme.animation.duration.normal} ${theme.animation.easing.out};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 100%; // 1:1 aspect ratio
  overflow: hidden;
  background-color: ${theme.colors.gray[50]};
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${theme.animation.duration.slow} ${theme.animation.easing.out};

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const WishlistButton = styled.button`
  position: absolute;
  top: ${theme.spacing[3]};
  right: ${theme.spacing[3]};
  width: 40px;
  height: 40px;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${theme.shadows.base};
  opacity: 0;
  transition: opacity ${theme.animation.duration.fast} ${theme.animation.easing.out};

  ${CardContainer}:hover & {
    opacity: 1;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${theme.colors.gray[50]};
  }
`;

const QuickAddButton = styled.button`
  position: absolute;
  bottom: ${theme.spacing[3]};
  left: ${theme.spacing[3]};
  right: ${theme.spacing[3]};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(10px);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  ${CardContainer}:hover & {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    background-color: ${theme.colors.gray[800]};
  }
`;

const ProductInfo = styled.div`
  padding: ${theme.spacing[4]};
  text-align: center;
`;

const ProductName = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[2]};
  line-height: ${theme.typography.lineHeight.tight};
`;

const ProductPrice = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[700]};
`;

interface ProductCardProps {
  id: string;
  name: string;
  nameChinese?: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  nameChinese,
  price,
  image,
  category,
}) => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.ui);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    dispatch(addToCart({ 
      productId: id, 
      name,
      nameChinese,
      price,
      quantity: 1,
      image 
    }));
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation
    setIsWishlisted(!isWishlisted);
    // TODO: Implement wishlist functionality in Redux
  };

  return (
    <CardContainer to={`/product/${id}`}>
      <ImageContainer>
        <ProductImage 
          src={image} 
          alt={name}
          loading="lazy"
        />
        <WishlistButton onClick={handleWishlist}>
          <svg 
            fill={isWishlisted ? theme.colors.primary : "none"} 
            stroke={isWishlisted ? theme.colors.primary : "currentColor"} 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
            />
          </svg>
        </WishlistButton>
        <QuickAddButton onClick={handleQuickAdd}>
          {language === 'en' ? 'Add to Cart' : '加入購物車'}
        </QuickAddButton>
      </ImageContainer>
      <ProductInfo>
        <ProductName>
          {language === 'en' ? name : nameChinese || name}
        </ProductName>
        <ProductPrice>
          ${price}
        </ProductPrice>
      </ProductInfo>
    </CardContainer>
  );
};