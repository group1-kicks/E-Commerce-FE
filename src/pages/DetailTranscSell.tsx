import React from "react";
import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { Btn } from "../components/Button";

function DetailTranscSell() {
  return (
    <Layout>
      <div className="w-full  h-[50rem]">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center">
          <h1>Detail transactions | Selling</h1>
        </div>
        <div className="flex">
          <Sidebar />
          <div className="flex font-semibold text-lg flex-col m-16 w-full bg-white p-8 rounded-3xl">
            <div className="flex justify-between items-center py-2">
              <p className="pl-8 text-2xl font-bold">Invoice</p>
              <p className="text-2xl font-bold">Status</p>
              <p className="pr-8 text-2xl font-bold">Date</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="pl-8">inv/2133/089bvjb</p>
              <p>on proces</p>
              <p className="pr-8">24 jan 2023</p>
            </div>
            <div className="flex justify-between items-center py-8">
              <img
                className="w-32 pl-8 rounded-lg"
                src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/bac37b3a-4a82-4d7e-a0ef-69000ce91066/react-infinity-3-road-running-shoes-mMGgGZ.png"
                alt="spt"
              />
              <p>Nike React Infinity 3</p>
              <p>1</p>
              <p className="text-primary pr-8">Rp.5000000</p>
            </div>
            <div className="flex justify-between items-center py-8">
              <p className="pl-8">Total price</p>
              <p className=" text-primary pr-8">Rp.5000000</p>
            </div>
            <div className="flex justify-end">
              <Btn className="w-52" label="Accept Order" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailTranscSell;

//   <div
//     className=" font-semibold text-xl pt-12 w-full justify-center flex justify-items-center
// h-auto"
//   >
//     <div className="  rounded-2xl flex flex-col h-[35rem] p-12 w-4/5  bg-white">
//       <p>Invoice</p>
