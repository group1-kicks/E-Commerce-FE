import React from "react";
import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Btns } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

function EditProfile() {
  return (
    <Layout>
      <div className="w-full h-[55rem]">
        <div className="w-full bg-white h-20 justify-center text-4xl flex items-center">
          <h1>Edit Profile</h1>
        </div>
        <div className="flex">
          <Sidebar />
          <div
            className=" pt-8 w-full justify-center flex justify-items-center
          h-auto"
          >
            <div className="  rounded-2xl flex flex-col h-[45rem] p-12 w-4/6  bg-white">
              <form>
                <p className="font-semibold text-xl">Username</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Username"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                />
                <p className="font-semibold text-lg pt-3">Full Name</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Full name"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                />
                <p className="font-semibold text-xl pt-4">Email</p>
                <InputForm
                  id=""
                  type={"email"}
                  placeholder={"  Email address"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                />
                <p className="font-semibold text-xl pt-4">Phone Number</p>
                <InputForm
                  id=""
                  type={"number"}
                  placeholder={"  08987656788"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                />
                <p className="font-semibold text-xl pt-4">Address</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  JL.Sudirman"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                />
                <p className="font-semibold text-xl pt-4">City</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Jakarta"}
                  className="w-full h-40 rounded-lg bg-slate-300 "
                />
                <br />
                <Btn className="w-full" label="Submit"></Btn>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
