import React from "react";

const SignUpForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <label htmlFor="firstName">Firstname</label>
        <input type="text" id="firstName" placeholder="Enter your first name" />
      </div>
    </div>
  );
};

export default SignUpForm;
