import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8083/api/admin/auth",
  }),
  endpoints: (builder) => ({
    registerAdmin: builder.mutation<AuthResponse, ICredential>({
      query: (credential) => ({
        url: "register",
        method: "POST",
        body: credential,
      }),
    }),
    loginAdmin: builder.mutation<AuthResponse, ICredential>({
      query: (credential) => ({
        url: "authenticate",
        method: "POST",
        body: credential,
      }),
    }),
  }),
});

export const { useRegisterAdminMutation, useLoginAdminMutation } = adminApi;
