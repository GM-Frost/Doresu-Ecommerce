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
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
