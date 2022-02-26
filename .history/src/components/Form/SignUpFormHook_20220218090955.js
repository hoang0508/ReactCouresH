import React, { useEffect } from "react";
import { Controller, useForm, useController } from "react-hook-form";
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
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
    watch,
    reset,
    setFocus,
    setValue,
  } = useForm({
    // Yup
    resolver: yupResolver(schemaValidation),
    // Fix lỗi isValid
    mode: "onChange",
  });

  // console.log(errors);
  // console.log(isValid);
  // console.log(isDirty);
  // console.log(dirtyFields);
  const watchShowAge = watch("showAge", false);
  console.log(watchShowAge);
  const onSubmit = async (values) => {
    //Kiểm tra đã validation form chưa
    if (isValid) {
      console.log("send data to backen");
      // after successfuly submited
      // then reset form
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }

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
  // setFocus
  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);
  // setValue
  const handleClickDemodata = () => {
    setValue("firstName", "hoang");
    setValue("lastName", "huyhoang");
    setValue("email", "hoang@gmail.com");
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
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          control={control}
          id="email"
          placeholder="Enter your email address"
        ></MyInput>
        {/* <input
          className="border rounded-md p-4 border-gray-100"
          type="text"
          name="email"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        /> */}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register("showAge")} />
        {watchShowAge && (
          <input type="number" placeholder="Please enter your age" />
        )}
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
      <div>
        <button
          onClick={() => handleClickDemodata()}
          className="m-3 p-3 bg-green-500 text-white"
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// Component Input // Controler
// const MyInput = ({ control1, ...props }) => {
//   return (
//     <div>
//       <Controller
//         name={props.name}
//         control={control1}
//         // giá trị value mặc địch
//         defaultValue=""
//         render={({ field }) => (
//           <input
//             className="border rounded-md p-4 border-gray-100"
//             {...field}
//             {...props}
//           />
//         )}
//       ></Controller>
//     </div>
//   );
// };

// Cách 2: dùng useController
const MyInput = ({ control, ...props }) => {
  const { field } = useController({ control, name: props.name });
  return (
    <input
      className="border rounded-md p-4 border-gray-100"
      {...field}
      {...props}
    />
  );
};

export default SignUpFormHook;
