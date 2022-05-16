import React from "react";
import SideBar from "../components/SideBar";

const Layout = () => {
  return (
    <div className="bg-dark flex">
      <aside className="w-60 fixed left-0 h-screen">
        <SideBar />
      </aside>
      <main className="flex-1 ml-60 p-10 text-light min-h-screen">
        <h1>Main</h1>
      </main>
    </div>
  );
};

export default Layout;
