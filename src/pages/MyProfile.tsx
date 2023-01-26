import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { Btn } from "../components/Button";
import { Cardprofile } from "../components/Card";
import { IoIosPerson } from "react-icons/io";

import { UserTypes } from "../utils/Type";
import { HiMenuAlt1 } from "react-icons/hi";

function MyProfile() {
  const [users, setUsers] = useState<UserTypes>();
  const [cookie] = useCookies(["token"]);

  useEffect(() => {
    fetchDataUser();
  }, [setUsers]);

  function fetchDataUser() {
    axios
      .get("https://onallo.store/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <header className="bg-white border-b-8 border-secondary p-5">
        <h1 className="text-4xl">Profile</h1>
      </header>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col items-center w-full p-8">
          <div className="flex justify-between w-full">
            <div className="flex items-center">
              <IoIosPerson className="text-6xl text-primary" />
              <div className="ml-2">
                <h1 className="tracking-tight uppercase">
                  {users?.fullname}
                </h1>
                <p>{users?.city}</p>
              </div>
            </div>
            <Link to="/new-item">
              <Btn className="max-w-xs" label="Add New Product" />
            </Link>
          </div>
          <div className="p-8 grid lg:grid-cols-3">
            {users?.product !== null ? (
              users?.product.map((user, index) => (
                <Cardprofile
                  key={index}
                  id={user.product_id}
                  image={user.image}
                  title={user.name}
                  price={user.price}
                />
              ))
            ) : (
              <p className="w-full mt-10 tracking-tight">
                {users.fullname} doesn't have any items yet, please
                add items first!
              </p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
