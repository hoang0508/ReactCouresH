import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

// Khai báo dùng yup, validation
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});
const SignUpFormHook = () => {
  // errors = formSate.errors
  // Sử dụng useForm
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    // Fix lỗi isValid
    mode: "onChange",
  });
  // console.log(errors);
  console.log(isValid);
  const onSubmit = async (values) => {
    const response = await axios.get(
      "https://hn.algolia.com/api/v1/search?query=react"
    );
    return response;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 5000);
    // });
  };
  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          // name="firstName"
          id="firstName"
          placeholder="Enter your first name"
          // Register thay thế cho các hàm onChange, blur.... (Đăng ký vào input)
          // cách 1
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
          // cách 2: dùng yup
          {...register("firstName")}
        />
        {/* sử dụng validation Yup */}
        {errors?.firstName && (
          /* <div className="text-red-500 text-sm">Please fill out this field</div> */
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
        {/* code ko sử dung Yup */}
        {/* {errors.firstName && errors.firstName.type === "required" && (
          <div className="text-red-500 text-sm">
            {errors.firstName.message}
          </div>
        )} */}
        {/* {errors?.firstName?.type === "maxLength" ||
          (errors?.firstName?.type === "max" && (
            <div className="text-red-500 text-sm">
            Must be 10 character or less
          </div> 
            <div className="text-red-500 text-sm">
              {errors.firstName.message}
            </div>
          ))}  */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">LastName</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          // name="lastName"
          id="lastName"
          placeholder="Enter your last name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Email address</label>
        <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
      </div>
      <div>
        <button className="w-full p-4 bg-blue-600 text-white font-semibold rounded-lg">
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
