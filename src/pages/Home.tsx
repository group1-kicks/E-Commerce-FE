import React from "react";

import { Layout } from "../components/Layout";
import { Btn } from "../components/Button";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div
        className="hero h-screen max-h-[90vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1779&q=80
        )`,
        }}
      >
        <span className="hero-overlay bg-opacity-60" />
        <div className="hero-content text-center flex flex-col">
          <h1 className="text-8xl text-secondary">
            Kicks.
          </h1>
          <p className="max-w-md text-white">
            There's something special about having a new
            pair of sneakers. Starting from that new sneaker
            smell to the feeling of having fresh kicks on
            your feet!{" "}
          </p>
          <Link to="/shop">
            <Btn
              label="Shop Now"
              icon={
                <HiOutlineShoppingBag className="text-xl" />
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
