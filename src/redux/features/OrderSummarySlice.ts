import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOrderItem {
  productId: string;
  productName: string;
  productBrand: string;
  productColor: string;
  productSize: string;
  category: string;
  quantity: number;
  price: number;
  subtotal: number;
  images: string;
}

export interface OrderSummaryState {
  orderId: string;
  userId: string;
  accFirstname: string;
  accLastname: string;
  accEmail: string;
  orderDate: string;
  status: string;
  totalPrice: number;
  deliveryAddress: {
    firstName: string;
    lastName: string;
    addressLine: string;
    phoneNumber: string;
    city: string;
    province: string;
    postalCode: string;
    country: string;
  };
  orderItems: IOrderItem[];
  loading: boolean;
  error: string | null;
}

const initialState: OrderSummaryState = {
  orderId: "",
  userId: "",
  accFirstname: "",
  accLastname: "",
  accEmail: "",
  orderDate: "",
  status: "",
  totalPrice: 0,
  deliveryAddress: {
    firstName: "",
    lastName: "",
    addressLine: "",
    phoneNumber: "",
    city: "",
    province: "",
    postalCode: "",
    country: "",
  },
  orderItems: [],
  loading: false,
  error: null,
};

const createOrderSummarySlice = createSlice({
  name: "createOrderSummary",
  initialState,
  reducers: {
    createOrderSummaryRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    createOrderSummarySuccess: (state) => {
      state.loading = false;
      state.error = null;
    },
    createOrderSummaryFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setOrdersState: (state, action: PayloadAction<OrderSummaryState>) => {
      return action.payload;
    },
  },
});

export const {
  createOrderSummaryRequest,
  createOrderSummarySuccess,
  createOrderSummaryFailure,
  setOrdersState,
} = createOrderSummarySlice.actions;

export default createOrderSummarySlice.reducer;
