import React, { useRef, useState } from "react";

const RefUse = () => {
  // Sử dụng useRef
  // // const inputRef, abcRef = useRef(initialValue);
  // const countRef = useRef(0);
  // // truy xuất giá trị của ref
  // console.log(countRef.current);
  // // update giá trị ref
  // countRef.current = 10;
  // console.log(countRef.current);

  // Ex : ==> Sự khác nhau useRef và useState
  // Sử dụng useState
  // const [count, setCount] = useState(0);
  // const handleClick = () => {
  //   const updateCount = count + 1;
  //   console.log(`Click ${updateCount}`);
  //   setCount(updateCount);
  // };
  // Sử dụng useRef
  const countRef = useRef(0);
  const handleClick = () => {
    const updateCount = countRef.current + 1;
    console.log(`Click ${updateCount}`);
    countRef.current++;
  };

  console.log("render");
  return (
    <div>
      <button
        className="bg-blue-500 m-5 p-3 text-white"
        onClick={() => handleClick()}
      >
        Click me
      </button>
    </div>
  );
};

export default RefUse;
