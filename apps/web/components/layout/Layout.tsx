import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = (props) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="mt-8 mb-2 custom-container">{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
