import React from "react";
import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="bg-white w-full max-w-xs h-screen">
      <div className="flex flex-col gap-5 mx-4">
        <Link to="/profile/:id_user">
          <p>Profile</p>
        </Link>
        <Link to="/profile-edit/:id_user">
          <p>Edit Profile</p>
        </Link>
        <Link to="/transactions">
          <p>Transactions</p>
        </Link>
      </div>
    </div>
  );
}
