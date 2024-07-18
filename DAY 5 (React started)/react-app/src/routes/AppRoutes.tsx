import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Services from "../pages/Services"
import GuestLayout from "../layouts/GuestLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout></GuestLayout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
