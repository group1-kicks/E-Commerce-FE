import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";
import { Btns } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

interface EditProfileType {
  username: string;
  name: string;
  email: string;
  city: string;
  phone: string;
}
function EditProfile() {
  const [data, setData] = useState<EditProfileType>({
    username: "",
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  async function updateProfile() {
    try {
      await axios
        .put(
          "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/users",
          data
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteProfile() {
    try {
      await axios
        .delete(
          "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/users"
        )
        .then((res) => {
          console.log(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="w-full h-[70 rem]">
        <header className="bg-white border-b-8 border-secondary text-4xl p-5">
          <h1>Edit Profile</h1>
        </header>
        <div className="flex">
          <Sidebar />
          <div
            className=" pt-8 w-full justify-center flex justify-items-center
          h-auto"
          >
            <div className="  rounded-2xl flex flex-col h-[60rem] p-12 w-4/6  bg-white">
              <form>
                <p className="font-semibold text-xl">Username</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Username"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <p className="font-semibold text-lg pt-3">Full Name</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Full name"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <p className="font-semibold text-xl pt-4">Email</p>
                <InputForm
                  id=""
                  type={"email"}
                  placeholder={"  Email address"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <p className="font-semibold text-xl pt-4">Phone Number</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  08987656788"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <p className="font-semibold text-xl pt-4">Address</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  JL.Sudirman"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <p className="font-semibold text-xl pt-4">City</p>
                <InputForm
                  id=""
                  type={"text"}
                  placeholder={"  Jakarta"}
                  className="w-full h-12 rounded-lg bg-slate-300 "
                  onChange={(e) =>
                    setData({ ...data, username: e.target.value })
                  }
                />
                <br />
                <Btn
                  className="w-full"
                  label="Submit"
                  onClick={updateProfile}
                ></Btn>
                <div className="flex justify-end pt-8">
                  <Btns
                    label="delete account"
                    className="w-48"
                    onClick={deleteProfile}
                  ></Btns>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
