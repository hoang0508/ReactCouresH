import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = useDropdown();
  console.log(props.children);
  return (
    <div
      className="option-item p-4 cursor-pointer flex justify-between items-center"
      // onClick={() => onClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Option;
