import React, { useRef } from "react";

const RefUse = () => {
  // const inputRef, abcRef = useRef(initialValue);
  const countRef = useRef(0);
  // truy xuất giá trị của ref
  console.log(countRef.current);
  // update giá trị ref
  countRef.current = 10;
  return <div>hello</div>;
};

export default RefUse;
