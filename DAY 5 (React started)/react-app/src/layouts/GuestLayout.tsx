import React, { Fragment } from "react";
import Header from "../components/navbar/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";
import HomePage from "../pages/HomePage";

export default function GuestLayout() {
  return (
    <Fragment>
      <Header />
      <Outlet />
      <Footer/>
    </Fragment>
  );
}
