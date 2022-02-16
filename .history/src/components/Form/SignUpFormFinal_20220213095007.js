import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yub from "yup";

const SignUpFormFinal = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        job: "",
        tern: false,
      }}
      validationSchema={Yub.object({
        // validate input FirstName
        firstName: Yub.string().required("Required"),
        // validate input FirstName
        lastName: Yub.string().required("Required"),
        email: Yub.string().email().required("Required"),
        intro: Yub.string().required("Required"),
        job: Yub.string().required("Required"),
        terms: Yub.boolean(),
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
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">LastName</label>
          <Field
            name="lastName"
            type="text"
            className="border rounded-md p-4 border-gray-100"
            placeholder="Enter your last name"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="email">Email</label>
          <Field
            name="email"
            type="text"
            className="border rounded-md p-4 border-gray-100"
            placeholder="Enter your email"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            type="intro"
            className="border rounded-md p-4 border-gray-100 height-[300px] resize-none"
            placeholder="Enter your introduce"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            type="job"
            className="border rounded-md p-4 border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backen">Backen Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </Formik>
  );
};

export default SignUpFormFinal;
