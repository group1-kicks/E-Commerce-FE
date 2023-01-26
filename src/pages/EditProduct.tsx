import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";

import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Btns } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

function EditProduct() {
  const [cookie] = useCookies(["token"]);
  const { product_id } = useParams();

  const [product_name, setProduct_name] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<any>(0);
  const [image, setImage] = useState<any>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", product_name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${cookie.token}`,
      },
    };
    axios
      .put(`https://onallo.store/products/${product_id}`, formData, config)
      .then((res) => {
        alert("Product successfully updated!");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <Layout>
      <div className="w-full h-[50rem]">
        <div className="w-full bg-white h-20 justify-start text-4xl flex items-center p-5">
          <h1>Edit product</h1>
        </div>
        <div className="flex">
          <Sidebar />
          <div
            className=" pt-8 w-full justify-center flex justify-items-center
            h-auto"
          >
            <div className="  rounded-2xl flex flex-col h-[40rem] p-12 w-4/6  bg-white">
              <form onSubmit={handleSubmit} encType="multipart/form-data">
                <p className="font-semibold text-xl">Product Name</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  sepatu"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) => setProduct_name(e.target.value)}
                />
                <p className="font-semibold text-lg pt-3">Price</p>
                <InputForm
                  id=""
                  type={"number"}
                  placeholder={"  1000000"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) => setPrice(e.target.value)}
                />
                <p className="font-semibold text-xl pt-4">Description</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Description"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <input
                  type={"file"}
                  onChange={(e: any) => setImage(e.target.files[0])}
                ></input>
                <div className="flex justify-end">
                  <Btn className="w-44" label="Edit Product"></Btn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProduct;
