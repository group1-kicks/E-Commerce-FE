import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";
import { Btn } from "../components/Button";
import { Cardprofile } from "../components/Card";

import { UserTypes } from "../utils/Type";

function MyProfile() {
  const [user, setUser] = useState<UserTypes>();

  useEffect(() => {
    fetchDataUser();
  }, [setUser]);

  function fetchDataUser() {
    axios
      .get("https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/users")
      .then((res) => {
        setUser(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        alert(err.toString());
      });
  }

  return (
    <Layout>
      <header className="bg-white border-b-8 border-secondary p-5">
        <h1 className="text-4xl text-center">Profile</h1>
      </header>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex flex-col w-full p-8">
          <div className="flex justify-between w-full">
            <div className="flex item">
              <img
                className="w-24 h-20 rounded-xl"
                src={`https://pbs.twimg.com/media/FnPXcgiaUAIIiHS?format=jpg&name=medium`}
                alt={`username`}
              />
              <div className="ml-2">
                <h1 className="tracking-tight uppercase">{user?.name}</h1>
                <p>{user?.city}</p>
              </div>
            </div>
            <Link to="/new-item">
              <Btn className="max-w-xs" label="Add New Product" />
            </Link>
          </div>
          <div className="p-8 grid grid-cols-3">
            {user?.product.map((user, index) => (
              <Cardprofile
                key={index}
                id={user.product_id}
                image={user.image}
                title={user.product_name}
                price={user.price}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MyProfile;
