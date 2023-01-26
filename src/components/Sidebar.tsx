import React from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

export function Sidebar() {
  const [cookie] = useCookies(["username"]);

  return (
    <div className="bg-white w-full max-w-[200px] min-h-[85vh]">
      <div className="flex flex-col gap-5 mx-4 pt-8">
        <Link
          to={`/profile/${cookie.username}`}
          className="active:text-primary active:font-bold"
        >
          <p>Profile</p>
        </Link>
        <Link
          to={`/profile-edit/${cookie.username}`}
          className="active:text-primary active:font-bold"
        >
          <p>Edit Profile</p>
        </Link>
        <Link
          to="/transactions"
          className="active:text-primary active:font-bold"
        >
          <p>Transactions</p>
        </Link>
      </div>
    </div>
  );
}
