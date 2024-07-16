import React from "react";
import LoginComponent from "../input/LoginComponent";

export default function Login() {
  return (
    <div className="h-screen container mx-auto ">
      <div className="mx-6 grid h-full bg-[url(./assets/mountain.png)] bg-no-repeat bg-cover">
        <div className="w-2/6  bg-white/15 border border-gray-300 rounded-2xl p-8 mx-auto mt-32 h-fit backdrop-blur-md ">
          <h1 className="text-center text-2xl font-bold ">
            Welcome to the Dark Side
            <div className="text-sm font-normal text-gray-100 mb-5">
              Login to access your personal account.
            </div>
          </h1>
          <LoginComponent
            label="Email / Username:"
            placeholder="Username"
          ></LoginComponent>
          <LoginComponent
            label="Password:"
            placeholder="Password"
            type="password"
          ></LoginComponent>
          <div className="grid grid-flow-col mt-1">
            <input
              className="ml-1 required checked:bg-white accent-white"
              type="checkbox"
            />
            <label className="mr-2 ml-1 text-white" htmlFor="#">
              Remember Me
            </label>
            <a className="ml-16 underline text-white" href="#">
              Forget Password?
            </a>
          </div>
          <div className="mt-4  flex items-center justify-center">
            <button className="border  hover:bg-white/30 font-bold text-xl  border-white p-2 px-10 rounded-xl ">
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
