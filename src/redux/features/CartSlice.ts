import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  id: string;
  title: string;
  description: string;
  price: number;
  brand: string;
  color: {
    id: string;
    name: string;
  };
  sizes: {
    id: string;
    name: string;
    quantity: number;
  }[];
  images: {
    id: string;
    imageUrl: string;
  }[];
  category: {
    id: string;
    name: string;
  };
}

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
    },
    increaseItemCount: (state, action: PayloadAction<string>) => {
      // Decrease the count of the product with the matching id
      const product = state.items.find((item) => item.id === action.payload);

      if (product && product.count) {
        product.count += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseItemCount: (state, action: PayloadAction<string>) => {
      // Decrease the count of the product with the matching id
      const product = state.items.find((item) => item.id === action.payload);

      if (product && product.count > 1) {
        product.count -= 1;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseItemCount,
  decreaseItemCount,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
