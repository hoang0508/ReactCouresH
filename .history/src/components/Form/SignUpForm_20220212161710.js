import React from "react";
import { useFormik } from "formik";

// Validation
const validate = (values) => {
  const error = {};
  if (!values.firstName) {
    error.firstName = "Required";
  } else if (values.firstName.length > 20) {
    error.firstName = "Must be 20 characters or less";
  }
  return error;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
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
