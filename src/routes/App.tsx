import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    path: "/transactions-selling",
    element: <TranscSell />,
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
    path: "/edit-item/:product_id",
    element: <EditProduct />,
  },
  {
    path: "/buying/:id_order",
    element: <DetailTransc />,
  },
  {
    path: "/selling/:id_order",
    element: <DetailTranscSell />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
