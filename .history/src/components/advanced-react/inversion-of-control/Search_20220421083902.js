import React from "react";

const Search = ({ inputPlaholder, onChane }) => {
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
