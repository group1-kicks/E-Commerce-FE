import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";

import { Layout } from "../components/Layout";
import { Btn } from "../components/Button";
import { IoIosCart, IoIosPerson, IoIosLocate } from "react-icons/io";

import { ItemTypes } from "../utils/Type";

function DetailItems() {
  const [item, setItem] = useState<ItemTypes>();

  const { product_id } = useParams();
  const id = useParams()["id_item"];

  const [cookie] = useCookies(["token"]);
  const checkToken = cookie.token;

  useEffect(() => {
    fetchDataItem();
  }, []);

  function fetchDataItem() {
    console.log(product_id);
    axios
      .get(`https://onallo.store/products/${id}`)
      .then((res) => {
        setItem(res.data.data);
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  function handleToCart() {
    axios
      .post("")
      .then(() => {})
      .catch(() => {});
  }

  return (
    <Layout>
      <div className="flex p-5 lg:p-24 bg-gradient-to-b from-secondary to-white min-h-[90vh]">
        <div className="flex flex-col">
          <img
            className="w-96 rounded-3xl"
            src={item?.image}
            alt={item?.product_name}
          />
          <div className="flex justify-between">
            <h1 className="flex items-center gap-1 tracking-tight">
              {<IoIosPerson />}
              {item?.seller_name}
            </h1>
            <h1 className="flex items-center gap-1 tracking-tight">
              {<IoIosLocate />}
              {item?.city}
            </h1>
          </div>
        </div>
        <div className="w-full pl-10">
          <h1 className="text-5xl">{item?.product_name}</h1>
          <p className="text-3xl text-primary">Rp. {item?.price}</p>
          <p className="mt-24 p-10 rounded-xl bg-gradient-to-b from-white to-white/20">
            {item?.description}
          </p>
          <div className="w-full flex justify-end">
            {checkToken ? (
              <Btn
                className="mt-5 max-w-xs"
                label={"Add To Cart"}
                icon={<IoIosCart className="ml-2 text-xl" />}
                onClick={() => handleToCart()}
              />
            ) : (
              <Btn
                className="mt-5 max-w-xs"
                label={"Add To Cart"}
                icon={<IoIosCart className="ml-2 text-xl" />}
                disabled={true}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailItems;
