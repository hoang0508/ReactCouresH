import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const { onClick } = useDropdown();
  console.loga(onClick);
  return (
    <div
      className="option-item p-4 cursor-pointer flex items-center justify-between"
      onClick={() => onClick(props.children)}
    >
      {props.children}
    </div>
  );
};

export default Option;
