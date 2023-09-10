import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAdminDetails {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IAuthState {
  token: string | null;
  adminDetails: IAdminDetails | null;
}

const initialState: IAuthState = {
  token: null,
  adminDetails: null,
};

export const adminSlice = createSlice({
  name: "adminAuth",
  initialState,
  reducers: {
    setAdminToken: (
      state,
      action: PayloadAction<{ token: string; adminDetails: IAdminDetails }>
    ) => {
      localStorage.setItem(
        "authentication",
        JSON.stringify({
          token: action.payload.token,
          userDetails: action.payload.adminDetails,
        })
      );

      state.token = action.payload.token;
      state.adminDetails = action.payload.adminDetails;
    },
    clearAdminToken: (state) => {
      state.token = null;
      state.adminDetails = null;
    },
    logoutAdmin: (state) => {
      state.token = null;
      state.adminDetails = null;
    },
  },
});

export const { setAdminToken, logoutAdmin, clearAdminToken } =
  adminSlice.actions;
export default adminSlice.reducer;
