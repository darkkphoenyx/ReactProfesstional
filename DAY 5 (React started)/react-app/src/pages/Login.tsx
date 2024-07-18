import React from "react";
import LoginComponent from "../components/input/LoginComponent";

export default function Login() {
  return (
    <div className="h-screen w-screen">
      <div className="grid h-full bg-[url(./assets/loginBackground.png)] bg-no-repeat bg-cover px-12 bg-center">
        <div className=" bg-white/15 border border-gray-300 rounded-xl p-8 mx-auto mt-32 h-fit backdrop-blur-md ">
          <h1 className="text-center text-5xl font-bold mb-6 text-[#fff]">
            Login
          </h1>
          <LoginComponent placeholder="Username"></LoginComponent>
          <LoginComponent
            placeholder="Password"
            type="password"
          ></LoginComponent>
          <div className="grid grid-flow-col mt-1">
            <input className="bg-white ml-1 accent-[#CC5BF5]" type="checkbox" />
            <label className="pr-3 pl-1 text-white" htmlFor="#">
              Remember Me
            </label>
            <a className="pl-5 pr-1 underline text-white" href="#">
              Forget Password?
            </a>
          </div>
          <div className="mt-5 flex items-center justify-center border border-[#D14F2B]/5 text-white hover:text-black  rounded-3xl bg-[#281F8C]/90 hover:bg-[#D759FB]/55 mx-1">
            <button className=" font-semibold hover:font-semibold text-xl p-2 px-10 rounded-xl ">
              Login
            </button>
          </div>
          <div className="flex items-center justify-center mt-6 font-normal">
            <span>Don't have an account?</span>
            <a className="ml-2 underline text-white" href="#">
              Register Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
