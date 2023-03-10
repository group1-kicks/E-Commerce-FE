import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { LayoutForm } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";

function Register() {
  const [formRegister, setFormRegister] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [rePass, setRePass] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setFormRegister({
      ...formRegister,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      formRegister.fullname &&
      formRegister.username &&
      formRegister.email &&
      formRegister.password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formRegister]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (rePass !== formRegister.password) {
      alert("Password not match");
      return;
    }
    axios
      .post("https://onallo.store/register", formRegister)
      .then(() => {
        alert("Success signup");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <LayoutForm>
      <div
        className="hero h-screen"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1554192460-c1898f833545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
        )`,
        }}
      >
        <span className="hero-overlay bg-opacity-60" />
        <div className="mx-auto backdrop-blur-3xl bg-white/30 w-full max-w-md rounded-3xl p-5 my-10">
          <h1 className="text-3xl text-center mb-10">Register</h1>
          <form onSubmit={handleSubmit}>
            <InputForm
              id="username"
              title="Username"
              placeholder="Username"
              type="text"
              onChange={handleChange}
              value={formRegister.username}
            />
            <InputForm
              id="fullname"
              title="Full Name"
              placeholder="Full Name"
              type="text"
              onChange={handleChange}
              value={formRegister.fullname}
            />
            <InputForm
              id="email"
              title="Email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
              value={formRegister.email}
            />
            <InputForm
              id="password"
              title="Password"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              value={formRegister.password}
            />
            <InputForm
              id="password"
              title="Confirm Password"
              placeholder="Confirm Password"
              type="password"
              onChange={(e) => setRePass(e.target.value)}
              value={rePass}
            />
            <p className="text-sm">
              Already have an account?
              <Link
                className="text-primary font-bold ml-1"
                to="/login"
              >
                login
              </Link>
            </p>
            <Btn
              disabled={disabled}
              className="my-10"
              label="Register"
            />
          </form>
        </div>
      </div>
    </LayoutForm>
  );
}

export default Register;
