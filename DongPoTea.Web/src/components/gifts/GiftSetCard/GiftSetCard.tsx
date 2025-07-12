import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch } from '../../../hooks/redux';
import { addToCart } from '../../../store/localCartSlice';
import { theme } from '../../../assets/styles/theme';
import { GiftSet } from '../../../data/gifts';

const CardContainer = styled.div<{ $variant: 'standard' | 'featured' }>`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  border: 1px solid ${theme.colors.gray[200]};
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }

  ${({ $variant }) => $variant === 'featured' && `
    display: grid;
    grid-template-columns: 250px 1fr;
    min-height: 320px;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const ImageContainer = styled.div<{ $variant: 'standard' | 'featured' }>`
  position: relative;
  ${({ $variant }) => $variant === 'featured' ? `
    height: 100%;
    
    @media (max-width: ${theme.breakpoints.md}) {
      height: 250px;
    }
  ` : `
    height: 250px;
  `}
`;

const GiftImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: ${theme.spacing[3]};
  left: ${theme.spacing[3]};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[2]};
`;

const Badge = styled.span<{ $type: 'featured' | 'bestseller' | 'new' | 'sale' }>`
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: 12px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  ${({ $type }) => {
    switch ($type) {
      case 'featured':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `;
      case 'bestseller':
        return `
          background-color: ${theme.colors.success};
          color: ${theme.colors.white};
        `;
      case 'new':
        return `
          background-color: ${theme.colors.info};
          color: ${theme.colors.white};
        `;
      case 'sale':
        return `
          background-color: ${theme.colors.error};
          color: ${theme.colors.white};
        `;
      default:
        return '';
    }
  }}
`;

const CardContent = styled.div<{ $variant: 'standard' | 'featured' }>`
  padding: ${({ $variant }) => $variant === 'featured' ? theme.spacing[8] : theme.spacing[6]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const CardHeader = styled.div`
  margin-bottom: ${theme.spacing[4]};
`;

const GiftName = styled.h3<{ $variant: 'standard' | 'featured' }>`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${({ $variant }) => 
    $variant === 'featured' ? theme.typography.fontSize.xl : theme.typography.fontSize.lg
  };
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
  line-height: ${theme.typography.lineHeight.tight};
`;

const GiftCategory = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[3]};
`;

const GiftDescription = styled.p<{ $variant: 'standard' | 'featured' }>`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[4]};
  
  ${({ $variant }) => $variant === 'standard' && `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const ItemsList = styled.div<{ $variant: 'standard' | 'featured' }>`
  margin-bottom: ${theme.spacing[4]};
  
  ${({ $variant }) => $variant === 'standard' && `
    display: none;
  `}
`;

const ItemsTitle = styled.h4`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const ItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: ${theme.spacing[2]};
`;

const ItemTag = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.xs};
  border-radius: 6px;
  text-align: center;
`;

const OccasionTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[4]};
`;

const OccasionTag = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  border-radius: 8px;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const PriceSection = styled.div`
  margin-bottom: ${theme.spacing[4]};
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const CurrentPrice = styled.span`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.gray[900]};
`;

const OriginalPrice = styled.span`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[500]};
  text-decoration: line-through;
`;

const SavingsText = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.success};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  margin-top: auto;
`;

const ActionButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  flex: 1;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: 6px;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;

  ${({ $variant }) => $variant === 'primary' ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primaryDark};
      border-color: ${theme.colors.primaryDark};
    }
  ` : `
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray[700]};
    border: 1px solid ${theme.colors.gray[300]};

    &:hover {
      background-color: ${theme.colors.gray[50]};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `}
`;

const ViewDetailsLink = styled(Link)`
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[700]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 6px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  text-decoration: none;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[50]};
    border-color: ${theme.colors.primary};
    color: ${theme.colors.primary};
  }
`;

const PackagingInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
  padding: ${theme.spacing[2]};
  background-color: ${theme.colors.gray[50]};
  border-radius: 6px;
`;

const SustainableIcon = styled.span`
  color: ${theme.colors.success};
  font-size: ${theme.typography.fontSize.sm};
`;

const PackagingText = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[600]};
`;

interface GiftSetCardProps {
  giftSet: GiftSet;
  language: 'en' | 'zh-TW';
  variant: 'standard' | 'featured';
}

export const GiftSetCard: React.FC<GiftSetCardProps> = ({ giftSet, language, variant }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: giftSet.id,
      name: language === 'en' ? giftSet.name : giftSet.nameChinese,
      nameChinese: giftSet.nameChinese,
      price: giftSet.price,
      quantity: 1,
      image: giftSet.image
    }));
  };

  const savings = giftSet.originalPrice ? giftSet.originalPrice - giftSet.price : 0;
  const savingsPercent = giftSet.originalPrice ? Math.round((savings / giftSet.originalPrice) * 100) : 0;

  const occasions = language === 'en' ? giftSet.occasion : giftSet.occasionChinese;

  return (
    <CardContainer $variant={variant}>
      <ImageContainer $variant={variant}>
        <GiftImage 
          src={giftSet.image} 
          alt={language === 'en' ? giftSet.name : giftSet.nameChinese}
        />
        <BadgeContainer>
          {giftSet.featured && (
            <Badge $type="featured">
              {language === 'en' ? 'Featured' : '特色'}
            </Badge>
          )}
          {giftSet.bestSeller && (
            <Badge $type="bestseller">
              {language === 'en' ? 'Best Seller' : '熱銷'}
            </Badge>
          )}
          {giftSet.newArrival && (
            <Badge $type="new">
              {language === 'en' ? 'New' : '新品'}
            </Badge>
          )}
          {savings > 0 && (
            <Badge $type="sale">
              {language === 'en' ? `Save ${savingsPercent}%` : `省${savingsPercent}%`}
            </Badge>
          )}
        </BadgeContainer>
      </ImageContainer>

      <CardContent $variant={variant}>
        <div>
          <CardHeader>
            <GiftName $variant={variant}>
              {language === 'en' ? giftSet.name : giftSet.nameChinese}
            </GiftName>
            <GiftCategory>
              {language === 'en' ? giftSet.category.name : giftSet.category.nameChinese}
            </GiftCategory>
          </CardHeader>

          <GiftDescription $variant={variant}>
            {language === 'en' ? giftSet.description : giftSet.descriptionChinese}
          </GiftDescription>

          {variant === 'featured' && (
            <ItemsList $variant={variant}>
              <ItemsTitle>
                {language === 'en' ? 'Includes:' : '包含：'}
              </ItemsTitle>
              <ItemsGrid>
                {giftSet.items.slice(0, 4).map((item) => (
                  <ItemTag key={item.id}>
                    {language === 'en' ? item.name : item.nameChinese}
                  </ItemTag>
                ))}
                {giftSet.items.length > 4 && (
                  <ItemTag>
                    +{giftSet.items.length - 4} {language === 'en' ? 'more' : '更多'}
                  </ItemTag>
                )}
              </ItemsGrid>
            </ItemsList>
          )}

          <OccasionTags>
            {occasions.slice(0, 3).map((occasion, index) => (
              <OccasionTag key={index}>{occasion}</OccasionTag>
            ))}
          </OccasionTags>

          {giftSet.packaging.sustainable && (
            <PackagingInfo>
              <SustainableIcon>🌱</SustainableIcon>
              <PackagingText>
                {language === 'en' ? 'Sustainable packaging' : '環保包裝'}
              </PackagingText>
            </PackagingInfo>
          )}
        </div>

        <div>
          <PriceSection>
            <PriceContainer>
              <CurrentPrice>${giftSet.price}</CurrentPrice>
              {giftSet.originalPrice && (
                <>
                  <OriginalPrice>${giftSet.originalPrice}</OriginalPrice>
                  <SavingsText>
                    {language === 'en' ? `Save $${savings}` : `省$${savings}`}
                  </SavingsText>
                </>
              )}
            </PriceContainer>
          </PriceSection>

          <ActionButtons>
            <ActionButton $variant="primary" onClick={handleAddToCart}>
              {language === 'en' ? 'Add to Cart' : '加入購物車'}
            </ActionButton>
            <ViewDetailsLink to={`/gifts/${giftSet.id}`}>
              {language === 'en' ? 'View Details' : '查看詳情'}
            </ViewDetailsLink>
          </ActionButtons>
        </div>
      </CardContent>
    </CardContainer>
  );
};