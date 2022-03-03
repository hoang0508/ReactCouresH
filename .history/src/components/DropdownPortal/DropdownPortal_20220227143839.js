import React from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const handleShow = (e) => {
    // setShow(!show);
    console.log(nodeRef.current.getBoudingClientRect());
  };
  return (
    <>
      <div className="relative w-full max-w-[400px]" ref={nodeRef}>
        <div
          onClick={() => handleShow()}
          className="w-full p-5 border border-gray-200 rounded-lg cursor-pointer"
        >
          Selected
        </div>
        {show && (
          <div className="absolute left-0 w-full bg-white border border-gray-200 top-full">
            <div className="p-5">Javascript</div>
            <div className="p-5">ReactJs</div>
            <div className="p-5">VueJs</div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownPortal;
