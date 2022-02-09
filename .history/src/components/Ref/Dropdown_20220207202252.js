import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const Dropdown = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="relative w-full max-w-[400px]" ref={nodeRef}>
        <div
          onClick={() => handleShow()}
          className="p-5 border border-gray-200 rounded-lg w-full cursor-pointer"
        >
          Selected
        </div>
        {show && (
          <div className="border border-gray-200 absolute top-full left-0 w-full bg-white">
            <div className="p-5">Javascript</div>
            <div className="p-5">ReactJs</div>
            <div className="p-5">VueJs</div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
