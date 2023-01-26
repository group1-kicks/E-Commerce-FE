import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import CardCart from "../components/CardCart";
import { Btn } from "../components/Button";
import { Link } from "react-router-dom";

interface CartType {
  product_id?: number;
  image?: string;
  product_name?: string;
  seller_name?: string;
  price?: number;
  quantity?: number;
  stock?: number;
}

function Cart() {
  const [cartItems, setCartItems] = useState<CartType[]>([]);

  useEffect(() => {
    fetchCart;
  }, []);

  function fetchCart() {
    axios
      .get("https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/carts")
      .then((res) => {
        setCartItems(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }
  const handleDelete = ({ cart_id }: { cart_id: CartType }) => {
    axios
      .delete(
        `https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/carts/${cart_id}`
      )
      .then((res) => {
        alert("successfully delete items");
        setCartItems((prev) =>
          prev.filter((item) => item.product_id !== cart_id)
        );
      })
      .catch((err) => {
        alert("Error deleting item from cart");
      });
  };

  const handleUpdate = ({ cart_id }: { cart_id: CartType }) => {
    axios
      .put(
        `https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/carts/${cart_id}`,
        cart_id
      )
      .then((res) => {
        alert("successfully update items");
        setCartItems((prev) =>
          prev.map((item) =>
            item.product_id === cart_id.product_id ? cart_id : item
          )
        );
      })
      .catch((err) => {
        alert("Error updating item from cart");
      });
  };

  return (
    <Layout>
      <div className="w-full h-full font-semibold text-xl">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center ">
          <h1>Cart</h1>
        </div>
        <div className="flex justify-center pt-8">
          <p className=" self-center ">items</p>
          <p className="pl-48 self-center ">Quantity</p>
          <p className="pl-48 self-center ">Price</p>
        </div>
        <div className="flex justify-center pt-8">
          {cartItems.map((item, index) => (
            <CardCart
              key={index}
              id={item.product_id}
              image={item.image}
              title={item.product_name}
              quantity={item.quantity}
              price={item.price}
              onDelete={() => handleDelete}
              onUpdate={() => handleUpdate}
            />
          ))}
        </div>
        <div className="h-60" />
        <div className="bg-white h-28 flex justify-around pt-8 ">
          <p>Total Price</p>
          <p className="text-primary">Rp.4,998,000</p>
        </div>
        <div className="justify-end pr-32 flex pb-8 bg-white">
          <Link to="/checkout">
            <Btn className="w-40" label="checkout" />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
