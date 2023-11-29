import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Subscribe from "@/components/Subscribe/Subscribe";
import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <header className="bg-slate-100">
        <Navbar />
        <Breadcrumbs />
      </header>
      <main className="p-10">
        {children}
        <Subscribe />
      </main>
      <Footer />
    </>
  );
};

export default layout;
