import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import { LayoutForm } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn, Btns } from "../components/Button";

function Login() {
  const [formLogin, setFormLogin] = useState({
    username: "",
    password: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
  ]);

  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormLogin({
      ...formLogin,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (formLogin.username && formLogin.password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formLogin]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    axios
      .post(
        "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/login",
        formLogin
      )
      .then((res) => {
        console.log(res.data.data);
        setCookie("token", res.data.data.token);

        alert("Success login");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutForm>
      <div className="mx-auto bg-white max-w-md rounded-3xl p-5 my-10">
        <h1 className="text-3xl text-center mb-10">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <InputForm
            id="username"
            title="Username"
            placeholder="Username"
            type="text"
            onChange={handleChange}
            value={formLogin.username}
          />
          <InputForm
            id="password"
            title="Password"
            placeholder="Password"
            type="password"
            onChange={handleChange}
            value={formLogin.password}
          />
          <Btn
            disabled={disabled}
            className="my-3 mt-10"
            label="Login"
          />
        </form>
        <p className="text-center">Or</p>
        <Link to="/register">
          <Btns className="my-3" label="Register" />
        </Link>
      </div>
    </LayoutForm>
  );
}

export default Login;
