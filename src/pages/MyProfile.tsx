import React from "react";

import { Layout } from "../components/Layout";
import { Sidebar } from "../components/Sidebar";

function MyProfile() {
  return (
    <Layout>
      <div className="shadow-lg">
        <h1 className="text-4xl text-center p-5 bg-white">Profile</h1>
      </div>
      <div className="flex">
        <Sidebar />
        <div></div>
      </div>
    </Layout>
  );
}

export default MyProfile;
