import React, { useRef, useState } from "react";

const TextareaAutoResize = () => {
  const [text, setText] = useState("demo");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [parentHeight, setparentHeight] = useState("auto");
  return (
    <>
      <div
        className="p-5"
        style={{
          minheight: parentHeight,
        }}
      >
        <textarea
          className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 focus:border-blue-400"
          placeholder="Please enter your content..."
          value={text}
          ref={textareaRef}
          style={{
            height: textareaHeight,
          }}
        />
      </div>
    </>
  );
};

export default TextareaAutoResize;
