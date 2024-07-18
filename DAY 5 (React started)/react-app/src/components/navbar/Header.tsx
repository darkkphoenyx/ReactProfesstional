import React from "react";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  const navListStyle =
    "list-none float-left text-lg uppercase font-bold cursor-pointer hover:text-[#2C7EE8] ml-28 hover:underline";
  const loginListStyle =
    "float-start p-3 mx-1 text-black font-bold hover:text-black cursor-pointer hover:bg-slate-300 hover:rounded-2xl";
  return (
    <div className="bg-slate-200">
      <div className=" w-full h-20 grid grid-flow-col container mx-auto ">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-7 ">
          <ul className="text-blue-900 float-end mt-6 mx-10">
            <li className={navListStyle}>
              <Link to={"/"}> Home</Link>
            </li>
            <li className={navListStyle}>
              <Link to={"services"}>Services</Link>
            </li>
            <li className={navListStyle}>
              <a href="#">About Us</a>
            </li>
            <li className={navListStyle}>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="col-span-3">
          <ul className="mt-3.5 ml-20 text-center float-end">
            <li className={loginListStyle}>
              <Link to={"login"}> Login</Link>
            </li>
            <li className={loginListStyle}>Signup</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
