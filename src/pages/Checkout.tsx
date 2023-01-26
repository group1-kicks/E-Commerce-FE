import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import CardCheckout from "../components/CardCheckout";
import { Btn } from "../components/Button";

interface CheckoutType {
  cart_id: number;
  product_id: number;
  quantity: number;
  subtotal: number;
}

function Checkout() {
  const [checkoutData, setCheckoutData] = useState<CheckoutType>({
    cart_id: 1,
    product_id: 1,
    quantity: 1,
    subtotal: 2000000,
  });

  const handleOrder = () => {
    // alert("success");
    axios
      .post(
        "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/orders",
        checkoutData
      )
      .then((res) => {
        setCheckoutData(res.data.data);
        console.log(res.data.data);
        alert("Order Success");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <Layout>
      <div className="w-full h-full font-semibold text-xl">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center">
          <h1>Checkout</h1>
        </div>
        <p className="pl-40 pt-8">Seller Username</p>
        <div className="flex justify-center pt-8 ">
          <p className=" self-center ">items</p>
          <p className="pl-48 self-center ">Quantity</p>
          <p className="pl-48 self-center ">Price</p>
        </div>
        <div className="flex justify-center  pt-8">
          <CardCheckout
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
        <div className="h-40 pl-40 pt-8">
          <p>Shipment Detail</p>
          <br />
          <p>Address:</p>
        </div>
        <div className=" flex justify-center pb-8 h-40">
          <div className="w-3/5 bg-white rounded-lg ">
            <p className="p-8">Jl. sudirman</p>
          </div>
        </div>
        <div className="bg-white h-28 flex justify-around pt-8 ">
          <p>Total Price</p>
          <p className="text-primary">Rp.4,998,000</p>
        </div>
        <div className="justify-end pr-32 flex pb-8 bg-white">
          <button className="w-40 " onClick={handleOrder}>
            order
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
