export interface Product {
  id: string;
  name: string;
  nameChinese?: string;
  description?: string;
  descriptionChinese?: string;
  sku: string;
  price: number;
  stockQuantity: number;
  weight?: number;
  inStock: boolean;
  category?: Category;
  primaryImage?: ProductImage;
  images: ProductImage[];
}

export interface ProductListItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  inStock: boolean;
  category?: Category;
  primaryImage?: ProductImage;
}

export interface Category {
  id: string;
  name: string;
  nameChinese?: string;
  slug: string;
  productCount: number;
}

export interface ProductImage {
  id: string;
  url: string;
  altText?: string;
  isPrimary: boolean;
}

export interface ProductFilters {
  category?: string;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    currentPage: number;
    pageSize: number;
    totalPages: number;
    totalItems: number;
  };
}