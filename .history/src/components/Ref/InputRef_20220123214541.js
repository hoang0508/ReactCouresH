import React, { useEffect, useRef } from "react";

const InputRef = () => {
  const divRef = useRef();
  const inputRef = useRef();
  useEffect(() => {
    // console.log(divRef.current);
    // divRef.current = divRef.current.style.backgroundColor = "red";
    // divRef.current = divRef.current.style.color = "#fff";
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <div className="input-div" ref={divRef}>
        hello
      </div>
      <input
        type="text"
        placeholder="Auto focus input"
        className="inline-block p-5 border border-gray-200 focus:border-blue-500"
        ref={inputRef}
      />
    </div>
  );
};

export default InputRef;
