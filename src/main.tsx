import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import "./global.css";
import Login from "./pages/welcome/Login";
import Register from "./pages/welcome/Register";
import Home from "./pages/home/Home";
import Product from "./pages/products/Product";
import Order from "./pages/orders/Order";
import Store from "./pages/products/Store";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/app/Store";
import { PersistGate } from "redux-persist/integration/react";
import Checkout from "./pages/checkout/Checkout";
import OrderDetails from "./pages/orders/OrderDetails";
import OrderConfirm from "./pages/checkout/OrderConfirm";
import AdminDash from "./Admin/Home/AdminDash";
import Dashboard from "./Admin/Home/Dashboard";
import AdminProducts from "./Admin/Home/ProductPage/AdminProducts";
import AdminUsers from "./Admin/Home/UserPage/AdminUsers";
import SingleUser from "./Admin/Home/UserPage/SingleUser";
import SingleProduct from "./Admin/Home/ProductPage/SingleProduct";
import AdminOrders from "./Admin/Home/OrderPage/AdminOrders";
import SingleOrder from "./Admin/Home/OrderPage/SingleOrder";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <AdminDash />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <AdminProducts /> },
      { path: "products/:id", element: <SingleProduct /> },
      { path: "users", element: <AdminUsers /> },
      { path: "users/:id", element: <SingleUser /> },
      { path: "orders", element: <AdminOrders /> },
      { path: "orders/:orderID", element: <SingleOrder /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/register", element: <Register /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/account/orders",
        element: <Order />,
      },
      {
        path: "/account/orders/:orderID",
        element: <OrderDetails />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/checkout/orderconfirm",
        element: <OrderConfirm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
