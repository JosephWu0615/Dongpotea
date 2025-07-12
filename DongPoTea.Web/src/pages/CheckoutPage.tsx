import React, { useState } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/redux';
import { theme } from '../assets/styles/theme';
import { formatCurrency } from '../utils/formatters';

const PageContainer = styled.div`
  min-height: 60vh;
  padding: ${theme.spacing[20]} 0;
`;

const PageTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['4xl']};
  text-align: center;
  margin-bottom: ${theme.spacing[12]};
  font-weight: ${theme.typography.fontWeight.light};
`;

const CheckoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 400px;
  gap: ${theme.spacing[12]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }
`;

const CheckoutForm = styled.form`
  background-color: ${theme.colors.white};
  padding: ${theme.spacing[8]};
  border: 1px solid ${theme.colors.gray[200]};
  border-radius: 8px;
`;

const SectionTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing[3]};
  border-bottom: 1px solid ${theme.colors.gray[200]};
`;

const FormSection = styled.div`
  margin-bottom: ${theme.spacing[8]};
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[4]};

  &.single {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing[4]};
`;

const Label = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[2]};
  color: ${theme.colors.gray[700]};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  font-size: ${theme.typography.fontSize.base};
  transition: border-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: ${theme.spacing[3]};
  border: 1px solid ${theme.colors.gray[300]};
  border-radius: 4px;
  font-size: ${theme.typography.fontSize.base};
  background-color: ${theme.colors.white};
  transition: border-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:focus {
    outline: none;
    border-color: ${theme.colors.primary};
  }
`;

const OrderSummary = styled.div`
  background-color: ${theme.colors.gray[50]};
  padding: ${theme.spacing[8]};
  border-radius: 8px;
  position: sticky;
  top: 100px;
  height: fit-content;
`;

const SummaryTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[6]};
  padding-bottom: ${theme.spacing[3]};
  border-bottom: 1px solid ${theme.colors.gray[300]};
`;

const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing[3]} 0;
  border-bottom: 1px solid ${theme.colors.gray[200]};

  &:last-of-type {
    border-bottom: none;
  }
`;

const ItemInfo = styled.div`
  flex: 1;
`;

const ItemName = styled.p`
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing[1]};
`;

const ItemDetails = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.gray[600]};
`;

const ItemPrice = styled.p`
  font-weight: ${theme.typography.fontWeight.medium};
  margin-left: ${theme.spacing[4]};
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${theme.spacing[3]} 0;
  font-size: ${theme.typography.fontSize.base};

  &.total {
    padding-top: ${theme.spacing[4]};
    border-top: 2px solid ${theme.colors.gray[300]};
    font-size: ${theme.typography.fontSize.lg};
    font-weight: ${theme.typography.fontWeight.medium};
  }
`;

const PlaceOrderButton = styled.button`
  width: 100%;
  padding: ${theme.spacing[4]} ${theme.spacing[6]};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-weight: ${theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${theme.spacing[6]};
  font-size: ${theme.typography.fontSize.base};
  transition: background-color ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    background-color: ${theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
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

export const CheckoutPage: React.FC = () => {
  const { language } = useAppSelector((state) => state.ui);
  const { items, subtotal } = useAppSelector((state) => state.localCart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Contact Information
    email: '',
    phone: '',

    // Shipping Address
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Taiwan',

    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',

    // Special Instructions
    specialInstructions: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, this would redirect to a success page or show confirmation
    alert(language === 'en' 
      ? 'Order placed successfully! You will receive a confirmation email shortly.'
      : '訂單已成功下達！您將很快收到確認電子郵件。');
    
    setIsSubmitting(false);
  };

  const estimatedShipping = subtotal > 50 ? 0 : 5;
  const estimatedTax = subtotal * 0.08;
  const total = subtotal + estimatedShipping + estimatedTax;

  if (items.length === 0) {
    return (
      <PageContainer>
        <div className="container">
          <PageTitle>
            {language === 'en' ? 'Checkout' : '結帳'}
          </PageTitle>
          <EmptyCart>
            <EmptyCartText>
              {language === 'en' ? 'Your cart is empty' : '您的購物車是空的'}
            </EmptyCartText>
          </EmptyCart>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="container">
        <PageTitle>
          {language === 'en' ? 'Checkout' : '結帳'}
        </PageTitle>

        <CheckoutGrid>
          <CheckoutForm onSubmit={handleSubmit}>
            {/* Contact Information */}
            <FormSection>
              <SectionTitle>
                {language === 'en' ? 'Contact Information' : '聯絡資訊'}
              </SectionTitle>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="email">
                    {language === 'en' ? 'Email Address *' : '電子郵件地址 *'}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={language === 'en' ? 'your.email@example.com' : 'your.email@example.com'}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">
                    {language === 'en' ? 'Phone Number' : '電話號碼'}
                  </Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={language === 'en' ? '+886 912 345 678' : '+886 912 345 678'}
                  />
                </FormGroup>
              </FormRow>
            </FormSection>

            {/* Shipping Address */}
            <FormSection>
              <SectionTitle>
                {language === 'en' ? 'Shipping Address' : '送貨地址'}
              </SectionTitle>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">
                    {language === 'en' ? 'First Name *' : '名字 *'}
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="lastName">
                    {language === 'en' ? 'Last Name *' : '姓氏 *'}
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormRow className="single">
                <FormGroup>
                  <Label htmlFor="address">
                    {language === 'en' ? 'Address *' : '地址 *'}
                  </Label>
                  <Input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormRow className="single">
                <FormGroup>
                  <Label htmlFor="apartment">
                    {language === 'en' ? 'Apartment, suite, etc. (optional)' : '公寓、套房等（可選）'}
                  </Label>
                  <Input
                    type="text"
                    id="apartment"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="city">
                    {language === 'en' ? 'City *' : '城市 *'}
                  </Label>
                  <Input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="zipCode">
                    {language === 'en' ? 'Postal Code *' : '郵遞區號 *'}
                  </Label>
                  <Input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormRow className="single">
                <FormGroup>
                  <Label htmlFor="country">
                    {language === 'en' ? 'Country *' : '國家 *'}
                  </Label>
                  <Select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="Taiwan">{language === 'en' ? 'Taiwan' : '台灣'}</option>
                    <option value="Hong Kong">{language === 'en' ? 'Hong Kong' : '香港'}</option>
                    <option value="Singapore">{language === 'en' ? 'Singapore' : '新加坡'}</option>
                    <option value="Japan">{language === 'en' ? 'Japan' : '日本'}</option>
                    <option value="Korea">{language === 'en' ? 'South Korea' : '韓國'}</option>
                  </Select>
                </FormGroup>
              </FormRow>
            </FormSection>

            {/* Payment Information */}
            <FormSection>
              <SectionTitle>
                {language === 'en' ? 'Payment Information' : '付款資訊'}
              </SectionTitle>
              <FormRow className="single">
                <FormGroup>
                  <Label htmlFor="cardNumber">
                    {language === 'en' ? 'Card Number *' : '卡號 *'}
                  </Label>
                  <Input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    required
                    placeholder="1234 5678 9012 3456"
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="expiryDate">
                    {language === 'en' ? 'Expiry Date *' : '到期日 *'}
                  </Label>
                  <Input
                    type="text"
                    id="expiryDate"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    required
                    placeholder="MM/YY"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="cvv">
                    {language === 'en' ? 'CVV *' : 'CVV *'}
                  </Label>
                  <Input
                    type="text"
                    id="cvv"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required
                    placeholder="123"
                  />
                </FormGroup>
              </FormRow>
              <FormRow className="single">
                <FormGroup>
                  <Label htmlFor="nameOnCard">
                    {language === 'en' ? 'Name on Card *' : '持卡人姓名 *'}
                  </Label>
                  <Input
                    type="text"
                    id="nameOnCard"
                    name="nameOnCard"
                    value={formData.nameOnCard}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
              </FormRow>
            </FormSection>
          </CheckoutForm>

          <OrderSummary>
            <SummaryTitle>
              {language === 'en' ? 'Order Summary' : '訂單摘要'}
            </SummaryTitle>

            {items.map((item) => (
              <OrderItem key={item.id}>
                <ItemInfo>
                  <ItemName>
                    {language === 'en' ? item.name : item.nameChinese || item.name}
                  </ItemName>
                  <ItemDetails>
                    {language === 'en' ? 'Quantity:' : '數量：'} {item.quantity}
                  </ItemDetails>
                </ItemInfo>
                <ItemPrice>
                  {formatCurrency(item.price * item.quantity, language)}
                </ItemPrice>
              </OrderItem>
            ))}

            <SummaryRow>
              <span>{language === 'en' ? 'Subtotal' : '小計'}</span>
              <span>{formatCurrency(subtotal, language)}</span>
            </SummaryRow>

            <SummaryRow>
              <span>{language === 'en' ? 'Shipping' : '運費'}</span>
              <span>
                {estimatedShipping === 0 
                  ? (language === 'en' ? 'FREE' : '免費')
                  : formatCurrency(estimatedShipping, language)}
              </span>
            </SummaryRow>

            <SummaryRow>
              <span>{language === 'en' ? 'Tax' : '稅金'}</span>
              <span>{formatCurrency(estimatedTax, language)}</span>
            </SummaryRow>

            <SummaryRow className="total">
              <span>{language === 'en' ? 'Total' : '總計'}</span>
              <span>{formatCurrency(total, language)}</span>
            </SummaryRow>

            <PlaceOrderButton 
              type="submit" 
              form="checkout-form"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting
                ? (language === 'en' ? 'Processing...' : '處理中...')
                : (language === 'en' ? 'Place Order' : '下訂單')}
            </PlaceOrderButton>
          </OrderSummary>
        </CheckoutGrid>
      </div>
    </PageContainer>
  );
};