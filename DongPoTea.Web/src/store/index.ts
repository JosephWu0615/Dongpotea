import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import localCartReducer from './localCartSlice';
import productsReducer from './productsSlice';
import uiReducer from './uiSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    localCart: localCartReducer,
    products: productsReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;