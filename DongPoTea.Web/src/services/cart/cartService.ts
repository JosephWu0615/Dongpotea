import { apiClient } from '../api/config';
import { Cart, AddToCartRequest, UpdateCartItemRequest } from '../../types/cart';

export const cartService = {
  // Get current cart
  async getCart(): Promise<Cart> {
    const { data } = await apiClient.get<Cart>('/cart');
    return data;
  },

  // Add item to cart
  async addToCart(request: AddToCartRequest): Promise<Cart> {
    const { data } = await apiClient.post<Cart>('/cart/items', request);
    return data;
  },

  // Update cart item quantity
  async updateCartItem(itemId: string, request: UpdateCartItemRequest): Promise<Cart> {
    const { data } = await apiClient.put<Cart>(`/cart/items/${itemId}`, request);
    return data;
  },

  // Remove item from cart
  async removeFromCart(itemId: string): Promise<Cart> {
    const { data } = await apiClient.delete<Cart>(`/cart/items/${itemId}`);
    return data;
  },

  // Clear entire cart
  async clearCart(): Promise<void> {
    await apiClient.delete('/cart');
  },
};