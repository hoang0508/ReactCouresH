import React from "react";
import { useForm } from "react-hook-form";
const SignUpFormHook = () => {
  const form = useForm();
  console.log(form);
  return (
    <form autoComplete="off" className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          // name="firstName"
          id="firstName"
          placeholder="Enter your first name"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          // name="lastName"
          id="lastName"
          placeholder="Enter your last name"
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Email address</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
