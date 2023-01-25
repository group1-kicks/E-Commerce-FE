import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { Btn } from "../components/Button";
import { Cardprofile } from "../components/Card";
import { IoIosPerson } from "react-icons/io";

import { UserTypes } from "../utils/Type";

function MyProfile() {
  const [users, setUsers] = useState<UserTypes>();

  useEffect(() => {
    fetchDataUser();
  }, [setUsers]);

  function fetchDataUser() {
    axios
      .get(
        "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/users"
      )
      .then((res) => {
        setUsers(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  function deleteItemUser(user: UserTypes) {
    axios
      .delete(
        `https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/products/${user.product}`
      )
      .then((res) => {
        console.log(res);
        alert(`You've removed this items!`);
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
                  {users?.name}
                </h1>
                <p>{users?.city}</p>
              </div>
            </div>
            <Link to="/new-item">
              <Btn
                className="max-w-xs"
                label="Add New Product"
              />
            </Link>
          </div>
          <div className="p-8 grid lg:grid-cols-3">
            {users?.product.map((user, index) => (
              <Cardprofile
                key={index}
                id={user.product_id}
                image={user.image}
                title={user.product_name}
                price={user.price}
                deleteItem={deleteItemUser}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
