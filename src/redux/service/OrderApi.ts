import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface OrderSummary {
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
  orderItems: {
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
  }[];
}

export const orderSummaryApi = createApi({
  reducerPath: "orderSummaryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8082/api/v1/orders" }),
  endpoints: (builder) => ({
    createOrderSummary: builder.mutation<OrderSummary, OrderSummary>({
      query: (orders) => ({
        url: "create",
        method: "POST",
        body: orders,
      }),
    }),
  }),
});

export const { useCreateOrderSummaryMutation } = orderSummaryApi;
