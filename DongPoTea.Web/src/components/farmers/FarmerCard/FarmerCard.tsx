import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { Farmer } from '../../../data/farmers';

const CardContainer = styled.div<{ $variant: 'featured' | 'compact' }>`
  background-color: ${theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  border: 1px solid ${theme.colors.gray[200]};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    border-color: ${theme.colors.primary};
  }

  ${({ $variant }) => $variant === 'featured' && `
    display: grid;
    grid-template-columns: 200px 1fr;
    min-height: 300px;

    @media (max-width: ${theme.breakpoints.md}) {
      grid-template-columns: 1fr;
    }
  `}
`;

const ImageContainer = styled.div<{ $variant: 'featured' | 'compact' }>`
  ${({ $variant }) => $variant === 'featured' ? `
    height: 100%;
    
    @media (max-width: ${theme.breakpoints.md}) {
      height: 200px;
    }
  ` : `
    height: 200px;
  `}
`;

const FarmerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div<{ $variant: 'featured' | 'compact' }>`
  padding: ${({ $variant }) => $variant === 'featured' ? theme.spacing[8] : theme.spacing[6]};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FarmerHeader = styled.div`
  margin-bottom: ${theme.spacing[4]};
`;

const FarmerName = styled.h3<{ $variant: 'featured' | 'compact' }>`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${({ $variant }) => 
    $variant === 'featured' ? theme.typography.fontSize.xl : theme.typography.fontSize.lg
  };
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const FarmerRegion = styled.p`
  color: ${theme.colors.primary};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[1]};
`;

const FarmerSpecialty = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing[3]};
`;

const ExperienceTag = styled.span`
  display: inline-block;
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  background-color: ${theme.colors.gray[100]};
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  border-radius: 12px;
  margin-bottom: ${theme.spacing[4]};
`;

const QuoteContainer = styled.div<{ $variant: 'featured' | 'compact' }>`
  ${({ $variant }) => $variant === 'featured' && `
    border-left: 3px solid ${theme.colors.primary};
    padding-left: ${theme.spacing[4]};
    margin: ${theme.spacing[4]} 0;
  `}
`;

const Quote = styled.blockquote<{ $variant: 'featured' | 'compact' }>`
  font-style: italic;
  color: ${theme.colors.gray[600]};
  font-size: ${({ $variant }) => 
    $variant === 'featured' ? theme.typography.fontSize.base : theme.typography.fontSize.sm
  };
  line-height: ${theme.typography.lineHeight.relaxed};
  margin: 0;
  
  ${({ $variant }) => $variant === 'compact' && `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `}
`;

const StoryPreview = styled.p`
  color: ${theme.colors.gray[700]};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin: ${theme.spacing[4]} 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const MetaInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[4]};
  margin: ${theme.spacing[4]} 0;
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.gray[500]};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[1]};
`;

const TeaTypesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  margin: ${theme.spacing[3]} 0;
`;

const TeaTypeTag = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  border-radius: 8px;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const CertificationsList = styled.div<{ $variant: 'featured' | 'compact' }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[3]};
  
  ${({ $variant }) => $variant === 'compact' && `
    display: none;
  `}
`;

const CertificationTag = styled.span`
  padding: ${theme.spacing[1]} ${theme.spacing[2]};
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.xs};
  border-radius: 8px;
  font-weight: ${theme.typography.fontWeight.medium};
`;

const ActionButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 6px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  margin-top: ${theme.spacing[4]};

  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: translateY(-1px);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: ${theme.spacing[3]};
  right: ${theme.spacing[3]};
  background-color: ${theme.colors.warning};
  color: ${theme.colors.white};
  padding: ${theme.spacing[1]} ${theme.spacing[3]};
  border-radius: 12px;
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

interface FarmerCardProps {
  farmer: Farmer;
  language: 'en' | 'zh-TW';
  variant: 'featured' | 'compact';
}

export const FarmerCard: React.FC<FarmerCardProps> = ({ farmer, language, variant }) => {
  const teaTypes = language === 'en' ? farmer.teaTypes : farmer.teaTypesChinese;
  const certifications = language === 'en' ? farmer.certifications : farmer.certificationsChinese;

  return (
    <CardContainer $variant={variant}>
      {farmer.featured && variant === 'compact' && (
        <FeaturedBadge>
          {language === 'en' ? 'Featured' : '特色'}
        </FeaturedBadge>
      )}
      
      <ImageContainer $variant={variant}>
        <FarmerImage 
          src={farmer.profileImage} 
          alt={language === 'en' ? farmer.name : farmer.nameChinese}
        />
      </ImageContainer>

      <CardContent $variant={variant}>
        <div>
          <FarmerHeader>
            <FarmerName $variant={variant}>
              {language === 'en' ? farmer.name : farmer.nameChinese}
            </FarmerName>
            <FarmerRegion>
              {language === 'en' ? farmer.region : farmer.regionChinese}
            </FarmerRegion>
            <FarmerSpecialty>
              {language === 'en' ? farmer.specialty : farmer.specialtyChinese}
            </FarmerSpecialty>
            <ExperienceTag>
              {farmer.experience} {language === 'en' ? 'years experience' : '年經驗'}
            </ExperienceTag>
          </FarmerHeader>

          {variant === 'featured' && (
            <StoryPreview>
              {language === 'en' ? farmer.story : farmer.storyChinese}
            </StoryPreview>
          )}

          <QuoteContainer $variant={variant}>
            <Quote $variant={variant}>
              "{language === 'en' ? farmer.quote : farmer.quoteChinese}"
            </Quote>
          </QuoteContainer>

          <MetaInfo>
            <MetaItem>
              <span>🏔️</span>
              <span>{farmer.elevation}m {language === 'en' ? 'elevation' : '海拔'}</span>
            </MetaItem>
            <MetaItem>
              <span>🌾</span>
              <span>{farmer.farmSize} {language === 'en' ? 'hectares' : '公頃'}</span>
            </MetaItem>
            <MetaItem>
              <span>📅</span>
              <span>{language === 'en' ? 'Est.' : '成立'} {farmer.establishedYear}</span>
            </MetaItem>
          </MetaInfo>

          <TeaTypesList>
            {teaTypes.slice(0, variant === 'featured' ? 5 : 3).map((type, index) => (
              <TeaTypeTag key={index}>{type}</TeaTypeTag>
            ))}
          </TeaTypesList>

          <CertificationsList $variant={variant}>
            {certifications.slice(0, 3).map((cert, index) => (
              <CertificationTag key={index}>{cert}</CertificationTag>
            ))}
          </CertificationsList>
        </div>

        <ActionButton to={`/farmers/${farmer.id}`}>
          {language === 'en' ? 'Learn More' : '了解更多'}
          <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </ActionButton>
      </CardContent>
    </CardContainer>
  );
};