import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ inputPlaholder, onChane }) => {
  const context = useDropdown();
  console.log("🚀 ~ file: Search.js ~ line 6 ~ Search ~ context", context);
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={inputPlaholder}
        className="p-4 outline-none w-full border border-gray-200 rounded"
        onChange={onChane}
      />
    </div>
  );
};

export default Search;
