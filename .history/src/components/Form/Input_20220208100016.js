import React, { useState } from "react";

const Input = () => {
  //
  const [fullname, setFullName] = useState("");
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };
  //
  const [message, setMessage] = useState("");
  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
  };
  //
  const [country, setCountry] = useState("");
  const handleSelectChange = (e) => {
    setCountry(e.target.value);
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
      <select name="" onChange={(e) => handleSelectChange(e)}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select>
    </div>
  );
};

export default Input;
