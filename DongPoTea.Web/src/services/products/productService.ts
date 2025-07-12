import { apiClient } from '../api/config';
import { Product, ProductListItem, ProductFilters, PaginatedResponse, Category } from '../../types/product';

export const productService = {
  // Get all products with pagination and filtering
  async getProducts(filters?: ProductFilters): Promise<PaginatedResponse<ProductListItem>> {
    const { data } = await apiClient.get<PaginatedResponse<ProductListItem>>('/products', {
      params: filters,
    });
    return data;
  },

  // Get single product by ID
  async getProductById(id: string): Promise<Product> {
    const { data } = await apiClient.get<Product>(`/products/${id}`);
    return data;
  },

  // Get related products
  async getRelatedProducts(productId: string, count: number = 4): Promise<ProductListItem[]> {
    const { data } = await apiClient.get<ProductListItem[]>(`/products/${productId}/related`, {
      params: { count },
    });
    return data;
  },

  // Get all categories
  async getCategories(): Promise<Category[]> {
    const { data } = await apiClient.get<{ data: Category[] }>('/categories');
    return data.data;
  },

  // Get category by slug
  async getCategoryBySlug(slug: string): Promise<Category> {
    const { data } = await apiClient.get<Category>(`/categories/${slug}`);
    return data;
  },
};