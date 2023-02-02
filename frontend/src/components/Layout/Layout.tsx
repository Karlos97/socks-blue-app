import React from "react";
import { Footer } from "./Footer/Footer";
import "./layout.module.scss";
import { Header } from "./Header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export { Layout };
