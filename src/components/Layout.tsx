import React, { FC } from "react";
import { useCookies } from "react-cookie";

import Footer from "./Footer";
import {
  NavbarGuest,
  NavbarLogin,
  NavbarForm,
} from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [cookie, setCookie, removeCookie] = useCookies([
    "token",
  ]);
  const checkToken = cookie.token;

  return (
    <div>
      {checkToken ? <NavbarLogin /> : <NavbarGuest />}
      <div className="min-h-[85vh]">{children}</div>
      <Footer />
    </div>
  );
}

export function LayoutForm({ children }: LayoutProps) {
  return (
    <div>
      <NavbarForm />
      <div className="min-h-[85vh]">{children}</div>
      <Footer />
    </div>
  );
}
