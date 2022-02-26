import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  console.log(errors);
  const onSubmit = (values) => {
    console.log(values);
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
          // {...register("firstName", {
          //   required: true,
          //   maxLength: 10,
          // })}
          {...register("firstName")}
        />
        {errors?.firstName && (
          /* <div className="text-red-500 text-sm">Please fill out this field</div> */
          <div className="text-red-500 text-sm">
            {errors.firstName?.message}
          </div>
        )}
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
