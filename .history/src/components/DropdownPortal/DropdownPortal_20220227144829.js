import React, { useState } from "react";
import useClickOutSide from "../../hooks/useClickOutSide";

const DropdownPortal = () => {
  const { show, setShow, nodeRef } = useClickOutSide();
  // coord, getBoundingClientRect
  const [coord, setCoord] = useState({});
  // click show
  const handleShow = (e) => {
    setShow(!show);
    console.log(nodeRef.current.getBoundingClientRect());
    setCoord(nodeRef.current.getBoundingClientRect());
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
        {show && <DropdownList />}
      </div>
    </>
  );
};

const DropdownList = () => {
  return (
    <div
      className="absolute left-0 w-full bg-white border border-gray-200 top-full"
      style={{
        left: coord.left,
        top: coord.top,
        width: coord.width,
      }}
    >
      <div className="p-5">Javascript</div>
      <div className="p-5">ReactJs</div>
      <div className="p-5">VueJs</div>
    </div>
  );
};

export default DropdownPortal;
