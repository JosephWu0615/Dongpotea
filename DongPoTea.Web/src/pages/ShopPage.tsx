import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux';
import { ProductGrid } from '../components/products/ProductGrid/ProductGrid';
import { theme } from '../assets/styles/theme';
import { products } from '../data/products';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: ${theme.spacing[20]} 0;
`;

const Breadcrumb = styled.nav`
  margin-bottom: ${theme.spacing[8]};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const BreadcrumbLink = styled(Link)`
  color: ${theme.colors.gray[600]};
  
  &:hover {
    color: ${theme.colors.primary};
  }
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.light};
  margin-bottom: ${theme.spacing[4]};
`;

const ProductCount = styled.p`
  color: ${theme.colors.gray[600]};
  font-size: ${theme.typography.fontSize.base};
`;

const FilterTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing[8]};
  margin-bottom: ${theme.spacing[12]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const FilterTab = styled(Link)<{ $active: boolean }>`
  padding: ${theme.spacing[3]} 0;
  margin-bottom: -1px;
  font-size: ${theme.typography.fontSize.base};
  color: ${({ $active }) => $active ? theme.colors.black : theme.colors.gray[600]};
  border-bottom: 2px solid ${({ $active }) => $active ? theme.colors.black : 'transparent'};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.black};
  }
`;

export const ShopPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const { language } = useAppSelector((state) => state.ui);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter(p => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  const getCategoryTitle = () => {
    if (!category) return language === 'en' ? 'All Products' : '所有產品';
    if (category === 'teabag') return language === 'en' ? 'Teabag' : '茶包';
    if (category === 'loose-tea') return language === 'en' ? 'Loose Tea' : '散茶';
    return '';
  };

  return (
    <PageContainer>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbLink to="/">
            {language === 'en' ? 'Home' : '首頁'}
          </BreadcrumbLink>
          {' / '}
          <span>{getCategoryTitle()}</span>
        </Breadcrumb>

        <PageHeader>
          <PageTitle>{getCategoryTitle()}</PageTitle>
          <ProductCount>
            {language === 'en' 
              ? `Showing ${filteredProducts.length} products`
              : `顯示 ${filteredProducts.length} 個產品`}
          </ProductCount>
        </PageHeader>

        <FilterTabs>
          <FilterTab to="/shop" $active={!category}>
            {language === 'en' ? 'All Products' : '所有產品'}
          </FilterTab>
          <FilterTab to="/shop/teabag" $active={category === 'teabag'}>
            {language === 'en' ? 'Teabag' : '茶包'}
          </FilterTab>
          <FilterTab to="/shop/loose-tea" $active={category === 'loose-tea'}>
            {language === 'en' ? 'Loose Tea' : '散茶'}
          </FilterTab>
        </FilterTabs>

        <ProductGrid products={filteredProducts} />
      </div>
    </PageContainer>
  );
};