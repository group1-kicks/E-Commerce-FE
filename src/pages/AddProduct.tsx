import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

function AddProduct() {
  const [product_name, setProduct_name] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<any>(0);
  const [image, setImage] = useState<any>({});

  const [cookie] = useCookies(["token"]);

  const handleAddProduct = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

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
      .post("https://onallo.store/products", formData, config)
      .then((res) => {
        alert("Product added successfully!");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };
  return (
    <Layout>
      <div className="w-full h-[50rem]">
        <header className="bg-white border-b-8 border-secondary text-4xl p-5">
          <h1>Add product</h1>
        </header>
        <div className="flex">
          <Sidebar />
          <div
            className=" pt-8 w-full justify-center flex justify-items-center
          h-auto"
          >
            <div className="  rounded-2xl flex flex-col h-[40rem] p-12 w-4/6  bg-white">
              <form
                onSubmit={handleAddProduct}
                encType="multipart/form-data"
              >
                <InputForm
                  id=""
                  title="Product Name"
                  type={"text"}
                  placeholder={"Item Name"}
                  onChange={(e) => setProduct_name(e.target.value)}
                />
                <InputForm
                  id=""
                  title="Price"
                  type={"number"}
                  placeholder={"Price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <InputForm
                  id=""
                  title="Description"
                  type={"text"}
                  placeholder={"Description"}
                  onChange={(e) => setDescription(e.target.value)}
                />
                <p className="my-4 font-bold text-lg">
                  Select Images
                </p>
                <input
                  type={"file"}
                  onChange={(e: any) => setImage(e.target.files[0])}
                ></input>
                <Btn className="mt-16" label="Add Product"></Btn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
