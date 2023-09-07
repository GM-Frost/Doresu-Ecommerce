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

const router = createBrowserRouter([
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
