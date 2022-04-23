import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = (props) => {
  const context = useDropdown();
  console.log("🚀 ~ file: Option.js ~ line 6 ~ Option ~ context", context);
  return (
    <div className="option-item p-4 cursor-pointer flex justify-between items-center">
      {props.children}
    </div>
  );
};

export default Option;
