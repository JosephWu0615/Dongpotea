import { Address } from './common';

export interface Order {
  id: string;
  orderNumber: string;
  customerId?: string;
  customerEmail: string;
  subtotal: number;
  tax: number;
  shippingCost: number;
  total: number;
  currency: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: string;
  shippingAddress: Address;
  billingAddress: Address;
  notes?: string;
  orderItems: OrderItem[];
  createdAt: string;
  updatedAt?: string;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  productSKU: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface CreateOrderRequest {
  customerInfo: {
    email: string;
    firstName: string;
    lastName: string;
    phone?: string;
  };
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethodId: string;
}

export type OrderStatus = 
  | 'Pending'
  | 'Processing'
  | 'Shipped'
  | 'Delivered'
  | 'Cancelled';

export type PaymentStatus = 
  | 'Pending'
  | 'Paid'
  | 'Failed'
  | 'Refunded';