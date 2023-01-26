import React from "react";
import axios, { AxiosHeaders } from "axios";
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import DetailItems from "../pages/DetailItems";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import MyProfile from "../pages/MyProfile";
import Transaction from "../pages/TranscBuy";
import EditProfile from "../pages/EditProfile";
import AddProduct from "../pages/AddProduct";
import DetailTransc from "../pages/DetailTransc";
import EditProduct from "../pages/EditProduct";
import DetailTranscSell from "../pages/DetailTranscSell";
import TranscSell from "../pages/TranscSell";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/detail/:id_item",
      element: <DetailItems />,
    },
    {
      path: "/cart",
      element: checkToken ? <Cart /> : <Login />,
    },
    {
      path: "/checkout",
      element: checkToken ? <Checkout /> : <Login />,
    },
    {
      path: "/profile/:id_user",
      element: checkToken ? <MyProfile /> : <Login />,
    },
    {
      path: "/transactions",
      element: checkToken ? <Transaction /> : <Login />,
    },
    {
      path: "/transactions-selling",
      element: checkToken ? <TranscSell /> : <Login />,
    },
    {
      path: "/profile-edit/:id_user",
      element: checkToken ? <EditProfile /> : <Login />,
    },
    {
      path: "/new-item",
      element: checkToken ? <AddProduct /> : <Login />,
    },
    {
      path: "/edit-item/:product_id",
      element: checkToken ? <EditProduct /> : <Login />,
    },
    {
      path: "/buying/:id_order",
      element: checkToken ? <DetailTransc /> : <Login />,
    },
    {
      path: "/selling/:id_order",
      element: checkToken ? <DetailTranscSell /> : <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
