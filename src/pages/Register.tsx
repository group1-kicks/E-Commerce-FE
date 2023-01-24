import React from "react";
import { Link } from "react-router-dom";

import { LayoutForm } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn, Btns } from "../components/Button";

function Register() {
  return (
    <LayoutForm>
      <div className="mx-auto bg-white max-w-md rounded-3xl p-5 my-10">
        <h1 className="text-3xl text-center mb-10">Register</h1>
        <div className="mb-5">
          <p>Username</p>
          <InputForm placeholder="Username" />
        </div>
        <div className="mb-5">
          <p>Full Name</p>
          <InputForm placeholder="Full Name" />
        </div>
        <div className="mb-5">
          <p>Email</p>
          <InputForm placeholder="Email" />
        </div>
        <div className="mb-5">
          <p>Password</p>
          <InputForm placeholder="Password" type="password" />
        </div>
        <div className="mb-5">
          <p>Confirm Password</p>
          <InputForm placeholder="Confirm Password" type="password" />
        </div>
        <div className="flex flex-col gap-3 my-10">
          <Btn label="Register" />
        </div>
      </div>
    </LayoutForm>
  );
}

export default Register;
