import React from "react";
import { useFormik, Formik, Field, ErrorMessage } from "formik";
import * as Yub from "yup";

const SignUpFormV2 = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    // validate, // CÁCH TỰ VIẾT
    // CÁCH 2: YUB VALIDATION  , sử dụng thư viện yub
    validationSchema: Yub.object({
      // validate input FirstName
      firstName: Yub.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      // validate input FirstName
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
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      validationSchema={Yub.object({
        // validate input FirstName
        firstName: Yub.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        // validate input FirstName
        lastName: Yub.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={formik.handleSubmit}
    >
      <form autoComplete="off" className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <input
            className="border rounded-md p-4 border-gray-100"
            type="text"
            // name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            // Cách 1:
            // value={formik.values.firstName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // Cách 2:
            {...formik.getFieldProps("firstName")}
          />
          {/* touched */}
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-sm text-red-500">
              {formik.errors.firstName}
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <input
            className="border rounded-md p-4 border-gray-100"
            type="text"
            // name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            // Cách 1:
            // value={formik.values.lastName}
            // onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // Cách 2:
            {...formik.getFieldProps("lastName")}
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
    </Formik>
  );
};

export default SignUpFormV2;