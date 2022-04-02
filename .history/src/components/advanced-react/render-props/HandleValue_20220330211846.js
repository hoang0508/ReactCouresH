import React, { useState } from "react";

const HandleValue = () => {
  return (
    <div>
      <Input render={(value) => <DisplayValue value={value} />} />
    </div>
  );
};

// Input
const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="p-3 border border-gray-500 w-full max-w-[500px]"
        value={value}
        type="text"
        name=""
        id=""
        onChange={(e) => setValue(e.target.value)}
      />
      {props.render(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <div>{value}</div>;
};

export default HandleValue;
