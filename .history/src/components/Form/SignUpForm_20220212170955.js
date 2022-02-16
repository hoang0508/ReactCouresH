import React from "react";
import { useFormik } from "formik";
import * as Yub from "yup";
/// Note ==, onBlur, touched , validation, formik

// Validation ++ // CÁCH 1: TỰ VIẾT
// const validate = (values) => {
//   const error = {};
//   // FirstName
//   if (!values.firstName) {
//     error.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     error.firstName = "Must be 20 characters or less";
//   }

//   // lastName
//   if (!values.lastName) {
//     error.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     error.lastName = "Must be 20 characters or less";
//   }
//   return error;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate, // CÁCH TỰ VIẾT
    // CÁCH 2: YUB VALIDATION
    validationSchema: Yub.object({
      firstName: Yub.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yub.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
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
          onBlur={formik.handleBlur}
        />
        {/* touched */}
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {/* touched */}
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
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
