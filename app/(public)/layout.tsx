import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "@/components/layout/navbar";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
