import React, { useState } from "react";

const Form = () => {
  // //
  // const [fullname, setFullName] = useState("");
  // const handleInputChange = (e) => {
  //   console.log(e.target.value);
  //   setFullName(e.target.value);
  // };
  // //
  // const [message, setMessage] = useState("");
  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };
  // //
  // const [country, setCountry] = useState("");
  // const handleSelectChange = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    hobby: false,
  });
  const handleInputChange = (e) => {
    // console.log(e.target.type);
    // Kiểm tra type , điều kiện check box, ngc lại điều kiện input text
    if (e.target.type === "checkbox") {
      setValues({
        ...values,
        [e.target.name]: e.target.checked,
      });
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your name"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={(e) => handleInputChange(e)}
        />
        <input
          type="checkbox"
          name="hobby"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      {/* {message}
      <textarea
        name="message"
        className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
        placeholder="Enter your name"
        onChange={(e) => handleTextareaChange(e)}
      ></textarea>
      {country}
      <select name="country" onChange={(e) => handleSelectChange(e)}>
        <option value="vietnam">VN</option>
        <option value="usa">USA</option>
        <option value="japan">Japan</option>
      </select> */}
    </div>
  );
};

export default Form;
