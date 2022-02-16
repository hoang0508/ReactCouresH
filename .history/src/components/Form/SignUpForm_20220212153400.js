import React from "react";

const SignUpForm = () => {
  return (
    <div className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          id="firstName"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <button className="w-full">Submit</button>
      </div>
    </div>
  );
};

export default SignUpForm;
