import React, { useState } from "react";

const Input = () => {
  const [fullname, setFullName] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };
  const { message, setMessage } = useState();
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className="p-5">
      {fullname}
      <input
        type="text"
        name={fullname}
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={(e) => handleInputChange(e)}
      />
      {message}
      <textarea
        name="message"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={(e) => handleTextareaChange(e)}
      ></textarea>
    </div>
  );
};

export default Input;
