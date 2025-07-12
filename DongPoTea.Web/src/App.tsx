import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './store';
import { theme } from './assets/styles/theme';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import { Layout } from './components/layout';
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { TeaProcessingPage } from './pages/TeaProcessingPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LearningPage } from './pages/LearningPage';
import { LearningSectionPage } from './pages/LearningSectionPage';
import { LearningContentPage } from './pages/LearningContentPage';
import { QuizPage } from './pages/QuizPage';
import { OurFarmersPage } from './pages/OurFarmersPage';
import { GiftCenterPage } from './pages/GiftCenterPage';
import { SubscriptionPage } from './pages/SubscriptionPage';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:category" element={<ShopPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/tea-processing" element={<TeaProcessingPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/category/:category" element={<BlogPage />} />
              <Route path="/blog/post/:slug" element={<BlogPostPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/learning/:slug" element={<LearningSectionPage />} />
              <Route path="/learning/:sectionSlug/:contentSlug" element={<LearningContentPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/farmers" element={<OurFarmersPage />} />
              <Route path="/gifts" element={<GiftCenterPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;