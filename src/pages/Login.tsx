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
    "id",
    "username",
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
      .post("https://onallo.store/login", formLogin)
      .then((res) => {
        console.log(res.data.data);
        setCookie("id", res.data.data.id);
        setCookie("username", res.data.data.username);
        setCookie("token", res.data.token);

        alert("Success login");
        navigate("/");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutForm>
      <div
        className="hero h-screen max-h-[90vh]"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1552066344-2464c1135c32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
        )`,
        }}
      >
        <span className="hero-overlay bg-opacity-60" />
        <div className="mx-auto backdrop-blur-3xl bg-white/30 w-full max-w-md rounded-3xl p-5 my-10">
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
      </div>
    </LayoutForm>
  );
}

export default Login;
