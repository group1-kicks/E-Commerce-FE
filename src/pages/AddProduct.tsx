import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

function AddProduct() {
  const [productname, setProductname] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<any>(0);
  const [image, setImage] = useState<any>({});

  const [cookie] = useCookies(["token", "username"]);
  const navigate = useNavigate();

  const handleAddProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("product_name", productname);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    axios
      .post("https://onallo.store/products", formData)
      .then((res) => {
        alert("Product added successfully!");
        navigate(`/profile/${cookie.username}`);
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
                  title="Product Name"
                  type={"text"}
                  placeholder={"Item Name"}
                  onChange={(e) => setProductname(e.target.value)}
                />
                <InputForm
                  title="Price"
                  type={"number"}
                  placeholder={"Price"}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <InputForm
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
