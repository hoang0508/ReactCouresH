import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yub from "yup";

const SignUpFormV2 = () => {
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
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <form autoComplete="off" className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            className="border rounded-md p-4 border-gray-100"
            placeholder="Enter your first name"
          ></Field>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            className="border rounded-md p-4 border-gray-100"
            placeholder="Enter your last name"
          ></Field>
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
