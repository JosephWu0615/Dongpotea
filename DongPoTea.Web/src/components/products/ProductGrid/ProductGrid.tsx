import React from 'react';
import styled from 'styled-components';
import { ProductCard } from '../ProductCard/ProductCard';
import { theme } from '../../../assets/styles/theme';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing[6]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing[4]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

interface Product {
  id: string;
  name: string;
  nameChinese?: string;
  price: number;
  image: string;
  category: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          nameChinese={product.nameChinese}
          price={product.price}
          image={product.image}
          category={product.category}
        />
      ))}
    </Grid>
  );
};