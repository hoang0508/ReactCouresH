import React, { useEffect, useRef } from "react";

const InputRef = () => {
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef);
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
