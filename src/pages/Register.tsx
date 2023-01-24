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
          <p>Email/Username</p>
          <InputForm />
        </div>
        <div className="mb-5">
          <p>Password</p>
          <InputForm />
        </div>
        <div className="flex flex-col gap-3 my-5">
          <Btn label="Register" />
          <p className="text-center">Or</p>
          <Link to="/register">
            <Btns label="Register" />
          </Link>
        </div>
      </div>
    </LayoutForm>
  );
}

export default Register;
