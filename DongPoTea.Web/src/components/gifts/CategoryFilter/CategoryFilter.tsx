import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import { GiftCategory } from '../../../data/gifts';

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing[4]};
`;

const FilterRow = styled.div`
  display: flex;
  gap: ${theme.spacing[3]};
  flex-wrap: wrap;
  align-items: center;
`;

const FilterLabel = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.gray[700]};
  min-width: 80px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  flex-wrap: wrap;
  flex: 1;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing[2]} ${theme.spacing[4]};
  border-radius: 20px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;
  white-space: nowrap;

  ${({ $active }) => $active ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
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

const CategoryButton = styled.button<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
  padding: ${theme.spacing[3]} ${theme.spacing[4]};
  border-radius: 8px;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  cursor: pointer;

  ${({ $active }) => $active ? `
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.primary};
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

const CategoryIcon = styled.span`
  font-size: ${theme.typography.fontSize.base};
`;

type FilterType = 'all' | 'featured' | 'best-sellers' | 'category' | 'occasion';

interface CategoryFilterProps {
  categories: GiftCategory[];
  activeFilter: FilterType;
  selectedCategory: string;
  language: 'en' | 'zh-TW';
  onFilterChange: (filter: FilterType, category?: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeFilter,
  selectedCategory,
  language,
  onFilterChange
}) => {
  return (
    <FilterContainer>
      <FilterRow>
        <FilterLabel>
          {language === 'en' ? 'Show:' : '顯示：'}
        </FilterLabel>
        <FilterButtons>
          <FilterButton 
            $active={activeFilter === 'featured'}
            onClick={() => onFilterChange('featured')}
          >
            {language === 'en' ? 'Featured' : '特色'}
          </FilterButton>
          <FilterButton 
            $active={activeFilter === 'best-sellers'}
            onClick={() => onFilterChange('best-sellers')}
          >
            {language === 'en' ? 'Best Sellers' : '熱銷'}
          </FilterButton>
          <FilterButton 
            $active={activeFilter === 'all'}
            onClick={() => onFilterChange('all')}
          >
            {language === 'en' ? 'All Sets' : '所有套裝'}
          </FilterButton>
        </FilterButtons>
      </FilterRow>

      <FilterRow>
        <FilterLabel>
          {language === 'en' ? 'Category:' : '分類：'}
        </FilterLabel>
        <FilterButtons>
          <CategoryButton 
            $active={activeFilter === 'category' && selectedCategory === ''}
            onClick={() => onFilterChange('category', '')}
          >
            <CategoryIcon>📦</CategoryIcon>
            {language === 'en' ? 'All Categories' : '所有分類'}
          </CategoryButton>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              $active={activeFilter === 'category' && selectedCategory === category.id}
              onClick={() => onFilterChange('category', category.id)}
            >
              <CategoryIcon>{category.icon}</CategoryIcon>
              {language === 'en' ? category.name : category.nameChinese}
            </CategoryButton>
          ))}
        </FilterButtons>
      </FilterRow>
    </FilterContainer>
  );
};