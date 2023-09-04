import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";

interface ICredential {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  firstname: string;
  lastname: string;
  email: string;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8081/api/v1/auth" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<AuthResponse, ICredential>({
      query: (credential) => ({
        url: "register",
        method: "POST",
        body: credential,
      }),
    }),
    loginUser: builder.mutation<AuthResponse, ICredential>({
      query: (credential) => ({
        url: "authenticate",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useRegisterUserMutation, useLoginUserMutation } = authApi;
