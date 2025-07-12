import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { updateQuantity, removeFromCart } from '../store/localCartSlice';
import { theme } from '../assets/styles/theme';
import { formatCurrency } from '../utils/formatters';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: ${theme.spacing[20]} 0;
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.light};
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
`;

const CartContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: ${theme.spacing[8]};
  align-items: start;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.gray[200]};
`;

const CartHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  border-bottom: 2px solid ${theme.colors.gray[200]};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  font-size: ${theme.typography.fontSize.sm};
  letter-spacing: 1px;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr auto;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[6]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[3]};
  }
`;

const ProductInfo = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
  }
`;

const ProductDetails = styled.div``;

const ProductName = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[1]};
`;

const ProductCategory = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const PriceCol = styled.div`
  font-size: ${theme.typography.fontSize.base};
  
  @media (max-width: ${theme.breakpoints.md}) {
    &:before {
      content: 'Price: ';
      font-weight: ${theme.typography.fontWeight.medium};
    }
  }
`;

const QuantityCol = styled.div`
  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    align-items: center;
    gap: ${theme.spacing[2]};
    
    &:before {
      content: 'Quantity: ';
      font-weight: ${theme.typography.fontWeight.medium};
    }
  }
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray[300]};
  width: fit-content;
`;

const QuantityButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.typography.fontSize.lg};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.gray[100]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  width: 50px;
  height: 36px;
  text-align: center;
  border: none;
  border-left: 1px solid ${theme.colors.gray[300]};
  border-right: 1px solid ${theme.colors.gray[300]};
  font-size: ${theme.typography.fontSize.base};
`;

const SubtotalCol = styled.div`
  font-weight: ${theme.typography.fontWeight.medium};
  
  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
    
    &:before {
      content: 'Subtotal: ';
    }
  }
`;

const RemoveButton = styled.button`
  color: ${theme.colors.gray[500]};
  padding: ${theme.spacing[2]};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.error};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: ${theme.spacing[20]} 0;
`;

const EmptyCartText = styled.p`
  font-size: ${theme.typography.fontSize.lg};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[6]};
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  padding: ${theme.spacing[3]} ${theme.spacing[8]};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[800]};
  }
`;

const OrderSummary = styled.div`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[8]};
  position: sticky;
  top: 100px;
`;

const SummaryTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[6]};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing[3]};
  font-size: ${theme.typography.fontSize.base};

  &:last-of-type {
    margin-bottom: ${theme.spacing[6]};
  }
`;

const SummaryTotal = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: ${theme.spacing[6]};
  border-top: 2px solid ${theme.colors.gray[300]};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[6]};
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-align: center;
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

const ShippingNote = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  text-align: center;
  margin-top: ${theme.spacing[4]};
`;

export const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, subtotal } = useAppSelector((state) => state.localCart);
  const { language } = useAppSelector((state) => state.ui);

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ itemId, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  const estimatedShipping = subtotal > 50 ? 0 : 5;
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + estimatedShipping + estimatedTax;

  if (items.length === 0) {
    return (
      <PageContainer>
        <div className="container">
          <PageTitle>
            {language === 'en' ? 'Shopping Cart' : '購物車'}
          </PageTitle>
          <EmptyCart>
            <EmptyCartText>
              {language === 'en' ? 'Your cart is empty' : '您的購物車是空的'}
            </EmptyCartText>
            <ContinueShoppingButton to="/shop">
              {language === 'en' ? 'Continue Shopping' : '繼續購物'}
            </ContinueShoppingButton>
          </EmptyCart>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="container">
        <PageTitle>
          {language === 'en' ? 'Shopping Cart' : '購物車'}
        </PageTitle>

        <CartContent>
          <CartItems>
            <CartHeader>
              <div>{language === 'en' ? 'Product' : '產品'}</div>
              <div>{language === 'en' ? 'Price' : '價格'}</div>
              <div>{language === 'en' ? 'Quantity' : '數量'}</div>
              <div>{language === 'en' ? 'Subtotal' : '小計'}</div>
              <div></div>
            </CartHeader>

            {items.map((item) => (
              <CartItem key={item.id}>
                <ProductInfo>
                  <ProductImage src={item.image} alt={item.name} />
                  <ProductDetails>
                    <ProductName>
                      {language === 'en' ? item.name : item.nameChinese || item.name}
                    </ProductName>
                    <ProductCategory>
                      {language === 'en' ? 'Tea' : '茶'}
                    </ProductCategory>
                  </ProductDetails>
                </ProductInfo>

                <PriceCol>
                  {formatCurrency(item.price, language)}
                </PriceCol>

                <QuantityCol>
                  <QuantitySelector>
                    <QuantityButton
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </QuantityButton>
                    <QuantityInput
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                      min="1"
                      max="99"
                    />
                    <QuantityButton
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    >
                      +
                    </QuantityButton>
                  </QuantitySelector>
                </QuantityCol>

                <SubtotalCol>
                  {formatCurrency(item.price * item.quantity, language)}
                </SubtotalCol>

                <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </RemoveButton>
              </CartItem>
            ))}
          </CartItems>

          <OrderSummary>
            <SummaryTitle>
              {language === 'en' ? 'Order Summary' : '訂單摘要'}
            </SummaryTitle>

            <SummaryRow>
              <span>{language === 'en' ? 'Subtotal' : '小計'}</span>
              <span>{formatCurrency(subtotal, language)}</span>
            </SummaryRow>

            <SummaryRow>
              <span>{language === 'en' ? 'Estimated Shipping' : '預估運費'}</span>
              <span>
                {estimatedShipping === 0 
                  ? (language === 'en' ? 'FREE' : '免費')
                  : formatCurrency(estimatedShipping, language)}
              </span>
            </SummaryRow>

            <SummaryRow>
              <span>{language === 'en' ? 'Estimated Tax' : '預估稅金'}</span>
              <span>{formatCurrency(estimatedTax, language)}</span>
            </SummaryRow>

            <SummaryTotal>
              <span>{language === 'en' ? 'Total' : '總計'}</span>
              <span>{formatCurrency(total, language)}</span>
            </SummaryTotal>

            <CheckoutButton to="/checkout">
              {language === 'en' ? 'Proceed to Checkout' : '前往結帳'}
            </CheckoutButton>

            <ShippingNote>
              {language === 'en' 
                ? 'Free shipping on orders over $50'
                : '訂單滿 $50 免運費'}
            </ShippingNote>
          </OrderSummary>
        </CartContent>
      </div>
    </PageContainer>
  );
};