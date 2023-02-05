import React from "react";
import { Footer } from "src/components/Layout/Footer/Footer";
import { Header } from "src/components/Layout/Header/Header";
import "./layout.module.scss";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export { Layout };
