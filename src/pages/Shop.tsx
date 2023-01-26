import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout } from "../components/Layout";
import { CardShop } from "../components/Card";

import { ItemTypes } from "../utils/Type";

function Shop() {
  const [items, setItems] = useState<ItemTypes[]>([]);

  useEffect(() => {
    fetchDataItems();
  }, []);

  function fetchDataItems() {
    axios
      .get("https://onallo.store/products")
      .then((res) => {
        setItems(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <Layout>
      <h1 className="text-4xl text-center p-5 bg-white shadow-sm">
        Shop
      </h1>
      <div className="flex justify-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <CardShop
              key={index}
              id={item.product_id}
              image={item.image}
              title={item.product_name}
              price={item.price}
              seller={item.seller_name}
              loc={item.city}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
