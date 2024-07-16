import React, { useState } from "react";

export default function LoginComponent({
  label = "Username",
  placeholder = "Username",
  type = "text",
}) {
  const [show, setShow] = useState({ showPassword: false });

  const showHide = () => {
    setShow({ showPassword: !show.showPassword });
  };
  return (
    <div className="h-fit rounded-md grid grid-flow-row my-2 p-1">
      <label className="text-sm font-semibold" htmlFor="#">
        {label}
      </label>
      {type == "text" ? (
        <input
          type="text"
          placeholder={placeholder}
          className="border placeholder:text-gray-100 text-white border-gray-300 font-medium rounded-lg px-2 p-1 outline-none bg-transparent "
        />
      ) : (
        <div className="grid grid-flow-col grid-col-12 w-full border border-gray-300 rounded-lg mt-1">
          <div className="col-span-11">
            <input
              type={show.showPassword ? "text" : "password"}
              placeholder={placeholder}
              className="border-none rounded-lg font-medium h-fit mt-1 placeholder:text-gray-100 text-white px-2 mr-4 outline-none bg-transparent "
            />
          </div>
          <div
            onClick={() => showHide()}
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
