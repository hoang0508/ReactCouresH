import React, { useEffect, useRef } from "react";

const InputRef = () => {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    divRef.current = divRef.current.style.backgroundColor = "red";
    // divRef.current = divRef.current.style.color = "#fff";
  }, []);
  return (
    <div>
      <div className="input-div" ref={divRef}>
        hello
      </div>
    </div>
  );
};

export default InputRef;
