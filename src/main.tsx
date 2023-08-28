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
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
