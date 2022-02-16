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
      // validationSchema={Yub.object({
      //   // validate input FirstName
      //   firstName: Yub.string().required("Required"),
      //   // validate input FirstName
      //   lastName: Yub.string().required("Required"),
      //   email: Yub.string().email().required("Required"),
      //   intro: Yub.string().required("Required"),
      //   job: Yub.string().required("Required"),
      //   terms: Yub.boolean().oneOf(
      //     [true],
      //     "Please check the tern and conditions"
      //   ),
      // })}
      onSubmit={(values, actions) => {
        // console.log(actions)
        // console.log(values);
        setTimeout(() => {
          actions.resetForm = {
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            job: "",
            tern: false,
          };
          actions.setSubmitting(false);
        }, 5000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
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
            <MyTextarea
              label="introduce yourself"
              name="intro"
              placeholder="Enter your introduce"
              id="intro"
            />
            <MySelectBox label="Select your job" name="job">
              <option value="frontend">Frontend Developer</option>
              <option value="backen">Backen Developer</option>
              <option value="fullstack">FullStack Developer</option>
            </MySelectBox>
            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>
            <div>
              <button
                type="submit"
                className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg"
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
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
