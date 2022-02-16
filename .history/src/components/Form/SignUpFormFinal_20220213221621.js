import React from "react";
import { Formik, Field, ErrorMessage, useField, Form } from "formik";
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
      <Form className="p-10 w-full max-w-[500px] mx-auto" autoComplete="off">
        <MyInput
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          id="firstName"
        />
        <MyInput
          label="Last Name"
          name="lastName"
          placeholder="Enter your last name"
          id="lastName"
        />
        <MyInput
          label="Email"
          name="email"
          placeholder="Enter your email"
          id="email"
          type="email"
        />
        {/* <div className="flex flex-col gap-2 mb-5"> */}
        {/* <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            className="border rounded-md p-4 border-gray-100"
            placeholder="Enter your first name"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div> */}
        {/* </div> */}
        {/* <div className="flex flex-col gap-2 mb-5">
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
        </div> */}
        {/* <div className="flex flex-col gap-2 mb-5">
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
        </div> */}
        <MyTextarea
          label="introduce yourself"
          name="intro"
          placeholder="Enter your introduce"
          id="intro"
        />
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="intro">Introduce yourself</label>
          <Field
            name="intro"
            className="border rounded-md p-4 border-gray-100 height-[300px] resize-none"
            placeholder="Enter your introduce"
            as="textarea"
          ></Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="intro"></ErrorMessage>
          </div>
        </div> */}
        <MySelectBox label="Select your job" name="job">
          <option value="frontend">Frontend Developer</option>
          <option value="backen">Backen Developer</option>
          <option value="fullstack">FullStack Developer</option>
        </MySelectBox>
        {/* <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="job">Select your job</label>
          <Field
            name="job"
            className="border rounded-md p-4 border-gray-100"
            as="select"
          >
            <option value="frontend">Frontend Developer</option>
            <option value="backen">Backen Developer</option>
            <option value="fullstack">FullStack Developer</option>
          </Field>
          <div className="text-sm text-red-500">
            <ErrorMessage name="job"></ErrorMessage>
          </div>
        </div> */}
        <MyCheckBox name="tern">
          <p>I accept the terms and conditions</p>
        </MyCheckBox>
        {/* <div className="flex items-center gap-2 mb-5">
          <Field
            name="terms"
            className="border rounded-md p-4 border-gray-100"
            type="checkbox"
          ></Field>
          <p>I accept the terms and conditions</p>
          <div className="text-sm text-red-500">
            <ErrorMessage name="terms"></ErrorMessage>
          </div>
        </div> */}
        <div>
          <button
            type="submit"
            className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

// useField , === Tối ưu form sử dụng hàm , props
// destructuring
// rest parameter
// Component MyInput
const MyInput = ({ label, ...props }) => {
  // Error
  const [field, meta] = useField(props);
  // console.log(field);
  // (3) [{…}, {…}, {…}]
  // 0: {name: 'firstName', value: '', onChange: ƒ, onBlur: ƒ}
  // 1: {value: '', error: undefined, touched: false, initialValue: '', initialTouched: false, …}
  // 2: {setValue: ƒ, setTouched: ƒ, setError: ƒ}
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      {/* input */}
      <input
        type="text"
        className="border rounded-md p-4 border-gray-100"
        // placeholder={props.placeholder} // c1
        {...props} //c2
        {...field}
      />
      {/* Error */}
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

// Textarea
const MyTextarea = ({ label, ...props }) => {
  // Error
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      {/* input */}
      <textarea
        type="text"
        className="border rounded-md p-4 border-gray-100 h-[150px] resize-none"
        // placeholder={props.placeholder} // c1
        {...props} //c2
        {...field}
      />
      {/* Error */}
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

// SelectBox
const MySelectBox = ({ label, ...props }) => {
  // Error
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      {/* input */}
      <select
        type="text"
        className="border rounded-md p-4 border-gray-100 "
        // placeholder={props.placeholder} // c1
        {...props} //c2
        {...field}
      />
      {/* Error */}
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  // Error
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        {/* input */}
        <input
          type="checkbox"
          // placeholder={props.placeholder} // c1
          {...props} //c2
          {...field}
        />
        {children}
      </label>
      {/* Error */}
      {meta.error && meta.touched ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
