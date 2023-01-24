import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Shop from "../pages/Shop";
import DetailItems from "../pages/DetailItems";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import MyProfile from "../pages/MyProfile";
import Transaction from "../pages/Transaction";
import EditProfile from "../pages/EditProfile";
import AddProduct from "../pages/AddProduct";
import DetailTransc from "../pages/DetailTransc";

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
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/profile/:id_user",
    element: <MyProfile />,
  },
  {
    path: "/transactions",
    element: <Transaction />,
  },
  {
    path: "/profile-edit/:id_user",
    element: <EditProfile />,
  },
  {
    path: "/new-item",
    element: <AddProduct />,
  },
  {
    path: "/order/:id_order",
    element: <DetailTransc />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;