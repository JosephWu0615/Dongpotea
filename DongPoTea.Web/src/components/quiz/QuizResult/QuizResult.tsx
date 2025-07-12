import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { QuizResult as QuizResultType } from '../../../data/quiz';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[10]};
`;

const ResultIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${theme.spacing[4]};
`;

const ResultTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
`;

const ResultSubtitle = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const ProfileSection = styled.section`
  background: linear-gradient(135deg, ${theme.colors.gray[50]} 0%, ${theme.colors.white} 100%);
  border-radius: 12px;
  padding: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[10]};
`;

const ProfileTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
  text-align: center;
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing[6]};
`;

const ProfileItem = styled.div`
  text-align: center;
`;

const ProfileLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
  margin-bottom: ${theme.spacing[2]};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProfileValue = styled.div`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  text-transform: capitalize;
`;

const FlavorProfileContainer = styled.div`
  margin-top: ${theme.spacing[6]};
`;

const FlavorProfileTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[4]};
  text-align: center;
`;

const FlavorBars = styled.div`
  display: grid;
  gap: ${theme.spacing[3]};
`;

const FlavorBar = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[3]};
`;

const FlavorLabel = styled.span`
  min-width: 80px;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[700]};
  text-transform: capitalize;
`;

const FlavorBarTrack = styled.div`
  flex: 1;
  height: 8px;
  background-color: ${theme.colors.gray[200]};
  border-radius: 4px;
  overflow: hidden;
`;

const FlavorBarFill = styled.div<{ $level: number }>`
  height: 100%;
  background: linear-gradient(90deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
  width: ${({ $level }) => Math.min($level * 20, 100)}%;
  transition: width ${theme.animation.duration.normal} ${theme.animation.easing.out};
`;

const RecommendationSection = styled.section`
  margin-bottom: ${theme.spacing[10]};
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[6]};
  text-align: center;
`;

const PrimaryRecommendation = styled.div`
  background-color: ${theme.colors.white};
  border: 2px solid ${theme.colors.primary};
  border-radius: 12px;
  padding: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[8]};
  text-align: center;
`;

const TeaImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto ${theme.spacing[6]};
`;

const TeaName = styled.h3`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const TeaType = styled.p`
  color: ${theme.colors.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[4]};
`;

const TeaDescription = styled.p`
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing[6]};
`;

const MatchScore = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  background-color: ${theme.colors.success};
  color: ${theme.colors.white};
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: 20px;
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[6]};
`;

const ReasonsList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
  margin: ${theme.spacing[6]} 0;
`;

const ReasonItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
  color: ${theme.colors.gray[700]};
  line-height: ${theme.typography.lineHeight.relaxed};

  &::before {
    content: '✓';
    color: ${theme.colors.success};
    font-weight: bold;
    flex-shrink: 0;
  }
`;

const BrewingNotes = styled.div`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[4]};
  border-radius: 8px;
  margin-top: ${theme.spacing[4]};
`;

const BrewingTitle = styled.h4`
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const BrewingText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin: 0;
`;

const AlternativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing[6]};
  margin-bottom: ${theme.spacing[10]};
`;

const AlternativeCard = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 8px;
  padding: ${theme.spacing[6]};
  text-align: center;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const AlternativeImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
  margin: 0 auto ${theme.spacing[4]};
`;

const AlternativeName = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.gray[900]};
  margin-bottom: ${theme.spacing[2]};
`;

const AlternativeType = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[500]};
  margin-bottom: ${theme.spacing[3]};
`;

const AlternativeDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  justify-content: center;
  flex-wrap: wrap;
`;

const ActionButton = styled(Link)<{ $variant?: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  text-decoration: none;
  border-radius: 6px;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  ${({ $variant = 'secondary' }) => $variant === 'primary' ? `
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
      border-color: ${theme.colors.gray[400]};
    }
  `}
`;

const RestartButton = styled.button`
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.base};
  background-color: ${theme.colors.white};
  color: ${theme.colors.gray[700]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 6px;
  cursor: pointer;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[50]};
    border-color: ${theme.colors.gray[400]};
  }
`;

interface QuizResultProps {
  result: QuizResultType;
  language: 'en' | 'zh-TW';
  onRestart: () => void;
}

export const QuizResult: React.FC<QuizResultProps> = ({ result, language, onRestart }) => {
  const experienceLabels = {
    beginner: language === 'en' ? 'Beginner' : '初學者',
    intermediate: language === 'en' ? 'Intermediate' : '中級',
    advanced: language === 'en' ? 'Advanced' : '高級'
  };

  const strengthLabels = {
    light: language === 'en' ? 'Light' : '清淡',
    medium: language === 'en' ? 'Medium' : '中等',
    strong: language === 'en' ? 'Strong' : '濃厚'
  };

  const flavorLabels = {
    sweet: language === 'en' ? 'Sweet' : '甜味',
    bitter: language === 'en' ? 'Bitter' : '苦味',
    floral: language === 'en' ? 'Floral' : '花香',
    earthy: language === 'en' ? 'Earthy' : '土香',
    fresh: language === 'en' ? 'Fresh' : '清新',
    rich: language === 'en' ? 'Rich' : '濃郁'
  };

  return (
    <Container>
      <Header>
        <ResultIcon>🎉</ResultIcon>
        <ResultTitle>
          {language === 'en' ? 'Your Perfect Tea Match!' : '您的完美茶葉匹配！'}
        </ResultTitle>
        <ResultSubtitle>
          {language === 'en' 
            ? 'Based on your preferences, we\'ve found the ideal tea recommendations just for you.'
            : '根據您的偏好，我們為您找到了理想的茶葉推薦。'
          }
        </ResultSubtitle>
      </Header>

      <ProfileSection>
        <ProfileTitle>
          {language === 'en' ? 'Your Tea Profile' : '您的茶葉檔案'}
        </ProfileTitle>
        <ProfileGrid>
          <ProfileItem>
            <ProfileLabel>
              {language === 'en' ? 'Experience Level' : '經驗水平'}
            </ProfileLabel>
            <ProfileValue>
              {experienceLabels[result.experienceLevel]}
            </ProfileValue>
          </ProfileItem>
          <ProfileItem>
            <ProfileLabel>
              {language === 'en' ? 'Preferred Strength' : '偏好濃度'}
            </ProfileLabel>
            <ProfileValue>
              {strengthLabels[result.preferredStrength]}
            </ProfileValue>
          </ProfileItem>
        </ProfileGrid>

        <FlavorProfileContainer>
          <FlavorProfileTitle>
            {language === 'en' ? 'Your Flavor Profile' : '您的風味檔案'}
          </FlavorProfileTitle>
          <FlavorBars>
            {Object.entries(result.flavorProfile).map(([flavor, level]) => (
              <FlavorBar key={flavor}>
                <FlavorLabel>{flavorLabels[flavor as keyof typeof flavorLabels]}</FlavorLabel>
                <FlavorBarTrack>
                  <FlavorBarFill $level={level} />
                </FlavorBarTrack>
              </FlavorBar>
            ))}
          </FlavorBars>
        </FlavorProfileContainer>
      </ProfileSection>

      <RecommendationSection>
        <SectionTitle>
          {language === 'en' ? 'Your Top Recommendation' : '您的首選推薦'}
        </SectionTitle>
        
        <PrimaryRecommendation>
          <TeaImage 
            src={result.primaryRecommendation.image} 
            alt={language === 'en' ? result.primaryRecommendation.name : result.primaryRecommendation.nameChinese}
          />
          <TeaName>
            {language === 'en' ? result.primaryRecommendation.name : result.primaryRecommendation.nameChinese}
          </TeaName>
          <TeaType>
            {language === 'en' ? result.primaryRecommendation.type : result.primaryRecommendation.typeChinese}
          </TeaType>
          <MatchScore>
            <span>🎯</span>
            <span>{Math.round((result.primaryRecommendation.matchScore / 50) * 100)}% Match</span>
          </MatchScore>
          <TeaDescription>
            {language === 'en' ? result.primaryRecommendation.description : result.primaryRecommendation.descriptionChinese}
          </TeaDescription>

          <ReasonsList>
            {(language === 'en' ? result.primaryRecommendation.reasons : result.primaryRecommendation.reasonsChinese).map((reason, index) => (
              <ReasonItem key={index}>{reason}</ReasonItem>
            ))}
          </ReasonsList>

          <BrewingNotes>
            <BrewingTitle>
              {language === 'en' ? 'Brewing Notes' : '沖泡要點'}
            </BrewingTitle>
            <BrewingText>
              {language === 'en' ? result.primaryRecommendation.brewingNotes : result.primaryRecommendation.brewingNotesChinese}
            </BrewingText>
          </BrewingNotes>
        </PrimaryRecommendation>
      </RecommendationSection>

      <RecommendationSection>
        <SectionTitle>
          {language === 'en' ? 'You Might Also Like' : '您可能也會喜歡'}
        </SectionTitle>
        
        <AlternativesGrid>
          {result.alternativeRecommendations.map((tea) => (
            <AlternativeCard key={tea.id}>
              <AlternativeImage 
                src={tea.image} 
                alt={language === 'en' ? tea.name : tea.nameChinese}
              />
              <AlternativeName>
                {language === 'en' ? tea.name : tea.nameChinese}
              </AlternativeName>
              <AlternativeType>
                {language === 'en' ? tea.type : tea.typeChinese}
              </AlternativeType>
              <AlternativeDescription>
                {language === 'en' ? tea.description : tea.descriptionChinese}
              </AlternativeDescription>
            </AlternativeCard>
          ))}
        </AlternativesGrid>
      </RecommendationSection>

      <ActionButtons>
        <ActionButton to="/shop" $variant="primary">
          {language === 'en' ? 'Shop Recommended Teas' : '購買推薦茶葉'}
        </ActionButton>
        <ActionButton to="/learning">
          {language === 'en' ? 'Learn More About Tea' : '了解更多茶葉知識'}
        </ActionButton>
        <RestartButton onClick={onRestart}>
          {language === 'en' ? 'Retake Quiz' : '重新測驗'}
        </RestartButton>
      </ActionButtons>
    </Container>
  );
};