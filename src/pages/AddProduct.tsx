import React from "react";
import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";

function AddProduct() {
  return (
    <Layout>
      <div className="w-full h-[50rem]">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center">
          <h1>Create new product</h1>
        </div>
        <div className="flex">
          <img
            className=" rounded-full"
            src="https://pics.freeicons.io/uploads/icons/png/7287311761535956910-512.png"
          />
          <h1 className="text-2xl">Username</h1>
        </div>
        <div
          className=" pt-8 w-full justify-center flex justify-items-center
           h-auto"
        >
          <div className="  rounded-2xl flex flex-col h-[35rem] p-12 w-1/2  bg-white">
            <form>
              <p className="font-semibold text-xl">Product Name</p>
              <InputForm
                id=""
                type={"text"}
                placeholder={"  sepatu"}
                className="w-full h-12 rounded-lg bg-slate-300 "
              />
              <p className="font-semibold text-lg pt-3">Price</p>
              <InputForm
                id=""
                type={"number"}
                placeholder={"  1000000"}
                className="w-full h-12 rounded-lg bg-slate-300 "
              />
              <p className="font-semibold text-xl pt-4">Description</p>
              <InputForm
                id=""
                type={"text"}
                placeholder={"  Description"}
                className="w-full h-40 rounded-lg bg-slate-300 "
              />
              <div className="h-16" />
              <div className="flex justify-end ">
                <Btn label="Add Product"></Btn>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProduct;
