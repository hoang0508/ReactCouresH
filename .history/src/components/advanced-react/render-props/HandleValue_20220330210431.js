import React, { useState } from "react";

const HandleValue = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <Input value={value} setValue={setValue} />
      <DisplayValue value={value}></DisplayValue>
    </div>
  );
};

// Input
const Input = ({ value, setValue }) => {
  return (
    <input
      type="text"
      name=""
      id=""
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const DisplayValue = ({ value }) => {
  return <div>{value}</div>;
};

export default HandleValue;
