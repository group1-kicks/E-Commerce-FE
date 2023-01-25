import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { LayoutForm } from "../components/Layout";
import { InputForm } from "../components/Input";
import { Btn } from "../components/Button";

function Register() {
  const [formRegister, setFormRegister] = useState({
    username: "",
    name: "",
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
      formRegister.name &&
      formRegister.username &&
      formRegister.email &&
      formRegister.password
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [formRegister]);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (rePass !== formRegister.password) {
      alert("Password not match");
      return;
    }
    axios
      .post(
        "https://virtserver.swaggerhub.com/audizzy/ecommerce/1.0.0/register",
        formRegister
      )
      .then((res) => {
        console.log(res);
        alert("Success signup");
        navigate("/login");
      })
      .catch((err) => {
        alert(err.toString());
      });
  };

  return (
    <LayoutForm>
      <div className="mx-auto bg-white max-w-md rounded-3xl p-5 my-10">
        <h1 className="text-3xl text-center mb-10">
          Register
        </h1>
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
            id="name"
            title="Full Name"
            placeholder="Full Name"
            type="text"
            onChange={handleChange}
            value={formRegister.name}
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
    </LayoutForm>
  );
}

export default Register;
