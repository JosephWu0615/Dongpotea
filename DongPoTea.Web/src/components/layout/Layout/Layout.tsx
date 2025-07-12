import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { CartDrawer } from '../../cart/CartDrawer/CartDrawer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
  padding-top: 80px; // Account for fixed header
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
      <CartDrawer />
    </LayoutContainer>
  );
};