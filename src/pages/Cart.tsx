import React from "react";
import { Layout } from "../components/Layout";
import CardCart from "../components/CardCart";
import { Btn } from "../components/Button";

function Cart() {
  return (
    <Layout>
      <div className="w-full h-full font-semibold text-xl">
        <div
          className="w-full bg-white h-20 justify-center text-4xl flex items-center

        "
        >
          <h1>Cart</h1>
        </div>
        <div
          className="flex justify-center pt-8
         "
        >
          <p className=" self-center ">items</p>
          <p className="pl-48 self-center ">Quantity</p>
          <p className="pl-48 self-center ">Price</p>
        </div>
        <div className="flex justify-center pt-8">
          <CardCart
            key={1}
            id={1}
            image={
              "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/bac37b3a-4a82-4d7e-a0ef-69000ce91066/react-infinity-3-road-running-shoes-mMGgGZ.png"
            }
            title={"Nike React Infinity 3"}
            quantity={1}
            price={2000000}
          />
        </div>
        <div
          className="h-60
        "
        />
        <div className="bg-white h-28 flex justify-around pt-8 ">
          <p>Total Price</p>
          <p className="text-primary">Rp.4,998,000</p>
        </div>
        <div className="justify-end pr-32 flex pb-8 bg-white">
          <Btn className="w-40" label="checkout" />
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
