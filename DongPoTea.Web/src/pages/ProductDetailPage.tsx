import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { addToCart } from '../store/localCartSlice';
import { theme } from '../assets/styles/theme';
import { getProductById } from '../data/products';

const PageContainer = styled.div`
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

const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing[16]};
  margin-bottom: ${theme.spacing[20]};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing[8]};
  }
`;

const ImageSection = styled.div`
  position: sticky;
  top: 100px;
  align-self: start;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const ImageThumbnails = styled.div`
  display: flex;
  gap: ${theme.spacing[2]};
  margin-top: ${theme.spacing[4]};
`;

const Thumbnail = styled.img<{ $active: boolean }>`
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  opacity: ${({ $active }) => ($active ? 1 : 0.6)};
  border: 2px solid ${({ $active }) => ($active ? theme.colors.black : 'transparent')};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    opacity: 1;
  }
`;

const InfoSection = styled.div``;

const ProductName = styled.h1`
  font-family: ${theme.typography.fontFamily.serif};
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.normal};
  margin-bottom: ${theme.spacing[4]};
  line-height: ${theme.typography.lineHeight.tight};
`;

const ProductPrice = styled.p`
  font-size: ${theme.typography.fontSize['2xl']};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing[8]};
`;

const ProductDescription = styled.div`
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
  margin-bottom: ${theme.spacing[8]};
`;

const AddToCartSection = styled.div`
  display: flex;
  gap: ${theme.spacing[4]};
  align-items: center;
  margin-bottom: ${theme.spacing[8]};
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${theme.colors.gray[300]};
`;

const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
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
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  font-size: ${theme.typography.fontSize.base};
`;

const AddToCartButton = styled.button`
  flex: 1;
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

const ProductTabs = styled.div`
  border-bottom: 1px solid ${theme.colors.gray[200]};
  margin-bottom: ${theme.spacing[6]};
`;

const TabList = styled.div`
  display: flex;
  gap: ${theme.spacing[8]};
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: ${theme.spacing[3]} 0;
  margin-bottom: -1px;
  font-size: ${theme.typography.fontSize.base};
  color: ${({ $active }) => ($active ? theme.colors.black : theme.colors.gray[600])};
  border-bottom: 2px solid ${({ $active }) => ($active ? theme.colors.black : 'transparent')};
  transition: all ${theme.animation.duration.fast} ${theme.animation.easing.out};

  &:hover {
    color: ${theme.colors.black};
  }
`;

const TabContent = styled.div`
  font-size: ${theme.typography.fontSize.base};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: ${theme.colors.gray[700]};
`;

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.ui);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Get product from centralized data
  const productData = getProductById(id || '1');
  
  if (!productData) {
    return (
      <PageContainer>
        <div className="container">
          <h1>Product not found</h1>
          <Link to="/shop">Back to Shop</Link>
        </div>
      </PageContainer>
    );
  }

  // Create product object with additional details
  const product = {
    ...productData,
    images: [
      productData.image,
      productData.image.replace('w=600', 'w=800'),
      productData.image.replace('w=600', 'w=400'),
    ],
    details: {
      origin: language === 'en' ? 'Nantou, Taiwan' : '南投，台灣',
      altitude: language === 'en' ? '1000-1400m' : '1000-1400公尺',
      harvest: language === 'en' ? 'Spring 2024' : '2024年春季',
      processing: language === 'en' ? 'Light fermentation' : '輕發酵',
    },
    brewing: language === 'en'
      ? productData.category === 'teabag'
        ? 'Use 1 tea bag per 250ml of water at 85-90°C. Steep for 3-4 minutes for the first infusion.'
        : 'Use 3-5g of tea leaves per 150ml of water at 85-95°C. First rinse for 5 seconds, then steep for 30-60 seconds.'
      : productData.category === 'teabag'
        ? '每250毫升水使用1個茶包，水溫85-90°C。第一次浸泡3-4分鐘。'
        : '每150毫升水使用3-5克茶葉，水溫85-95°C。先沖洗5秒，然後浸泡30-60秒。',
  };

  const handleQuantityChange = (value: number) => {
    setQuantity(Math.max(1, Math.min(99, value)));
  };

  const handleAddToCart = () => {
    dispatch(addToCart({ 
      productId: product.id, 
      name: product.name,
      nameChinese: product.nameChinese,
      price: product.price,
      quantity,
      image: product.images[0]
    }));
  };

  return (
    <PageContainer>
      <div className="container">
        <Breadcrumb>
          <BreadcrumbLink to="/">
            {language === 'en' ? 'Home' : '首頁'}
          </BreadcrumbLink>
          {' / '}
          <BreadcrumbLink to="/shop">
            {language === 'en' ? 'Shop' : '商店'}
          </BreadcrumbLink>
          {' / '}
          <span>{language === 'en' ? product.name : product.nameChinese}</span>
        </Breadcrumb>

        <ProductLayout>
          <ImageSection>
            <MainImage 
              src={product.images[activeImageIndex]} 
              alt={product.name}
            />
            {product.images.length > 1 && (
              <ImageThumbnails>
                {product.images.map((image, index) => (
                  <Thumbnail
                    key={index}
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    $active={index === activeImageIndex}
                    onClick={() => setActiveImageIndex(index)}
                  />
                ))}
              </ImageThumbnails>
            )}
          </ImageSection>

          <InfoSection>
            <ProductName>
              {language === 'en' ? product.name : product.nameChinese}
            </ProductName>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDescription>
              {language === 'en' ? product.description : product.descriptionChinese}
            </ProductDescription>

            <AddToCartSection>
              <QuantitySelector>
                <QuantityButton 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  disabled={quantity <= 1}
                >
                  -
                </QuantityButton>
                <QuantityInput
                  type="number"
                  value={quantity}
                  onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                  min="1"
                  max="99"
                />
                <QuantityButton onClick={() => handleQuantityChange(quantity + 1)}>
                  +
                </QuantityButton>
              </QuantitySelector>
              <AddToCartButton onClick={handleAddToCart}>
                {language === 'en' ? 'Add to Cart' : '加入購物車'}
              </AddToCartButton>
            </AddToCartSection>

            <ProductTabs>
              <TabList>
                <Tab 
                  $active={activeTab === 'description'} 
                  onClick={() => setActiveTab('description')}
                >
                  {language === 'en' ? 'Description' : '描述'}
                </Tab>
                <Tab 
                  $active={activeTab === 'details'} 
                  onClick={() => setActiveTab('details')}
                >
                  {language === 'en' ? 'Details' : '詳情'}
                </Tab>
                <Tab 
                  $active={activeTab === 'brewing'} 
                  onClick={() => setActiveTab('brewing')}
                >
                  {language === 'en' ? 'Brewing Instructions' : '沖泡說明'}
                </Tab>
              </TabList>
            </ProductTabs>

            <TabContent>
              {activeTab === 'description' && (
                <p>{language === 'en' ? product.description : product.descriptionChinese}</p>
              )}
              {activeTab === 'details' && (
                <div>
                  <p><strong>{language === 'en' ? 'Origin:' : '產地：'}</strong> {product.details.origin}</p>
                  <p><strong>{language === 'en' ? 'Altitude:' : '海拔：'}</strong> {product.details.altitude}</p>
                  <p><strong>{language === 'en' ? 'Harvest:' : '採收：'}</strong> {product.details.harvest}</p>
                  <p><strong>{language === 'en' ? 'Processing:' : '加工：'}</strong> {product.details.processing}</p>
                </div>
              )}
              {activeTab === 'brewing' && (
                <p>{product.brewing}</p>
              )}
            </TabContent>
          </InfoSection>
        </ProductLayout>
      </div>
    </PageContainer>
  );
};