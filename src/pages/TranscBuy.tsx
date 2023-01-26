import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
Link;

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { CardTransc } from "../components/Card";

import { OrdersTypes } from "../utils/Type";

function DetailTransc() {
  const [orders, setOrders] = useState<OrdersTypes[]>([]);

  useEffect(() => {
    fetchDataOrders();
  }, [setOrders]);

  function fetchDataOrders() {
    axios
      .get("https://onallo.store/orders?history=buy")
      .then((res) => {
        setOrders(res.data.data);
        // alert("success");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <Layout>
      <header className="bg-white border-b-8 border-secondary p-5">
        <h1 className="text-4xl">Transactions</h1>
      </header>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col items-center w-full p-8">
          <>
            <div className="flex justify-center items-center h-10 gap-10 bg-white rounded-2xl w-full max-w-sm">
              <Link to="/transactions">Buying</Link>
              <p>|</p>
              <Link to="/transactions-selling">Selling</Link>
            </div>
            <CardTransc
              id={1}
              image={`https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2bce59c-b55e-4104-9a57-4b432ca1ed68/jordan-delta-3-low-shoes-fQrm6Q.png`}
              invoice={`XVII/20231/UDSIDJ`}
              status={`On Process`}
              date={`21 Januari 2023`}
            />
            {orders.map((order, index) => {
              {
                console.log(order.order_id);
              }
              {
                console.log(order.order_status);
              }
              {
                console.log(order.order_date);
              }
              <CardTransc
                key={index}
                id={order.order_id}
                invoice={order.invoice}
                status={order.order_status}
                date={order.order_date}
              />;
            })}
          </>
        </div>
      </div>
    </Layout>
  );
}

export default DetailTransc;
