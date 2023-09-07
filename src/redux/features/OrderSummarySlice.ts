import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
interface IDeliveryAddress {
  firstName: string;
  lastName: string;
  addressLine: string;
  phoneNumber: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}
interface OrderSummaryState {
  orderId: string;
  userId: string;
  accFirstname: string;
  accLastname: string;
  accEmail: string;
  orderDate: string;
  status: string;
  totalPrice: number;
  deliveryAddress: IDeliveryAddress | null;
  orderItems: IOrderItem[];
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
  deliveryAddress: null,
  orderItems: [],
};

const orderSummarySlice = createSlice({
  name: "orderSummary",
  initialState,
  reducers: {
    // Add actions for adding/removing order items and setting the delivery address
    setOrderSummary: (state, action: PayloadAction<OrderSummaryState>) => {
      return { ...state, ...action.payload };
    },
    setDeliveryAddress: (state, action: PayloadAction<IDeliveryAddress>) => {
      state.deliveryAddress = action.payload;
    },
  },
});

export const { setOrderSummary, setDeliveryAddress } =
  orderSummarySlice.actions;

export default orderSummarySlice.reducer;
