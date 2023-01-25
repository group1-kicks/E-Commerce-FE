import React, { useState } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Btns } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

interface ProductType {
  product_id: number;
  product_name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
}

function AddProduct() {
  const [product, setProduct] = useState<ProductType>({
    product_id: 1,
    product_name: "",
    description: "",
    price: 1,
    image: "",
    stock: 1,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post(
        "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/products",
        product
      )
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
        alert("Product added successfully!");
      })
      .catch((error) => {
        alert(error.tostring());
      });
  };
  return (
    <Layout>
      <div className="w-full h-[50rem]">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center">
          <h1>Create new product</h1>
        </div>
        <div className="flex">
          <Sidebar />
          <img
            className=" rounded-full"
            src="https://pics.freeicons.io/uploads/icons/png/7287311761535956910-512.png"
          />
          <h1 className="text-2xl">Username</h1>
          <div
            className=" pt-8 w-full justify-center flex justify-items-center
          h-auto"
          >
            <div className="  rounded-2xl flex flex-col h-[30rem] p-12 w-4/6  bg-white">
              <form onSubmit={handleSubmit}>
                <p className="font-semibold text-xl">Product Name</p>
                <InputForm
                  id=""
                  name="product_name"
                  type={"text"}
                  placeholder={"  sepatu"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={handleChange}
                />
                <p className="font-semibold text-lg pt-3">Price</p>
                <InputForm
                  id=""
                  name="price"
                  type={"number"}
                  placeholder={"  1000000"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={handleChange}
                />
                <p className="font-semibold text-xl pt-4">Description</p>
                <InputForm
                  id=""
                  name="description"
                  type={"text"}
                  placeholder={"  Description"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                  onChange={handleChange}
                />
                <br />
                <Btns className="w-44" label="input image"></Btns>
                <br />
                <div className="flex justify-end">
                  <Btn className="w-44" label="Add Product"></Btn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
