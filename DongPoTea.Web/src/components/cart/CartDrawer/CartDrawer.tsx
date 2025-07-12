import React from 'react';
import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { toggleCart, removeFromCart, updateQuantity } from '../../../store/localCartSlice';
import { theme } from '../../../assets/styles/theme';
import { formatCurrency } from '../../../utils/formatters';
import { Link } from 'react-router-dom';

const DrawerOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};
  z-index: 999;
`;

const DrawerContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-400px')};
  width: 400px;
  height: 100%;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.xl};
  transition: right ${theme.animation.duration.fast} ${theme.animation.easing.out};
  z-index: 1000;
  display: flex;
  flex-direction: column;

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing[6]} ${theme.spacing[8]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const DrawerTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[100]};
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const DrawerContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${theme.spacing[6]} ${theme.spacing[8]};
`;

const CartItem = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  padding: ${theme.spacing[4]} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[1]};
`;

const ItemPrice = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[2]};
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing[2]};
`;

const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover:not(:disabled) {
    background-color: ${theme.colors.gray[100]};
    border-color: ${theme.colors.gray[400]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  min-width: 30px;
  text-align: center;
  font-size: ${theme.typography.fontSize.sm};
`;

const RemoveButton = styled.button`
  color: ${theme.colors.gray[500]};
  font-size: ${theme.typography.fontSize.sm};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.error};
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: ${theme.spacing[16]} 0;
`;

const EmptyCartText = styled.p`
  color: ${theme.colors.gray[600]};
  margin-bottom: ${theme.spacing[6]};
`;

const DrawerFooter = styled.div`
  padding: ${theme.spacing[6]} ${theme.spacing[8]};
  border-top: 1px solid ${theme.colors.gray[200]};
`;

const SubtotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing[4]};
`;

const SubtotalLabel = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const SubtotalAmount = styled.span`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.medium};
`;

const CheckoutButton = styled(Link)`
  display: block;
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  text-align: center;
  border-radius: 4px;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[800]};
  }
`;

const ViewCartLink = styled(Link)`
  display: block;
  width: 100%;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  text-align: center;
  color: ${theme.colors.black};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[2]};
  transition: color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.gray[700]};
  }
`;

const ShopLink = styled(Link)`
  display: inline-block;
  padding: ${theme.spacing[3]} ${theme.spacing[6]};
  background-color: ${theme.colors.black};
  color: ${theme.colors.white};
  border-radius: 4px;
  font-weight: ${theme.typography.fontWeight.medium};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.gray[800]};
  }
`;

export const CartDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, items, subtotal } = useAppSelector((state) => state.localCart);
  const { language } = useAppSelector((state) => state.ui);

  const handleClose = () => {
    dispatch(toggleCart());
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    dispatch(updateQuantity({ itemId, quantity }));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <>
      <DrawerOverlay $isOpen={isOpen} onClick={handleClose} />
      <DrawerContainer $isOpen={isOpen}>
        <DrawerHeader>
          <DrawerTitle>
            {language === 'en' ? 'Shopping Cart' : '購物車'}
            {items.length > 0 && ` (${items.length})`}
          </DrawerTitle>
          <CloseButton onClick={handleClose} aria-label="Close cart">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </CloseButton>
        </DrawerHeader>

        <DrawerContent>
          {items.length === 0 ? (
            <EmptyCart>
              <EmptyCartText>
                {language === 'en' ? 'Your cart is empty' : '您的購物車是空的'}
              </EmptyCartText>
              <ShopLink to="/shop" onClick={handleClose}>
                {language === 'en' ? 'Start Shopping' : '開始購物'}
              </ShopLink>
            </EmptyCart>
          ) : (
            items.map((item) => (
              <CartItem key={item.id}>
                <ItemImage src={item.image || '/placeholder.jpg'} alt={item.name} />
                <ItemDetails>
                  <ItemName>
                    {language === 'en' ? item.name : item.nameChinese || item.name}
                  </ItemName>
                  <ItemPrice>{formatCurrency(item.price, language)}</ItemPrice>
                  <QuantityControls>
                    <QuantityButton
                      onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      -
                    </QuantityButton>
                    <Quantity>{item.quantity}</Quantity>
                    <QuantityButton
                      onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </QuantityButton>
                    <RemoveButton onClick={() => handleRemoveItem(item.id)}>
                      {language === 'en' ? 'Remove' : '移除'}
                    </RemoveButton>
                  </QuantityControls>
                </ItemDetails>
              </CartItem>
            ))
          )}
        </DrawerContent>

        {items.length > 0 && (
          <DrawerFooter>
            <SubtotalRow>
              <SubtotalLabel>{language === 'en' ? 'Subtotal' : '小計'}</SubtotalLabel>
              <SubtotalAmount>{formatCurrency(subtotal, language)}</SubtotalAmount>
            </SubtotalRow>
            <ViewCartLink to="/cart" onClick={handleClose}>
              {language === 'en' ? 'View Cart' : '查看購物車'}
            </ViewCartLink>
            <CheckoutButton to="/checkout" onClick={handleClose}>
              {language === 'en' ? 'Checkout' : '結帳'}
            </CheckoutButton>
          </DrawerFooter>
        )}
      </DrawerContainer>
    </>
  );
};