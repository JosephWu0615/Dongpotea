import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../types/common';

interface UIState {
  language: Language;
  isMobileMenuOpen: boolean;
  isQuickViewOpen: boolean;
  quickViewProductId: string | null;
  notification: {
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  } | null;
}

const initialState: UIState = {
  language: (localStorage.getItem('language') as Language) || 'en',
  isMobileMenuOpen: false,
  isQuickViewOpen: false,
  quickViewProductId: null,
  notification: null,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      localStorage.setItem('language', action.payload);
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    openQuickView: (state, action: PayloadAction<string>) => {
      state.isQuickViewOpen = true;
      state.quickViewProductId = action.payload;
    },
    closeQuickView: (state) => {
      state.isQuickViewOpen = false;
      state.quickViewProductId = null;
    },
    showNotification: (state, action: PayloadAction<{ message: string; type: 'success' | 'error' | 'info' | 'warning' }>) => {
      state.notification = action.payload;
    },
    hideNotification: (state) => {
      state.notification = null;
    },
  },
});

export const {
  setLanguage,
  toggleMobileMenu,
  closeMobileMenu,
  openQuickView,
  closeQuickView,
  showNotification,
  hideNotification,
} = uiSlice.actions;

export default uiSlice.reducer;