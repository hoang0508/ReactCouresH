import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = (props) => {
  const { inputPlaholder, onChane } = useDropdown();

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
