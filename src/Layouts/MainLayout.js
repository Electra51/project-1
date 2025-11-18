import React from "react";
import Header from "../component/Header/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <div>footer</div>
    </>
  );
};

export default MainLayout;
