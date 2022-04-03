import React from "react";
import useToggle from "./useToggle";

const Editable = () => {
  const { value: edit, handleToggleValue: handleEdit } = useToggle();
  return (
    <div>
      {edit && (
        <input type="text" className="p-3 border border-gray-200 rounded-md" />
      )}
      <button onClick={() => handleEdit()}>Click me</button>
    </div>
  );
};

export default Editable;
