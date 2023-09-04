import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IUserDetails {
  firstname: string;
  lastname: string;
  email: string;
}

export interface IAuthState {
  token: string | null;
  userDetails: IUserDetails | null;
}

const initialState: IAuthState = {
  token: null,
  userDetails: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ token: string; userDetails: IUserDetails }>
    ) => {
      localStorage.setItem(
        "authentication",
        JSON.stringify({
          token: action.payload.token,
          userDetails: action.payload.userDetails,
        })
      );

      state.token = action.payload.token;
      state.userDetails = action.payload.userDetails;
    },

    logout: (state) => {
      state.token = null;
      state.userDetails = null;
    },
  },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;
