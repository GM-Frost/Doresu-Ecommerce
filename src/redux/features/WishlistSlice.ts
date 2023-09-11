import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductTypes } from "../types/ProductsTypes";

export interface IWishlistItem {
  id: string;
  title: string;
  price: number;
  brand: string;
}

interface WishlistState {
  items: IWishlistItem[]; // Use your product type here
}

const initialState: WishlistState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IWishlistItem>) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingProduct) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearWishlist: (state) => {
      state.items = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
