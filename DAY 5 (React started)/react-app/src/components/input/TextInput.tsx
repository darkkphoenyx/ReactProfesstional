import React from "react";

const TextInput=({
  type = "",
  placeholder = "",
  name = "",
  className = "",
  // onchange = () => {
  //   null;
  // },
}) =>{
  return (
    <>
      <input
        type={type}
        className={className}
        name={name}
        // onChange={() => onchange()}
        placeholder={placeholder}
      />
    </>
  );
}
export default TextInput

// TextInput({ placeholder = "" }); --> no arguemets
// TextInput({ placeholder = "HELLO" }); --> default arguemets
