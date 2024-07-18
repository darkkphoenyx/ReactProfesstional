import React, { useState } from "react";

export default function LoginComponent({
  placeholder = "Username",
  type = "text",
  // errorMsg = "Invalid Credentials",
}) {
  const [show, setShow] = useState({ showPassword: false });

  const toggle = () => {
    setShow({ showPassword: !show.showPassword });
  };
  return (
    <div className="h-fit rounded-md grid grid-flow-row my-2 p-1">
      <label
        className="text-sm font-semibold text-gray-200"
        htmlFor="#"
      ></label>
      {type == "text" ? (
        <div className="grid grid-flow-col grid-col-12 w-full border-b-2 mb-1 border-gray-300 mt-1">
          <div className="col-span-11">
            <input
              type="text"
              placeholder={placeholder}
              className=" w-full placeholder:text-gray-300 placeholder:font-normal text-white font-normal px-2 p-1 outline-none bg-transparent "
            />
          </div>
          <div className="col-span-1 hover:text-gray-500 text-white p-1 overflow-hidden mx-auto w-full">
            <img src="./assets/account.svg" alt="Account Icon" />
          </div>
        </div>
      ) : (
        <div className="grid grid-flow-col grid-col-12 w-full border-b-2 mb-1 border-gray-300 mt-1">
          <div className="col-span-11">
            <input
              type={show.showPassword ? "text" : "password"}
              placeholder={placeholder}
              className=" w-full font-normal h-fit mt-1 placeholder:font-normal placeholder:text-gray-300 text-white px-2 mr-4 outline-none bg-transparent "
            />
          </div>
          <div
            onClick={() => toggle()}
            className="col-span-1 hover:text-gray-500 text-white p-1 cursor-pointer overflow-hidden mx-auto w-full"
          >
            {show.showPassword == true ? (
              <img
                className="text-white"
                src="./assets/eye-off.svg"
                alt="eyeToggle"
              />
            ) : (
              <img
                className="text-white"
                src="./assets/eye.svg"
                alt="eyeToggle"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
