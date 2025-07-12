export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  estimatedTax: number;
  estimatedShipping: number;
  total: number;
}

export interface CartItem {
  id: string;
  product: CartProduct;
  quantity: number;
  subtotal: number;
}

export interface CartProduct {
  id: string;
  name: string;
  price: number;
  primaryImage?: {
    url: string;
    altText?: string;
  };
  stockQuantity: number;
}

export interface AddToCartRequest {
  productId: string;
  quantity: number;
}

export interface UpdateCartItemRequest {
  quantity: number;
}