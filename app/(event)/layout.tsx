import React, { ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "@/components/layout/navbar";
import FooterSection from "@/components/sections/landing/footer";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] pt-6"
      suppressHydrationWarning={true}
    >
      <Navbar />
      {children}
      <FooterSection />
    </div>
  );
};

export default Layout;
