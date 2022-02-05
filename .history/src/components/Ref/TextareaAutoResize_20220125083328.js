import React from "react";

const TextareaAutoResize = () => {
  return (
    <>
      <div className="p-5">
        <textarea
          className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400"
          placeholder="Please enter your content..."
        />
      </div>
    </>
  );
};

export default TextareaAutoResize;
