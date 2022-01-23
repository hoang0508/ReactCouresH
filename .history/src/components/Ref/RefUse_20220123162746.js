import React, { useRef } from "react";

const RefUse = () => {
  // const inputRef, abcRef = useRef(initialValue);
  const countRef = useRef(0);
  // truy xuất giá trị của ref
  console.log(countRef.current);
  return <div>hello</div>;
};

export default RefUse;
