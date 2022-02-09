import React, { useState } from "react";
import useHandleChange from "../../hooks/useHandleChange";

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
  // const [values, setValues] = useState({
  //   fullname: "",
  //   email: "",
  //   hobby: false,
  // });
  // const handleInputChange = (e) => {
  //   // console.log(e.target.type);
  //   // Kiểm tra type , điều kiện check box, ngc lại điều kiện input text
  //   // cách 1 : điều kiện if else thông thường
  //   // if (e.target.type === "checkbox") {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.checked,
  //   //   });
  //   // } else {
  //   //   setValues({
  //   //     ...values,
  //   //     [e.target.name]: e.target.value,
  //   //   });
  //   // }

  //   // Cách 2 : operator
  //   // const type = e.target.type;
  //   // setValues({
  //   //   ...values,
  //   //   [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
  //   // });
  // };
  const { values, handleChange } = useHandleChange({
    fullname: "",
    email: "",
    hobby: false,
  });
  // Validation
  const [nameError, setNameError] = useState("");
  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === "") {
      setNameError("Your fullName is empty!");
    }
  };
  return (
    <div className="p-5">
      <form
        className="flex gap-x-3"
        autoComplete="off"
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <div className="flex flex-col gap-y-3">
          <input
            type="text"
            name="fullname"
            className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
            placeholder="Enter your name"
            onChange={(e) => handleChange(e)}
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          className="w-full max-w-[300px] p-5 border border-gray-200 rounded-lg"
          placeholder="Enter your email address"
          onChange={(e) => handleChange(e)}
        />
        {/* <input type="checkbox" name="hobby" onChange={(e) => handleChange(e)} /> */}
        <button type="submit" className="p-3 bg-blue-500 rounded-lg text-white">
          Submit
        </button>
      </form>
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