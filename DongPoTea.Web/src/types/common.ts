export interface ApiError {
  message: string;
  status: number;
  details?: Record<string, string[]>;
}

export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Translation {
  en: string;
  zh?: string;
}

export type Language = 'en' | 'zh-TW';

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}