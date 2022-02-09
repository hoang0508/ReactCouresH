import React from "react";

const Input = () => {
  return (
    <div className="p-5">
      <input
        type="text"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
      />
    </div>
  );
};

export default Input;
