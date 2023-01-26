import React, { useState, useEffect } from "react";
import axios from "axios";

import { Layout } from "../components/Layout";
import { CardShop } from "../components/Card";
import { Waveform } from "@uiball/loaders";
import { FaAngleDoubleDown } from "react-icons/fa";

import { ItemTypes } from "../utils/Type";

function Shop() {
  const [items, setItems] = useState<ItemTypes[]>([]);
  const [page, setPage] = useState<number>(2);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchDataItems(1);
  }, []);

  function fetchDataItems(page: number) {
    axios
      .get(`https://onallo.store/products/?page=${page}`)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => setLoading(false));
  }

  function nextPage() {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const newPage = page + 1;
    fetch(
      `https://onallo.store/products/?page=${page}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((res) => {
        const results = res.data;
        const result = items.slice();
        result.push(...results);
        setItems(result);
        setPage(newPage);
      })
      .catch((error) => {
        alert(error.toString());
      });
  }

  return (
    <Layout>
      <h1 className="text-4xl text-center p-5 bg-white shadow-sm">
        Shop
      </h1>
      <div className="flex justify-center">
        {loading ? (
          <div className="flex items-center h-[70vh]">
            <Waveform size={100} lineWeight={8} />
          </div>
        ) : (
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
        )}
      </div>
      <button
        className="text-5xl w-full flex justify-center bg-secondary p-3"
        onClick={() => nextPage()}
      >
        <FaAngleDoubleDown />
        next
        <FaAngleDoubleDown />
      </button>
    </Layout>
  );
}

export default Shop;
