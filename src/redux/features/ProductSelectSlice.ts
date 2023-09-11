import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductTypes } from "../types/ProductsTypes";

interface ProductSelectState {
  selectedProduct: IProductTypes | null;
}

const initialState: ProductSelectState = {
  selectedProduct: null,
};

const productSelectSlice = createSlice({
  name: "productSelect",
  initialState,
  reducers: {
    setSelectedProduct: (
      state,
      action: PayloadAction<IProductTypes | null>
    ) => {
      state.selectedProduct = action.payload;
    },
    clearProductSelection: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearProductSelection } =
  productSelectSlice.actions;
export default productSelectSlice.reducer;
