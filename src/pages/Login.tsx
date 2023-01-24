import React from "react";
import { Link } from "react-router-dom";

import { LayoutForm } from "../components/Layout";
import { InputForm } from "../components/Input";
import { RememberMe } from "../components/Checkbox";
import { Btn, Btns } from "../components/Button";

function Login() {
  return (
    <LayoutForm>
      <div className="mx-auto bg-white max-w-md rounded-3xl p-5 my-10">
        <h1 className="text-3xl text-center mb-10">Login</h1>
        <div className="mb-5">
          <p>Email/Username</p>
          <InputForm placeholder="Email/Username" />
        </div>
        <div className="mb-5">
          <p>Password</p>
          <InputForm placeholder="Password" type="password" />
        </div>
        <RememberMe />
        <div className="flex flex-col gap-3 my-5">
          <Btn label="Login" />
          <p className="text-center">Or</p>
          <Link to="/register">
            <Btns label="Register" />
          </Link>
        </div>
      </div>
    </LayoutForm>
  );
}

export default Login;
