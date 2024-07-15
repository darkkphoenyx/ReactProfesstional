import React from "react";
import Logo from "../logo/Logo";

export default function Header() {
  const listStyle =
    "list-none float-left text-lg uppercase font-bold cursor-pointer hover:text-[#2C7EE8] ml-28";
  return (
    <div className="bg-slate-200">
      <div className=" w-full h-20 grid grid-flow-col container mx-auto">
        <div className="col-span-2">
          <Logo></Logo>
        </div>
        <div className="col-span-8 mx-[100px]">
          <ul className="text-blue-900 float-end mt-6 mx-10">
            <li className={listStyle}>Home</li>
            <li className={listStyle}>Services</li>
            <li className={listStyle}>About Us</li>
            <li className={listStyle}>Contact Us</li>
          </ul>
        </div>
        <div className="col-span-2">Login</div>
      </div>
    </div>
  );
}
