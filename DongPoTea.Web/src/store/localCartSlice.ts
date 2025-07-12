import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  productId: string;
  name: string;
  nameChinese?: string;
  price: number;
  quantity: number;
  image: string;
}

interface LocalCartState {
  items: CartItem[];
  isOpen: boolean;
  subtotal: number;
  itemCount: number;
}

const initialState: LocalCartState = {
  items: [],
  isOpen: false,
  subtotal: 0,
  itemCount: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { subtotal, itemCount };
};

const localCartSlice = createSlice({
  name: 'localCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{
      productId: string;
      name: string;
      nameChinese?: string;
      price: number;
      quantity: number;
      image: string;
    }>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          id: `cart-${Date.now()}`,
          ...action.payload,
        });
      }
      
      const { subtotal, itemCount } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.itemCount = itemCount;
      state.isOpen = true;
    },
    
    updateQuantity: (state, action: PayloadAction<{ itemId: string; quantity: number }>) => {
      const item = state.items.find(item => item.id === action.payload.itemId);
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity;
        const { subtotal, itemCount } = calculateTotals(state.items);
        state.subtotal = subtotal;
        state.itemCount = itemCount;
      }
    },
    
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      const { subtotal, itemCount } = calculateTotals(state.items);
      state.subtotal = subtotal;
      state.itemCount = itemCount;
    },
    
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.itemCount = 0;
      state.isOpen = false;
    },
    
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    
    openCart: (state) => {
      state.isOpen = true;
    },
    
    closeCart: (state) => {
      state.isOpen = false;
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  removeFromCart,
  clearCart,
  toggleCart,
  openCart,
  closeCart,
} = localCartSlice.actions;

export default localCartSlice.reducer;