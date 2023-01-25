import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

import { Btn, Btns } from "./Button";
import {
  IoIosPerson,
  IoIosCart,
  IoMdMenu,
} from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi";

export function NavbarGuest() {
  return (
    <div className="navbar bg-primary text-white p-5">
      <Link
        to="/"
        className="navbar-start items-center gap-2"
      >
        <img
          src="https://svgshare.com/i/pkJ.svg"
          alt=""
          className="w-12"
        />
        <h1 className="text-3xl">Kicks.</h1>
      </Link>
      <div className="navbar-end">
        <Link to="/login">
          <Btn label={"Login"} />
        </Link>
      </div>
    </div>
  );
}

export function NavbarLogin() {
  const [cookie, setCookie, removeCookie] = useCookies([
    "token",
  ]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeCookie("token");
    alert("You've been log out");
    navigate("/");
  };

  return (
    <div className="navbar bg-primary text-white p-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <IoMdMenu className="text-3xl" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <Link
              to="/profile/:id_user"
              className="flex items-center gap-2"
            >
              <IoIosPerson className="text-2xl" />
              <a>Profile</a>
            </Link>
            <Link
              to="/shop"
              className="flex items-center gap-2"
            >
              <HiShoppingBag className="text-2xl" />
              <a>Shop</a>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-2"
            >
              <IoIosCart className="text-2xl" />
              <a>Cart</a>
            </Link>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://svgshare.com/i/pkJ.svg"
            alt=""
            className="w-12"
          />
          <h1 className="text-3xl">Kicks.</h1>
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="flex gap-8">
          <Link
            to="/profile/:id_user"
            className="flex items-center gap-2"
          >
            <IoIosPerson className="text-2xl" />
            <a>Profile</a>
          </Link>
          <Link
            to="/shop"
            className="flex items-center gap-2"
          >
            <HiShoppingBag className="text-2xl" />
            <a>Shop</a>
          </Link>
          <Link
            to="/cart"
            className="flex items-center gap-2"
          >
            <IoIosCart className="text-2xl" />
            <a>Cart</a>
          </Link>
        </ul>
      </div>
      <div className="navbar-end lg:max-w-[120px]">
        <Btns
          onClick={handleLogOut}
          className="max-w-[90px]"
          label={"Logout"}
        />
      </div>
    </div>
  );
}

export function NavbarForm() {
  return (
    <div className="navbar bg-primary text-white p-5">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://svgshare.com/i/pkJ.svg"
            alt=""
            className="w-12"
          />
          <h1 className="text-3xl">Kicks.</h1>
        </Link>
      </div>
    </div>
  );
}
