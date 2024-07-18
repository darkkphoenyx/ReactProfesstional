import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Services from "../pages/Services";
import GuestLayout from "../layouts/GuestLayout";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GuestLayout></GuestLayout>}>
          <Route path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/about" element={<AboutUs></AboutUs>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
