import React from "react";
import { useFormik } from "formik";
const SignUpForm = () => {
  const formik = useFormik({});
  console.log(formik);
  return (
    <form className="p-10 w-full max-w-[500px] mx-auto">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
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

export default SignUpForm;
