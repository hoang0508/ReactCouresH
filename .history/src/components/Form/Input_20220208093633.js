import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullName] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="p-5">
      <input
        type="text"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={() => handleInputChange()}
      />
    </div>
  );
};

export default Input;
