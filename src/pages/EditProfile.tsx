import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Layout } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn, Btns } from "../components/Button";
import { Sidebar } from "../components/Sidebar";

function EditProfile() {
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const [cookie] = useCookies(["username"]);
  const navigate = useNavigate();

  const handleEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("phone", phone);

    axios
      .put("https://onallo.store/users", formData)
      .then((res) => {
        alert("Successfully change profile!");
        navigate(`/profile/${cookie.username}`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const deleteProfile = () => {
    axios
      .delete("https://onallo.store/users")
      .then((res) => {
        alert("successfully delete profile");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

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
              <form onSubmit={handleEdit}>
                <InputForm
                  title="Username"
                  type={"text"}
                  placeholder={"Username"}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <InputForm
                  title="Full Name"
                  type={"text"}
                  placeholder={"Full Name"}
                  onChange={(e) => setFullname(e.target.value)}
                />
                <InputForm
                  title="Email"
                  type={"email"}
                  placeholder={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputForm
                  title="Phone Number"
                  type={"text"}
                  placeholder={"Phone Number"}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <InputForm
                  title="Address"
                  type={"text"}
                  placeholder={"Address"}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <InputForm
                  title="City"
                  type={"text"}
                  placeholder={"City"}
                  onChange={(e) => setCity(e.target.value)}
                />
                <Btn
                  className="w-full mt-8"
                  label="Submit"
                  type="submit"
                ></Btn>
                <div className="flex justify-end pt-8"></div>
              </form>
              <Btns
                label="delete account"
                onClick={deleteProfile}
              ></Btns>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditProfile;
