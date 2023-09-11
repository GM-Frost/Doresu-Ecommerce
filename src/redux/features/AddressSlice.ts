import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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

const initialState: IDeliveryAddress = {
  firstName: "",
  lastName: "",
  addressLine: "",
  phoneNumber: "",
  city: "",
  province: "",
  postalCode: "",
  country: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<IDeliveryAddress>) => {
      return { ...state, ...action.payload };
    },
    clearAddress: (state) => {
      return { ...initialState };
    },
  },
});

export const { setAddress, clearAddress } = addressSlice.actions;

export default addressSlice.reducer;
